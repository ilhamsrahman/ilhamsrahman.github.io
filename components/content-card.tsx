import { withBase } from '@/lib/base-path'

// One card in the Blog / Projects grids. Both pages use this so they look the same.

type ContentCardProps = {
  href: string
  title: string
  text: string
  image?: string | null
  date?: string
  dateTime?: string
  tags?: string[]
  cta: string
}

export default function ContentCard({ href, title, text, image, date, dateTime, tags = [], cta }: ContentCardProps) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="group flex flex-col h-full overflow-hidden rounded-lg bg-white/70 shadow-sm ring-1 ring-black/5 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {image && <img src={withBase(image)} alt="" loading="lazy" className="w-full h-44 object-cover" />}
      <div className="flex flex-col grow p-6">
        {date && <time dateTime={dateTime} className="text-sm text-gray-500 mb-2">{date}</time>}
        <h2 className="text-xl font-bold text-black mb-3 group-hover:text-themecol-200 transition duration-150">{title}</h2>
        <p className="text-gray-600 grow">{text}</p>
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.slice(0, 3).map((t) => (
              <li key={t} className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-900">{t}</li>
            ))}
          </ul>
        )}
        <span className="mt-5 pt-4 border-t border-gray-300 font-medium text-themecol-200">{cta}</span>
      </div>
    </a>
  )
}
