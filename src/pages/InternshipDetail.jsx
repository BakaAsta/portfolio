import { useParams } from 'react-router-dom'
import { internshipDetails } from '../data/projects'

const InternshipDetail = () => {
  const { slug } = useParams()
  const internship = internshipDetails[slug]

  if (!internship) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Page introuvable</h1>
        <p className="mt-4 text-sm text-ink/70 dark:text-white/70">
          La page demandée n&apos;existe pas ou a été déplacée.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <a href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
        ← Retour à l&apos;accueil
      </a>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">{internship.title}</h1>
      <p className="mt-4 text-sm text-ink/70 dark:text-white/70">{internship.intro}</p>

      <div className="mt-10 space-y-10">
        {internship.sections.map((section) => (
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
    </div>
  )
}

export default InternshipDetail
