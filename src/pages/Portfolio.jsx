import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioProjects } from '../data/projects'

const filters = ['Tous', 'Java', 'Web']

const Portfolio = () => {
  const [active, setActive] = useState('Tous')

  const projects = useMemo(() => {
    if (active === 'Tous') return portfolioProjects
    return portfolioProjects.filter((project) => project.category === active)
  }, [active])

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Portfolio</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Mes projets</h1>
        <p className="mt-4 max-w-2xl text-sm text-ink/70 dark:text-white/70">
          Sélection de projets académiques et professionnels. Filtrez par domaine pour explorer les projets Java ou Web.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 transition ${
              active === filter
                ? 'border-moss bg-moss text-white'
                : 'border-black/10 bg-white text-ink hover:border-moss dark:border-white/10 dark:bg-ink dark:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const card = (
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg transition hover:-translate-y-1 dark:border-white/10 dark:bg-ink">
              <div className="relative h-44">
                <img src={project.image} alt="" className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">{project.category}</div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-ink/60 dark:text-white/60">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 px-2 py-1 dark:border-white/10">
                      {tag}
                    </span>
                  ))}
                  <span className="rounded-full border border-black/10 px-2 py-1 dark:border-white/10">
                    {project.year}
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  <span>{project.external ? 'Voir' : 'Détails'}</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          )

          if (project.external) {
            return (
              <a key={project.id} href={project.href} target="_blank" rel="noreferrer">
                {card}
              </a>
            )
          }

          return (
            <Link key={project.id} to={project.href}>
              {card}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
