'use client'

import { useState } from 'react'
import ContentCard from '@/components/content-card'

export type Project = {
  title: string
  link: string
  date?: string
  image: string | null
  description: string
  tags: string[]
}

// Tag filter buttons + the grid of project cards
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string | null>(null)

  // Every tag used by any project, most-used first
  const counts = new Map<string, number>()
  projects.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
  const tags = Array.from(counts.keys()).sort((a, b) => counts.get(b)! - counts.get(a)! || a.localeCompare(b))

  const shown = active ? projects.filter((p) => p.tags.includes(active)) : projects

  const pill = (selected: boolean) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition duration-150 ease-in-out ${
      selected
        ? 'bg-themecol-200 text-white shadow-sm'
        : 'bg-white/70 text-gray-700 ring-1 ring-black/10 hover:bg-white hover:text-themecol-200'
    }`

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter projects by tag">
        <button type="button" className={pill(active === null)} aria-pressed={active === null} onClick={() => setActive(null)}>
          All <span className="opacity-60">{projects.length}</span>
        </button>
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            className={pill(active === t)}
            aria-pressed={active === t}
            onClick={() => setActive(active === t ? null : t)}
          >
            {t} <span className="opacity-60">{counts.get(t)}</span>
          </button>
        ))}
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
