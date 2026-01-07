export const portfolioProjects = [
  {
    id: 'rails-pt1',
    title: 'Les Aventuriers du Rail - Partie 1',
    category: 'Java',
    year: '2023',
    tags: ['Web & Java'],
    image: '/main/img/portfolio/aventuriersRailsPt1.png',
    href: '/projects/rails-pt1',
    repo: 'https://github.com/BakaAsta/RailsIhmPart1',
  },
  {
    id: 'rails-pt2',
    title: 'Les Aventuriers du Rail - Partie 2',
    category: 'Java',
    year: '2023',
    tags: ['Web & Java'],
    image: '/main/img/graphe.png',
    href: '/projects/rails-pt2',
    repo: 'https://github.com/BakaAsta/RailsIhmPart2',
  },
  {
    id: 'rails-pt3',
    title: 'Les Aventuriers du Rail - Partie 3',
    category: 'Java',
    year: '2023',
    tags: ['Java Orienté Objet'],
    image: '/main/img/portfolio/img.png',
    href: '/projects/rails-pt3',
    repo: 'https://github.com/BakaAsta/RailsIhmPart3',
  },
  {
    id: 'sae-stage-alternance',
    title: 'SAE Stage/Alternance',
    category: 'Web',
    year: '2023',
    tags: ['Recherche Stage & Alternance'],
    image: '/main/img/portfolio/saeWeb.png',
    href: '/projects/sae-stage-alternance',
    repo: 'https://github.com/BakaAsta/sae-stage-alternance',
  },
  {
    id: 'music-promo',
    title: 'Projet Promotion Musicale',
    category: 'Web',
    year: '2022',
    tags: ['Site Web'],
    image: '/main/img/portfolio/music.png',
    href: 'https://bakaasta.github.io/Personal_MusicProject/ressources/web/',
    repo: 'https://github.com/BakaAsta/Personal_MusicProject',
    external: true,
  },
  {
    id: 'leonn',
    title: 'Gestionnaire Leonn',
    category: 'Web',
    year: '2024',
    tags: ['Stage'],
    image: '/main/img/portfolio/leonn.png',
    href: '/internship/leonn',
    repo: 'https://github.com/BakaAsta/leonn',
  },
  {
    id: 'annuaire',
    title: 'Annuaire (Project pt-1)',
    category: 'Web',
    year: '2024',
    tags: ['Site Web'],
    image: '/main/img/portfolio/annuaire.png',
    href: '/projects/annuaire',
    repo: 'https://github.com/projets-xil/s5-web-projet1',
  },
  {
    id: 'music-api',
    title: 'API REST - Music Events',
    category: 'Web',
    year: '2024',
    tags: ['API REST'],
    image: '/main/img/portfolio/api.png',
    href: '/projects/music-api',
    repo: 'https://github.com/PoweredBySymfony/Projet-API-REST',
  },
  {
    id: 'front-vue',
    title: 'Front VueJS (Project pt-3)',
    category: 'Web',
    year: '2024',
    tags: ['Front-end'],
    image: '/main/img/portfolio/frontVueJs.png',
    href: '/projects/front-vue',
    repo: 'https://github.com/lisaachr/api_front',
  },
  {
    id: 'sae-trello-trelle',
    title: 'Trello Trollé',
    category: 'Web',
    year: '2023',
    tags: ['Site Web'],
    image: '/main/img/portfolio/trello.png',
    href: '/projects/sae-trello-trelle',
    repo: 'https://github.com/BakaAsta/trellotrolle-code-de-base',
  },
]

