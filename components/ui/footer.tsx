import Link from 'next/link'
import { withBase } from '@/lib/base-path'

const pages = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/israhman/',
    icon: <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@ilham.suryawan',
    icon: (
      <>
        <circle cx="11.5" cy="16" r="4.5" />
        <ellipse cx="19.6" cy="16" rx="2.2" ry="4.3" />
        <ellipse cx="23.8" cy="16" rx=".9" ry="3.9" />
      </>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ilhamsrahman',
    icon: <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ilhamsrahman/',
    icon: (
      <>
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </>
    ),
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-black/10">

          <div className="grid md:grid-cols-12 gap-10 mb-10">

            {/* Name, one-liner, social links */}
            <div className="md:col-span-8">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <img src={withBase('/images/hair-man.svg')} className="w-8 h-8" alt="" />
                <span style={{ fontFamily: 'Newsreader' }} className="text-2xl text-black">Ilham Rahman</span>
              </Link>
              <p className="text-gray-600 max-w-md mb-6">Writing, projects and things I am learning along the way.</p>
              <ul className="flex gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="flex justify-center items-center rounded-full bg-white/70 ring-1 ring-black/5 text-themecol-200 hover:bg-themecol-200 hover:text-white transition duration-150 ease-in-out"
                    >
                      <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">{s.icon}</svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site links */}
            <div className="md:col-span-4 md:justify-self-end">
              <h6 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">Pages</h6>
              <ul className="space-y-2">
                {pages.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-gray-600 hover:text-themecol-200 transition duration-150 ease-in-out">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Ilham Rahman</div>

        </div>
      </div>
    </footer>
  )
}
