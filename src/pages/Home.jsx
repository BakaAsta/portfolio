const skills = [
  {
    title: 'Java',
    icon: '/img/icons/java.png',
    description:
      'Approfondissement en Java avec tests unitaires, design patterns (Singleton, Factory) et principes SOLID.',
  },
  {
    title: 'HTML / CSS / JS',
    icon: '/img/icons/web.png',
    description:
      'Découverte de JavaScript à la Nuit de l\'Informatique et pratique de Tailwind, Bootstrap, Bulma, React et Vue.',
  },
  {
    title: 'PHP',
    icon: '/img/icons/php.png',
    description:
      'Stage ECIR sur le projet Leonn avec Symfony, API Platform et React pour le backend et frontend.',
  },
  {
    title: 'SQL / NoSQL',
    icon: '/img/icons/sql.png',
    description:
      'MySQL, PostgreSQL, Oracle, MariaDB et NoSQL (MongoDB, Cassandra) avec normalisation des données.',
  },
  {
    title: 'Docker',
    icon: '/img/docker.png',
    description:
      'Mise en place de services (serveurs web, bases de données, Grafana, phpMyAdmin) via Docker.',
  },
  {
    title: 'GitLab / GitHub',
    icon: '/img/icons/gitHub.png',
    description:
      'Gestion de version et collaboration en équipe avec issues et suivi de progression.',
  },
  {
    title: 'Management de projet',
    icon: '/img/managementProject.png',
    description:
      'Maquettes Figma, coordination d\'équipe, et suivi des tâches sur Trello et Notion.',
  },
  {
    title: 'C / C# / C++',
    icon: '/img/icons/c_bash.png',
    description:
      'Approfondissement en C++ et C# pour atteindre l\'objectif de développeur jeux vidéo.',
  },
]

const inspirations = [
  {
    title: 'Evènement Code Game Jam',
    subtitle: 'IUT Montpellier - Sète',
    image: '/img/work/gameJam.png',
    link: 'https://codegamejam.extragames.fr/',
    video: 'https://www.youtube.com/watch?v=7UAjKCyNUj4',
  },
  {
    title: 'Call Of Duty - Warzone',
    subtitle: '2020',
    image: '/img/work/warzone.png',
    link: 'https://www.callofduty.com/fr/warzone',
  },
  {
    title: 'Shorinji Ryu Karaté Club',
    subtitle: '2009-2022',
    image: '/main/img/team/karate.png',
    link: 'https://www.karate-pelissanne.org/page/13730-presentation',
  },
  {
    title: 'BLIZZARD - Overwatch',
    subtitle: '2016',
    image: '/img/work/overwatch.png',
    link: 'https://overwatch.blizzard.com/fr-fr/',
  },
  {
    title: 'EA Sports FC24',
    subtitle: '2023',
    image: '/img/work/fc24.png',
    link: 'https://www.ea.com/fr-fr/games/ea-sports-fc/fc-24',
  },
  {
    title: 'Anime',
    subtitle: '1917 - 2023',
    image: '/img/anime.jpg',
  },
  {
    title: "Evènement Nuit de l'info",
    subtitle: 'IUT Montpellier - Sète',
    image: '/img/work/nuitDeLinfo.png',
    link: 'https://www.nuitdelinfo.com/',
  },
]

const softSkills = [
  { label: 'Flexible et orienté vers les résultats', icon: '/img/icons/ci-1.png' },
  { label: "Esprit d'équipe", icon: '/img/icons/ci-2.png' },
  { label: "Envie d'apprendre et créatif", icon: '/img/icons/ci-3.png' },
  { label: "Ouvert d'esprit et attentif", icon: '/img/icons/ci-4.png' },
]

