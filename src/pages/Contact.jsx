const contactItems = [
  {
    title: 'IUT Montpellier/Sète - Dep. Info & GEA',
    detail: '3 Rue Raspail, 34200 Sète',
  },
  {
    title: 'Téléphone',
    detail: '+33 07 68 01 11 98',
  },
  {
    title: 'Email',
    detail: 'xavier.trouche@outlook.fr',
  },
]

const Contact = () => (
  <div className="mx-auto max-w-5xl px-6 py-16">
    <header className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Contact</p>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Contactez-moi</h1>
      <p className="mt-4 text-sm text-ink/70 dark:text-white/70">
        Je reste disponible pour discuter de projets, d'opportunités ou simplement échanger autour du jeu vidéo.
      </p>
    </header>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {contactItems.map((item) => (
        <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-ink">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">{item.title}</h3>
          <p className="mt-3 text-sm text-ink/70 dark:text-white/70">{item.detail}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Contact
