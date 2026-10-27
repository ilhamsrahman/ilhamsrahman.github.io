import posts from '@/data/medium-posts.json'
import ContentCard from '@/components/content-card'
import { formatDate } from '@/lib/format-date'

export const metadata = {
  title: 'Blog - Ilham Rahman',
  description: 'Writing by Ilham Rahman, synced from Medium',
}

// Posts come from Medium automatically (see scripts/fetch-medium.mjs)
const MEDIUM_PROFILE = 'https://medium.com/@ilham.suryawan'

type Post = {
  title: string
  link: string
  date: string
  image: string | null
  excerpt: string
  categories: string[]
}

export default function Blog() {
  const list = posts as Post[]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 style={{ fontFamily: 'Newsreader' }} className="h1 mb-4 text-black">Personal Blog</h1>
            <p className="text-xl text-gray-600">I share my personal thoughts here.</p>
          </div>

          {list.length === 0 ? (
            <p className="text-center text-lg text-gray-600">
              No posts yet. Follow me on{' '}
              <a href={MEDIUM_PROFILE} target="_blank" rel="noreferrer" className="text-themecol-200 underline">Medium</a>.
            </p>
          ) : (
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-stretch md:max-w-none">
              {list.map((post) => (
                <ContentCard
                  key={post.link}
                  href={post.link}
                  title={post.title}
                  text={post.excerpt}
                  image={post.image}
                  date={formatDate(post.date)}
                  dateTime={post.date}
                  tags={post.categories}
                  cta="Read on Medium →"
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="btn text-white bg-themecol-200 hover:bg-themecol-300 rounded-md"
            >
              See all posts on Medium
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
