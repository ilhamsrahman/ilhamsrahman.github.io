import Link from 'next/link'

// A home-page section: heading on the left, "see all" link on the right, cards below
export default function HomeSection({
  title,
  subtitle,
  href,
  linkLabel,
  children,
}: {
  title: string
  subtitle: string
  href: string
  linkLabel: string
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-black/10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8" data-aos="fade-up">
            <div>
              <h2 style={{ fontFamily: 'Newsreader' }} className="text-3xl md:text-4xl font-bold text-black">{title}</h2>
              <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
            </div>
            <Link href={href} className="shrink-0 font-medium text-themecol-200 border-b border-themecol-200/40 hover:border-themecol-200 transition duration-150">
              {linkLabel} →
            </Link>
          </div>
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-stretch md:max-w-none" data-aos="fade-up" data-aos-delay="100">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
