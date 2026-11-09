'use client'

import { useEffect, useRef, useState } from 'react'
import ContentCard from '@/components/content-card'

export type Project = {
  title: string
  link: string
  date?: string
  image: string | null
  description: string
  tags: string[]
}

// Tags shown as buttons. Every other tag goes in the "More" dropdown.
// Edit this list to change which tags are always visible.
const MAIN_TAGS = ['Python', 'AWS', 'Java', 'Excel', 'Tableau']

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // How many projects use each tag
  const counts = new Map<string, number>()
  projects.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
  const allTags = Array.from(counts.keys())

  const mainTags = MAIN_TAGS.filter((t) => counts.has(t))
  const moreTags = allTags.filter((t) => !mainTags.includes(t)).sort((a, b) => a.localeCompare(b))
  const activeInMore = active !== null && moreTags.includes(active)

  const shown = active ? projects.filter((p) => p.tags.includes(active)) : projects

  // Close the menu when clicking outside it or pressing Escape
  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const pill = (selected: boolean) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition duration-150 ease-in-out ${
      selected
        ? 'bg-themecol-200 text-white shadow-sm'
        : 'bg-white/70 text-gray-700 ring-1 ring-black/10 hover:bg-white hover:text-themecol-200'
    }`

  const choose = (tag: string | null) => {
    setActive(tag)
    setMenuOpen(false)
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-2 mb-10" role="group" aria-label="Filter projects by tag">
        <button type="button" className={pill(active === null)} aria-pressed={active === null} onClick={() => choose(null)}>
          All <span className="opacity-60">{projects.length}</span>
        </button>

        {mainTags.map((t) => (
          <button key={t} type="button" className={pill(active === t)} aria-pressed={active === t} onClick={() => choose(active === t ? null : t)}>
            {t} <span className="opacity-60">{counts.get(t)}</span>
          </button>
        ))}

        {moreTags.length > 0 && (
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className={`${pill(activeInMore)} inline-flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {activeInMore ? active : 'More'}
              <svg className={`w-3 h-3 fill-current transition-transform ${menuOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" aria-hidden="true">
                <path d="M6 8.5 1.5 4h9L6 8.5z" />
              </svg>
            </button>

            {menuOpen && (
              <ul className="absolute z-20 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mt-2 w-60 max-h-72 overflow-y-auto rounded-xl bg-white p-1.5 shadow-xl ring-1 ring-black/5">
                {moreTags.map((t) => (
                  <li key={t}>
                    <button
                      type="button"
                      onClick={() => choose(t)}
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-sm text-left transition duration-100 ${
                        active === t ? 'bg-amber-100 text-amber-900 font-medium' : 'text-gray-800 hover:bg-amber-50'
                      }`}
                    >
                      {t}
                      <span className="text-gray-400">{counts.get(t)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-stretch md:max-w-none">
        {shown.map((project) => (
          <ContentCard
            key={project.title}
            href={project.link}
            title={project.title}
            text={project.description}
            image={project.image}
            date={project.date}
            tags={project.tags}
            cta="View project →"
          />
        ))}
      </div>
    </>
  )
}
