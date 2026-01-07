const aboutCards = [
  {
    title: 'Video distribution',
    description: 'Whether you’re halfway through the editing process, or you.',
    icon: '/img/icons/si-3.png',
  },
  {
    title: 'Video hosting',
    description: 'Whether you’re halfway through the editing process, or you.',
    icon: '/img/icons/si-4.png',
  },
]

const testimonials = [
  {
    text: 'Delivers such a great service that it can benefit all kinds of people from any number of industries.',
    author: 'Krista Attorn',
    role: 'Web Designer',
    avatar: '/main/img/team/team-1.jpg',
  },
  {
    text: 'Videographer delivers such a great service that it can benefit all kinds of people from any number.',
    author: 'Krista Attorn',
    role: 'Web Designer',
    avatar: '/main/img/team/team-2.jpg',
  },
  {
    text: 'Videographer delivers such a great service that it can benefit all kinds of people from any number.',
    author: 'Krista Attorn',
    role: 'Web Designer',
    avatar: '/main/img/team/team-3.jpg',
  },
]

const About = () => (
  <div className="mx-auto max-w-6xl px-6 py-16">
    <header className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">About videograph</p>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Who we are?</h1>
      <p className="mt-4 text-sm text-ink/70 dark:text-white/70">
        Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service production company
        specializing in commercial, broadcast, tourism & action sport video production services.
      </p>
    </header>

    <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,1fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        <img src="/main/img/about/about-1.jpg" alt="" className="h-56 w-full rounded-3xl object-cover sm:row-span-2" />
        <img src="/main/img/about/about-2.jpg" alt="" className="h-28 w-full rounded-3xl object-cover" />
        <img src="/main/img/about/about-3.jpg" alt="" className="h-28 w-full rounded-3xl object-cover" />
      </div>
      <div className="grid gap-6">
        {aboutCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-ink">
            <img src={card.icon} alt="" className="h-10 w-10" />
            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-ink/70 dark:text-white/70">{card.description}</p>
          </div>
        ))}
      </div>
    </div>

    <section className="mt-16 rounded-3xl bg-ink px-6 py-12 text-white">
      <h2 className="text-center text-2xl font-semibold">Loved by Clients</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.text} className="rounded-2xl bg-white/5 p-6">
            <p className="text-sm text-white/80">{item.text}</p>
            <div className="mt-4 flex items-center gap-3">
              <img src={item.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold">{item.author}</div>
                <div className="text-xs text-white/60">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default About
