import { useParams } from 'react-router-dom'
import { projectDetails } from '../data/projects'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projectDetails[slug]

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Projet introuvable</h1>
        <p className="mt-4 text-sm text-ink/70 dark:text-white/70">
          Le projet demandé n&apos;existe pas ou a été déplacé.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <a href="/portfolio" className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
        ← Retour au portfolio
      </a>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">{project.title}</h1>
      <p className="mt-4 text-sm text-ink/70 dark:text-white/70">{project.intro}</p>

      <div className="mt-10 space-y-10">
        {project.sections.map((section) => (
          <section key={section.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-ink">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            {section.body && (
              <div className="mt-4 space-y-3 text-sm text-ink/70 dark:text-white/70">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {section.list && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/70 dark:text-white/70">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.subsections && (
              <div className="mt-6 space-y-4">
                {section.subsections.map((sub) => (
                  <div key={sub.title}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">{sub.title}</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-ink/70 dark:text-white/70">
                      {sub.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {section.images && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {section.images.map((image) => (
                  <img key={image} src={image} alt="" className="h-48 w-full rounded-2xl object-cover" />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {project.linkUrl && (
        <div className="mt-10 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
          <a href={project.linkUrl} target="_blank" rel="noreferrer" className="text-moss">
            {project.linkLabel}
          </a>
          {project.extraLinkUrl && (
            <a href={project.extraLinkUrl} target="_blank" rel="noreferrer" className="text-ember">
              {project.extraLinkLabel}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
