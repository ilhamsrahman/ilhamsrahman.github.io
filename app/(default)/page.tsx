export const metadata = {
  title: 'Ilham Rahman',
  description: 'Personal Website',
}

import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import HomeSection from '@/components/home-section'
import ContentCard from '@/components/content-card'
import type { Project } from '@/components/project-grid'
import { formatDate } from '@/lib/format-date'
import posts from '@/data/medium-posts.json'
import projects from '@/data/projects.json'

type Post = {
  title: string
  link: string
  date: string
  image: string | null
  excerpt: string
  categories: string[]
}

// How many cards to preview on the home page
const PREVIEW_COUNT = 3

export default function Home() {
  const latestPosts = (posts as Post[]).slice(0, PREVIEW_COUNT)
  const topProjects = (projects as Project[]).slice(0, PREVIEW_COUNT)

  return (
    <>
      <Hero />

      {latestPosts.length > 0 && (
        <HomeSection title="Latest writing" subtitle="Recent posts from my blog." href="/blog" linkLabel="All posts">
          {latestPosts.map((post) => (
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
        </HomeSection>
      )}

      <HomeSection title="Projects" subtitle="Things I have built and worked on." href="/projects" linkLabel="All projects">
        {topProjects.map((project) => (
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
      </HomeSection>

      <Newsletter />
    </>
  )
}