const experiences = [
  { title: 'Bac Général', subtitle: "Lycée L'Emperi", detail: 'Spécialité MATHS / NSI', image: '/img/team/lycee.png' },
  { title: 'BAFA', subtitle: 'Ifac Formation / Centre de Pélissanne', image: '/img/team/bafa.png' },
  { title: 'Cycle 3 Batterie', subtitle: 'Conservatoire M / Pélissanne', image: '/img/team/musique.png' },
  { title: 'BUT Informatique', subtitle: 'Conservatoire Manitas De Plata / Sète', image: '/img/team/but.png' },
  { title: 'Ecir', subtitle: 'Stage', detail: '52 Route du Gros Mourre pont, 13370 Mallemort', image: '/img/team/ecir.jpg', link: '/internship/ecir' },
  { title: 'Nocika', subtitle: 'Alternance (en cours)', detail: '1200 Av. des ventadouiro, 13300 Salon-de-Provence', image: '/img/team/nocika.jpg', link: '/internship/nocika' },
]

const Home = () => (
  <div>
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/img/hero/hero-1.jpg')" }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Conception d'applications</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Portfolio de Xavier Trouche
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Passionné par la création d\'expériences interactives, je conçois des projets web et logiciels
          avec une attention forte au design, à l\'émotion et à la performance.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#present"
            className="rounded-full bg-gradient-to-r from-moss to-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Découvrir mon profil
          </a>
          <a
            href="/assets/CV_Master.pdf"
            className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>

    <section id="present" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr,2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Savoir Faire</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Un profil orienté jeu vidéo et web</h2>
          <div className="mt-6 space-y-4 text-sm text-ink/70 dark:text-white/70">
            <p>
              Bonjour, je m&apos;appelle Xavier Trouche, j&apos;ai 21 ans et je suis actuellement en 3ᵉ année de BUT
              Informatique. Depuis mon plus jeune âge, je suis passionné par le domaine des jeux vidéo, un secteur où
              se rencontrent créativité et innovation technologique.
            </p>
            <p>
              Mon ambition professionnelle est de concevoir des projets qui marquent les joueurs, en mêlant une
              esthétique soignée et des récits percutants.
            </p>
            <p>
              Je souhaite poursuivre mes études avec un master spécialisé jeux vidéo, notamment le Master Jeux Vidéo
              du CNAM-ENJMIN à Angoulême ou le Master Imagine à Montpellier.
            </p>
            <p>Si vous souhaitez en savoir plus sur mon parcours, n&apos;hésitez pas à me contacter.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-ink"
            >
              <img src={skill.icon} alt="" className="h-10 w-10" />
              <h3 className="mt-4 text-lg font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm text-ink/70 dark:text-white/70">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-clay py-12 dark:bg-black/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold tracking-[0.3em] text-ink dark:text-white">
          Evènement & Inspirations
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {inspirations.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink text-white"
            >
              <img src={item.image} alt="" className="h-52 w-full object-cover opacity-80 transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-xs text-white/70">{item.subtitle}</p>
                <div className="mt-3 flex gap-3 text-xs uppercase tracking-[0.2em]">
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-ember">
                      Visiter
                    </a>
                  )}
                  {item.video && (
                    <a href={item.video} target="_blank" rel="noreferrer" className="text-moss">
                      Voir la vidéo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-2xl font-semibold tracking-[0.3em] text-moss">Savoir Être</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {softSkills.map((skill) => (
          <div key={skill.label} className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-lg dark:border-white/10 dark:bg-ink">
            <img src={skill.icon} alt="" className="mx-auto h-12 w-12" />
            <p className="mt-4 text-sm font-semibold">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-mist py-16 dark:bg-black/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold">Formations & Expériences</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp) => {
          const card = (
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink text-white">
              <img src={exp.image} alt="" className="h-60 w-full object-cover opacity-85 transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-xs text-white/70">{exp.subtitle}</p>
                {exp.detail && <p className="mt-2 text-xs text-white/60">{exp.detail}</p>}
              </div>
            </div>
          )

          if (exp.link) {
            return (
              <a key={exp.title} href={exp.link} className="transition hover:scale-[1.01]">
                {card}
              </a>
            )
          }

          return (
            <div key={exp.title} className="cursor-default">
              {card}
            </div>
          )
        })}
        </div>
      </div>
    </section>
  </div>
)

export default Home
