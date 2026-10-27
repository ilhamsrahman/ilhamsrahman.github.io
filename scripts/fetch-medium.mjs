// Downloads your latest Medium posts and saves them to data/medium-posts.json,
// which the Blog page (app/(auth)/blog/page.tsx) reads.
//
// Runs automatically before `npm run dev` and `npm run build`, and GitHub
// rebuilds the site every day (see .github/workflows/nextjs.yml), so new
// Medium posts appear on the site without you doing anything.
//
// If Medium can't be reached, the previously saved posts are kept and the
// build carries on.

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

export const MEDIUM_USERNAME = 'ilham.suryawan'
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`
const OUT_FILE = fileURLToPath(new URL('../data/medium-posts.json', import.meta.url))

const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&(apos|#39);/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')

const stripCdata = (s) => s.replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1').trim()

function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`))
  return m ? stripCdata(m[1]) : ''
}

export function parseFeed(xml) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []
  return items.map((item) => {
    const html = tag(item, 'content:encoded')

    // First real image in the post (skip Medium's invisible tracking pixel)
    const image =
      [...html.matchAll(/<img[^>]+src="([^"]+)"/g)]
        .map((m) => m[1])
        .find((src) => !src.includes('/_/stat')) ?? null

    // Short preview made from the post's paragraphs
    let excerpt = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map((m) => decode(m[1].replace(/<[^>]+>/g, '')).trim())
      .filter(Boolean)
      .join(' ')
    if (excerpt.length > 220) excerpt = excerpt.slice(0, 220).replace(/\s+\S*$/, '') + '…'

    return {
      title: decode(tag(item, 'title')),
      link: tag(item, 'link').replace(/\?source=.*$/, ''),
      date: new Date(tag(item, 'pubDate')).toISOString(),
      image,
      excerpt,
      categories: [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)].map((m) => decode(stripCdata(m[1]))),
    }
  })
}

async function main() {
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (personal website build)' },
      signal: AbortSignal.timeout(10000),
    })
    if (!res.ok) throw new Error(`Medium answered ${res.status}`)
    const xml = await res.text()
    if (!xml.includes('<rss')) throw new Error('response was not an RSS feed')

    const posts = parseFeed(xml)
    await mkdir(fileURLToPath(new URL('../data', import.meta.url)), { recursive: true })
    await writeFile(OUT_FILE, JSON.stringify(posts, null, 2) + '\n')
    console.log(`[medium] Saved ${posts.length} post(s) from ${FEED_URL}`)
  } catch (err) {
    const existing = await readFile(OUT_FILE, 'utf8').catch(() => null)
    if (existing === null) {
      await mkdir(fileURLToPath(new URL('../data', import.meta.url)), { recursive: true })
      await writeFile(OUT_FILE, '[]\n')
    }
    console.warn(`[medium] Could not update posts (${err.message}). Keeping the saved ones.`)
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main()