export const projectDetails = {
  'rails-pt1': {
    title: 'Les Aventuriers du Rail - Partie 1',
    intro: 'Projet SAE S2.01 et S2.02 : développement d\'une version en ligne du jeu de plateau avec une approche incrémentale en trois phases.',
    sections: [
      {
        title: 'Contexte du projet',
        body: [
          "Développement d\'une version en ligne du jeu Les Aventuriers du Rail avec une approche incrémentale.",
          'Phase 1 : mécanique de jeu en Java, Phase 2 : algorithmes de graphes, Phase 3 : interface JavaFX.',
        ],
      },
      {
        title: 'Méthodes de travail et résultats',
        body: ['Travail en binôme avec GitLab et tests unitaires JUnit.'],
        list: [
          'Moteur de jeu respectant les règles officielles.',
          'Interface graphique intuitive pour visualiser les actions des joueurs.',
          'Tests unitaires validant la robustesse du code.',
        ],
        images: [
          '/main/img/portfolio/aventuriersRailsPt1.png',
          '/main/img/railPt1Test.png',
          '/main/img/railPt1Test2.png',
        ],
      },
      {
        title: 'Technologies utilisées',
        list: ['Java', 'HTML', 'JUnit', 'GitLab'],
      },
      {
        title: 'Compétences mobilisées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Développement orienté objet avec Java.', 'Implémentation d\'algorithmes de graphes.'],
          },
          {
            title: 'C2 : Optimiser des applications',
            items: ['Analyse et amélioration des performances.'],
          },
          {
            title: 'C5 : Conduire un projet',
            items: ['Organisation des tâches et validation par tests.'],
          },
          {
            title: 'C6 : Collaborer au sein d\'une équipe informatique',
            items: ['Utilisation de Git et participation aux phases de conception.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/BakaAsta/RailsIhmPart1',
  },
  'rails-pt2': {
    title: 'Les Aventuriers du Rail - Partie 2',
    intro: 'Phase graphe du projet : modélisation du plateau et algorithmes pour optimiser les stratégies.',
    sections: [
      {
        title: 'Contexte du projet',
        body: [
          'Modélisation du plateau sous forme de graphe afin d\'implémenter des parcours optimisés.',
        ],
        list: [
          'Représenter les routes en graphes.',
          'Algorithmes de parcours (Dijkstra).',
          'Analyse des destinations réalisables.',
        ],
      },
      {
        title: 'Méthodes de travail et résultats',
        body: ['Méthodologie agile avec itérations hebdomadaires.'],
        list: [
          'Plateau modélisé en graphe.',
          'Algorithmes de parcours opérationnels.',
          'Interface graphique mise à jour pour les simulations.',
        ],
        images: [
          '/main/img/graphe.png',
          '/main/img/graphePt3.png',
          '/main/img/graphePt2.png',
          '/main/img/graphePt1.png',
        ],
      },
      {
        title: 'Technologies utilisées',
        list: ['Java', 'JavaScript', 'Python', 'SCSS', 'HTML'],
      },
      {
        title: 'Compétences mobilisées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Implémentation d\'algorithmes de graphes.', 'Tests et validation des fonctionnalités.'],
          },
          {
            title: 'C4 : Gérer des données de l\'information',
            items: ['Structuration des graphes.', 'Analyse des performances.'],
          },
          {
            title: 'C5 : Conduire un projet',
            items: ['Gestion des tâches et suivi des objectifs.'],
          },
          {
            title: 'C6 : Collaborer au sein d\'une équipe informatique',
            items: ['Travail en binôme et versionnage Git.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/BakaAsta/RailsIhmPart2',
  },
  'rails-pt3': {
    title: 'Les Aventuriers du Rail - Partie 3',
    intro: 'Développement d\'une interface graphique JavaFX pour offrir une expérience utilisateur fluide.',
    sections: [
      {
        title: 'Contexte du projet',
        body: [
          'Cette phase finalise le projet avec une IHM JavaFX connectée à la logique de jeu.',
          'Objectif : offrir une expérience interactive et ergonomique.',
        ],
      },
      {
        title: 'Méthodes de travail et résultats',
        body: ['Implémentation progressive des composants graphiques.'],
        list: [
          'Interface utilisateur ergonomique et intuitive.',
          'Vues plateau, cartes et scores intégrées.',
          'Interactions dynamiques (sélection des routes, scores).',
        ],
        images: [
          '/main/img/portfolio/img.png',
          '/main/img/portfolio/IHMinfoJoueur.png',
          '/main/img/portfolio/IHMchoixCarte.png',
        ],
      },
      {
        title: 'Technologies utilisées',
        list: ['JavaFX', 'CSS'],
      },
      {
        title: 'Compétences mobilisées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Création des composants JavaFX.', 'Développement de fonctionnalités interactives.'],
          },
          {
            title: 'C2 : Concevoir des interfaces utilisateur',
            items: ['IHM responsive et intuitive.', 'Binding et gestionnaires d\'événements.'],
          },
          {
            title: 'C5 : Conduire un projet',
            items: ['Planification et respect des échéances.'],
          },
          {
            title: 'C6 : Collaborer au sein d\'une équipe informatique',
            items: ['Gestion collaborative via GitLab.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/BakaAsta/RailsIhmPart3',
  },
  'music-api': {
    title: 'Projet API REST - Gestion d\'événements musicaux',
    intro: 'Développement d\'une API REST avec Symfony et API Platform pour gérer événements, scènes et artistes.',
    sections: [
      {
        title: 'Méthodes de travail',
        body: ['Méthodologie agile avec livrables réguliers.'],
        list: ['Symfony', 'API Platform', 'GitHub pour le versionnage'],
      },
      {
        title: 'Résultats obtenus',
        list: [
          'Gestion complète des événements musicaux.',
          'Authentification JWT.',
          'CRUD organisateurs, inscription participants et conflits horaires.',
          'Routes publiques pour consulter les événements.',
          'Fixtures pour la base de données.',
        ],
        images: ['/main/img/listeEventApi.png', '/main/img/jwtApi.png', '/main/img/fixtures.png'],
      },
      {
        title: 'Technologies utilisées',
        list: ['Symfony', 'API Platform', 'JWT', 'Doctrine ORM'],
      },
      {
        title: 'Compétences mobilisées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Conception d\'API REST.', 'Validation des données.'],
          },
          {
            title: 'C4 : Gérer des données de l\'information',
            items: ['Modélisation des entités.', 'Optimisation des requêtes.'],
          },
          {
            title: 'C5 : Conduire un projet',
            items: ['Organisation des tâches et documentation.'],
          },
          {
            title: 'C6 : Collaborer au sein d\'une équipe informatique',
            items: ['Utilisation d\'outils collaboratifs.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/PoweredBySymfony/Projet-API-REST',
  },
  'front-vue': {
    title: 'Front API REST - Gestion d\'événements musicaux',
    intro: 'Front-end Vue.js / Tailwind / PrimeVue connecté à l\'API REST pour la gestion d\'événements.',
    sections: [
      {
        title: 'Méthodes de travail',
        list: ['Vue Router', 'Composants PrimeVue', 'Tailwind CSS', 'Axios pour l\'API'],
      },
      {
        title: 'Résultats obtenus',
        list: [
          'Interface intuitive pour consulter les événements.',
          'Inscription, authentification et profil utilisateur.',
          'Gestion des inscriptions et des conflits d\'horaires.',
          'Notifications en temps réel.',
        ],
        images: [
          '/main/img/portfolio/frontVueJs.png',
          '/main/img/portfolio/frontVueJs2.png',
          '/main/img/portfolio/frontVueJs3.png',
          '/main/img/portfolio/frontVueJs4.png',
          '/main/img/portfolio/frontVueJs5.png',
        ],
      },
      {
        title: 'Technologies utilisées',
        list: ['Vue.js', 'Tailwind CSS', 'PrimeVue', 'Axios', 'TypeScript'],
      },
      {
        title: 'Compétences mobilisées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Conception de l\'interface front-end.', 'Intégration API REST.'],
          },
          {
            title: 'C3 : Concevoir une interface utilisateur',
            items: ['Composants dynamiques et UX fluide.'],
          },
          {
            title: 'C4 : Gérer des données de l\'information',
            items: ['Manipulation et affichage des données.'],
          },
          {
            title: 'C5 : Conduire un projet',
            items: ['Planification et collaboration GitHub.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/lisaachr/api_front',
  },
  'sae-stage-alternance': {
    title: 'SAE - Plateforme Stage/Alternance',
    intro: 'Plateforme de mise en relation étudiants/entreprises réalisée durant le S3 du BUT Informatique.',
    sections: [
      {
        title: 'Méthodes de travail',
        list: [
          'Scrum avec rôles PO et Scrum Master.',
          'Trello pour la priorisation des tâches.',
          'Livraisons régulières en itérations.',
        ],
      },
      {
        title: 'Résultats obtenus',
        list: [
          'Interface claire pour naviguer et postuler.',
          'Espace entreprise pour publier des annonces.',
          'Tableau de bord d\'administration.',
        ],
        images: [
          '/main/img/portfolio/saeWeb.png',
          '/main/img/portfolio/saeWeb2.png',
          '/main/img/portfolio/saeWeb3.png',
          '/main/img/portfolio/saeWeb4.png',
        ],
      },
      {
        title: 'Technologies utilisées',
        list: ['PHP', 'JavaScript', 'HTML/CSS', 'Trello'],
      },
      {
        title: 'Compétences mobilisées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Fonctionnalités clés de la plateforme.', 'Tests unitaires.'],
          },
          {
            title: 'C2 : Concevoir des interfaces utilisateur',
            items: ['Interface responsive et ergonomique.'],
          },
          {
            title: 'C3 : Gérer un projet',
            items: ['Sprints hebdomadaires et respect des priorités.'],
          },
          {
            title: 'C4 : Gérer des données de l\'information',
            items: ['Base MySQL et optimisation des requêtes.'],
          },
          {
            title: 'C5 : Collaborer au sein d\'une équipe informatique',
            items: ['Réunions et revues de code.'],
          },
          {
            title: 'C6 : Assurer la qualité et la sécurité',
            items: ['Validation des inputs et gestion des sessions.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/BakaAsta/sae-stage-alternance',
  },
  'sae-trello-trelle': {
    title: 'SAE - Trello Trollé',
    intro: 'Refonte d\'une application type Trello mal codée pour appliquer les bonnes pratiques.',
    sections: [
      {
        title: 'Méthodes de travail',
        list: [
          'Refactorisation PHP selon les standards PSR.',
          'Nettoyage et optimisation du CSS.',
          'Ajout de fonctionnalités dynamiques en JavaScript natif.',
        ],
      },
      {
        title: 'Résultats obtenus',
        list: [
          'Interface utilisateur fluide et interactive.',
          'Amélioration des performances et de la maintenabilité.',
          'Backend robuste et conforme aux standards modernes.',
        ],
        images: ['/main/img/portfolio/trello.png'],
      },
      {
        title: 'Technologies utilisées',
        list: ['PHP', 'CSS', 'JavaScript natif', 'Docker'],
      },
      {
        title: 'Compétences mobilisées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Refactorisation et correction des bugs.', 'Nouvelles fonctionnalités.'],
          },
          {
            title: 'C2 : Concevoir des interfaces utilisateur',
            items: ['UI intuitive et ergonomique.'],
          },
          {
            title: 'C3 : Gérer un projet',
            items: ['Gestion des tâches en équipe.'],
          },
          {
            title: 'C4 : Gérer des données de l\'information',
            items: ['Optimisation des requêtes SQL.'],
          },
          {
            title: 'C5 : Collaborer au sein d\'une équipe informatique',
            items: ['Versionnage Git et revues de code.'],
          },
          {
            title: 'C6 : Assurer la qualité et la sécurité',
            items: ['Validation des entrées et prévention des failles.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/BakaAsta/trellotrolle-code-de-base',
  },
  annuaire: {
    title: 'Annuaire - Synthèse des compétences',
    intro: 'Synthèse des compétences acquises à travers plusieurs projets du BUT Informatique.',
    sections: [
      {
        title: 'Réaliser (Niveau 2 et 3)',
        body: [
          'Les Aventuriers du Rail - Partie 1 : développement Java orienté objet avec tests unitaires.',
          'Front API REST : interface responsive Vue.js et intégration API.',
        ],
      },
      {
        title: 'Optimiser (Niveau 2 et 3)',
        body: [
          'Les Aventuriers du Graphe - Partie 2 : algorithme de Dijkstra et structuration de graphes.',
          'Leonn : analyse des processus métier et optimisation SQL.',
        ],
      },
      {
        title: 'Administrer (Niveau 2)',
        body: ['Leonn : déploiement Docker, sécurisation et architecture scalable.'],
      },
      {
        title: 'Gérer (Niveau 2)',
        body: ['Annuaire Symfony : optimisation de base de données et sécurité des accès.'],
      },
      {
        title: 'Conduire (Niveau 2)',
        body: ['SAE Stage/Alternance : suivi agile, sprints et retours utilisateurs.'],
      },
      {
        title: 'Collaborer (Niveau 2 et 3)',
        body: [
          'Travail en équipe, répartition des rôles et gestion de version.',
          'Leadership sur la SAE Stage/Alternance pour coordonner l\'équipe.',
        ],
      },
    ],
  },
}

export const internshipDetails = {
  ecir: {
    title: 'Mon stage chez ECIR',
    intro: "Découverte de l\'ECIR et participation au projet Leonn pour la gestion des prêts et incidents.",
    sections: [
      {
        title: "Présentation de l'entreprise",
        body: [
          "L'ECIR forme aux métiers des travaux publics avec deux pôles : ECIR Apprentissage et ECIR Formations.",
          '73 salariés et des vacataires pour assurer des formations de qualité.',
        ],
        list: ['ECIR Apprentissage', 'ECIR Formations'],
      },
      {
        title: 'Service informatique',
        body: [
          'Équipe de trois personnes sous la supervision de Gilles Gout.',
          'Vision numérique ambitieuse portée par la direction.',
        ],
      },
      {
        title: 'Projet Leonn',
        list: [
          'Suivi en temps réel de l\'inventaire.',
          'Optimisation du stockage et des incidents.',
          'Gestion proactive du matériel informatique.',
        ],
      },
      {
        title: 'Souvenirs',
        images: ['/img/team/ecir.jpg', '/img/team/ecir2.jpg', '/img/team/ecir3.jpg'],
      },
    ],
  },
  nocika: {
    title: 'Mon alternance chez Nocika',
    intro: 'Participation à l\'évolution des sites e-commerce et à la mise en place d\'outils internes.',
    sections: [
      {
        title: "Présentation de l'entreprise",
        body: [
          "Nocika est un groupe importateur et distributeur d'articles de sports nautiques fondé en 1998.",
          '9 sites e-commerce et plus de 60 collaborateurs.',
        ],
      },
      {
        title: 'Service informatique',
        body: [
          'Maintenance et évolution des plateformes en ligne.',
          'Sécurité et performance des sites e-commerce.',
        ],
      },
      {
        title: 'Projet',
        body: [
          'Refonte de menu, scripts PHP d\'automatisation, gestion d\'inventaire.',
          'Projet stratégique de centralisation et paramétrage des requêtes SQL.',
        ],
      },
      {
        title: 'Galerie',
        images: ['/img/team/nocika.jpg'],
      },
    ],
  },
  leonn: {
    title: 'Projet Leonn - Gestion de prêts et inventaire',
    intro: "Développement d'un outil interne pour l'ECIR afin d'optimiser la gestion des prêts et incidents.",
    sections: [
      {
        title: 'Contexte du projet',
        body: [
          "Projet développé de zéro avec Guillaume Carrio et Gilles Gout.",
          'Objectifs : inventaire, suivi des prêts, tickets incidents.',
        ],
        list: ['Inventaire en temps réel', 'Suivi des prêts et retours', 'Tickets incidents'],
      },
      {
        title: 'Méthodes de travail et résultats',
        list: [
          'Sprints hebdomadaires et livraisons itératives.',
          'Dashboard interactif et alertes temps réel.',
          'Liste dynamique des produits disponibles.',
          'Interface intuitive et optimisée.',
        ],
        images: [
          '/main/img/portfolio/leonn.png',
          '/main/img/listeProductAvailableUser.png',
          '/main/img/scanLeonn.png',
          '/main/img/scan.png',
          '/main/img/dockerLeonn.png',
        ],
      },
      {
        title: 'Technologies utilisées',
        list: [
          'Symfony 6.4 (PHP 8.2)',
          'Tailwind CSS',
          'ReactJS',
          'API Platform',
          'Typesense',
          'JWT',
          'Docker',
          'Twig Live Components',
        ],
      },
      {
        title: 'Compétences travaillées',
        subsections: [
          {
            title: 'C1 : Réaliser un développement d\'application',
            items: ['Interfaces utilisateur', 'Tests unitaires.'],
          },
          {
            title: 'C4 : Gérer des données de l\'information',
            items: ['Conception DB relationnelle', 'Optimisation SQL.'],
          },
          {
            title: 'C5 : Conduire un projet',
            items: ['Suivi des tâches et validation des livrables.'],
          },
          {
            title: 'C6 : Collaborer au sein d\'une équipe informatique',
            items: ['Coordination et partage d\'informations.'],
          },
        ],
      },
    ],
    linkLabel: 'Dépôt GitHub du projet',
    linkUrl: 'https://github.com/BakaAsta/leonn',
    extraLinkLabel: 'Rapport de stage complet',
    extraLinkUrl: '/assets/rapportStage.pdf',
  },
}
