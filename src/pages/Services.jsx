const services = [
  {
    title: 'Scriptwriting and editing',
    description:
      'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
    icon: '/img/icons/si-2.png',
  },
  {
    title: 'Motion graphics',
    description:
      'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
    icon: '/img/icons/si-1.png',
  },
  {
    title: 'Video distribution',
    description:
      'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
    icon: '/img/icons/si-3.png',
  },
  {
    title: 'Video hosting',
    description:
      'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
    icon: '/img/icons/si-4.png',
  },
]

const Services = () => (
  <div className="mx-auto max-w-6xl px-6 py-16">
    <header className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Services</p>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Our Services</h1>
      <p className="mt-4 text-sm text-ink/70 dark:text-white/70">
        Selection of service offerings from the original template, restyled with Tailwind.
      </p>
    </header>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-ink">
          <img src={service.icon} alt="" className="h-10 w-10" />
          <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm text-ink/70 dark:text-white/70">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Services
