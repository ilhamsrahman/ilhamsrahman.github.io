import projects from '@/data/projects.json'
import ProjectGrid, { type Project } from '@/components/project-grid'

export const metadata = {
  title: 'Projects - Ilham Rahman',
  description: 'Projects by Ilham Rahman',
}

// To add a project, add an entry to data/projects.json.
// "image" can be a file in public/images (e.g. "/images/my-project.png") or null.

export default function Projects() {
  const list = projects as Project[]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-10">
            <h1 style={{ fontFamily: 'Newsreader' }} className="h1 mb-4 text-black">Projects</h1>
            <p className="text-xl text-gray-600">Things I have built and worked on.</p>
          </div>

          <ProjectGrid projects={list} />

        </div>
      </div>
    </section>
  )
}
