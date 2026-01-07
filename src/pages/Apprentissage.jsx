const learningSections = [
  {
    title: 'Réaliser',
    items: [
      {
        subtitle: 'Niveau 2 : Partir des exigences et aller jusqu\'à une application complète',
        text:
          "Dans le projet Les Aventuriers du Rail – Partie 1, j'ai conçu une application complète à partir d'un cahier des charges. J'ai suivi une approche incrémentale, utilisé GitLab et JUnit pour structurer et tester le code.",
        link: '/projects/rails-pt1',
      },
      {
        subtitle: 'Niveau 3 : Adapter des applications sur un ensemble de supports',
        text:
          "Le projet Front API REST illustre mon aptitude à adapter une application. L'interface responsive en Vue.js, Tailwind et PrimeVue facilite la navigation mobile/desktop et la communication avec l'API REST.",
        link: '/projects/front-vue',
      },
    ],
  },
  {
    title: 'Optimiser',
    items: [
      {
        subtitle: 'Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné',
        text:
          "Dans Les Aventuriers du Graphe – Partie 2, j'ai implémenté Dijkstra pour optimiser les trajets, en améliorant l'efficacité des calculs.",
        link: '/projects/rails-pt2',
      },
      {
        subtitle: 'Niveau 3 : Analyser et optimiser des applications',
        text:
          "Le projet SAE - Trello Trollé portait sur l'amélioration d'un code existant, avec refactorisation PHP et optimisation des requêtes SQL.",
        link: '/projects/sae-trello-trelle',
      },
    ],
  },
  {
    title: 'Administrer',
    items: [
      {
        subtitle: 'Niveau 2 : Déployer des services dans une architecture réseau',
        text:
          "Avec l'API REST de gestion d'événements musicaux, j'ai appris à déployer une API sécurisée avec Symfony, API Platform et JWT.",
        link: '/projects/music-api',
      },
    ],
  },
  {
    title: 'Gérer',
    items: [
      {
        subtitle: "Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        text:
          "Dans l'annuaire Symfony, j'ai optimisé la base de données et sécurisé l'application via la gestion des rôles et permissions.",
        link: '/projects/annuaire',
      },
    ],
  },
  {
    title: 'Conduire',
    items: [
      {
        subtitle: 'Niveau 2 : Appliquer une démarche de suivi de projet',
        text:
          "Le projet SAE Stage/Alternance m'a appris à suivre un projet avec Scrum, gérer les tâches sur Trello et coordonner les sprints.",
        link: '/projects/sae-stage-alternance',
      },
    ],
  },
  {
    title: 'Collaborer',
    items: [
      {
        subtitle: 'Niveau 2 : Situer son rôle et ses missions au sein d\'une équipe informatique',
        text:
          "Lors du projet Leonn, j'ai travaillé avec une équipe en utilisant Teams et Planner pour répartir les responsabilités.",
        link: '/internship/leonn',
      },
      {
        subtitle: 'Niveau 3 : Manager une équipe informatique',
        text:
          "Sur la SAE Stage/Alternance, j'ai pris un rôle de leadership pour coordonner l'équipe et veiller au respect des délais.",
        link: '/projects/sae-stage-alternance',
      },
    ],
  },
]

const Apprentissage = () => (
  <div className="mx-auto max-w-4xl px-6 py-16">
    <header className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss">Portfolio d'apprentissage</p>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Compétences & projets associés</h1>
      <p className="mt-4 text-sm text-ink/70 dark:text-white/70">
        Ce portfolio met en relation les compétences acquises avec les projets réalisés pendant le BUT Informatique.
      </p>
    </header>

    <div className="mt-12 space-y-10">
      {learningSections.map((section) => (
        <section key={section.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-ink">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <div className="mt-4 space-y-6">
            {section.items.map((item) => (
              <div key={item.subtitle}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">{item.subtitle}</h3>
                <p className="mt-2 text-sm text-ink/70 dark:text-white/70">{item.text}</p>
                <a href={item.link} className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Voir le projet →
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
)

export default Apprentissage
