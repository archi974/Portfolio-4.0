import type { CaseStudy } from "@/types/project";

export const eventoriasCase: CaseStudy = {
  overview: [
    { label: "Mon rôle", value: "Recherche utilisateur, UX/UI Design, Prototypage" },
    { label: "Durée", value: "Environ 8 semaines" },
    { label: "Contexte", value: "Projet de formation OpenClassrooms" },
    { label: "Plateforme", value: "Application mobile (iOS & Android)" },
  ],
  tools: [
    {
      title: "Figma",
      description: "Maquettes haute fidélité",
      icon: "figma"
    },
    {
      title: "Notion",
      description: "Veille et documentation",
      icon: "notion"
    },
    {
      title: "Figma Make",
      description: "Prototypage assisté par IA",
      icon: "figma"
    },
    {
      title: "React",
      description: "Prototype de l'application interactif",
      icon: "react"
    },
  ],
  sections: [
    {
      id: "context",
      title: "Contexte",
      body: [
        "Eventorias est un projet réalisé dans le cadre de ma formation Product Designer chez OpenClassrooms. L'objectif était de concevoir une application mobile permettant de découvrir, créer et partager des événements locaux tout en répondant aux besoins des visiteurs et des organisateurs.",
        "Le projet couvrait l'ensemble de la démarche de conception, depuis la recherche et la veille jusqu'au prototype fonctionnel et à la préparation de la passation aux développeurs.",
      ],
    },
    {
      id: "problem",
      title: "Problématique",
      body: [
        "Comment concevoir une expérience simple et intuitive permettant aux utilisateurs de trouver rapidement des événements correspondant à leurs attentes, tout en offrant aux organisateurs des outils efficaces pour créer, modifier et gérer leurs événements ?",
      ],
    },
    {
      id: "role",
      title: "Mon rôle",
      body: [
        "J'ai réalisé l'ensemble du projet : veille concurrentielle, benchmark, recherche utilisateur, définition des besoins, conception UX, création des maquettes UI, prototypage interactif, tests utilisateurs et préparation de la documentation de passation destinée aux développeurs.",
      ],
    },
    {
      id: "research",
      title: "Recherche utilisateur",
      body: [
        "Le projet s'est appuyé sur une phase de recherche comprenant un benchmark de solutions existantes, la définition de personas, l'analyse des parcours utilisateurs et des tests utilisateurs réalisés sur le prototype afin d'identifier les principaux points d'amélioration.",
      ],
      list: [
        "Benchmark de plusieurs applications d'événements",
        "Création de personas",
        "Analyse des parcours utilisateurs",
        "Tests utilisateurs sur prototype",
        "Synthèse des retours utilisateurs",
      ],
    },
    {
      id: "insights",
      title: "Enseignements",
      body: [
        "Les recherches et les tests ont mis en évidence plusieurs attentes récurrentes des utilisateurs :",
      ],
      list: [
        "Pouvoir trouver rapidement un événement adapté à leurs centres d'intérêt.",
        "Disposer de filtres simples et efficaces pour affiner les résultats.",
        "Accéder facilement aux informations essentielles d'un événement (date, lieu, budget, langue...).",
        "Permettre aux organisateurs de gérer leurs événements sans complexité.",
      ],
    },
    {
      id: "process",
      title: "Processus de conception",
      body: [
        "À partir des besoins identifiés, j'ai conçu les parcours utilisateurs, réalisé plusieurs itérations de wireframes, puis développé les interfaces haute fidélité dans Figma. Un prototype interactif a ensuite été testé afin de valider les principaux parcours avant la phase de passation.",
      ],
    },
    {
      id: "wireframes",
      title: "Wireframes & itérations",
      body: [
        "Les différentes itérations ont permis d'améliorer progressivement la navigation, les filtres de recherche, les fiches événements ainsi que les parcours dédiés aux organisateurs. Les retours des tests utilisateurs ont servi à ajuster l'ergonomie et la hiérarchie des informations.",
      ],
    },
    {
      id: "design-system",
      title: "Design System",
      body: [
        "J'ai construit un Design System regroupant les couleurs, la typographie, les composants, les espacements et les règles d'utilisation afin de garantir une interface cohérente et facilement exploitable lors du développement.",
      ],
    },
    {
      id: "solution",
      title: "Solution finale",
      body: [
        "Le résultat est un prototype mobile permettant de rechercher, consulter, créer et gérer des événements grâce à une interface claire, moderne et centrée sur les besoins des utilisateurs. Le projet est accompagné d'une documentation de passation destinée à faciliter le travail de l'équipe de développement.",
      ],
    },
    {
      id: "deliverables",
      title: "Livrables",
      body: [],
      list: [
        "Prototype interactif de l'application",
        "Veille UX/UI et benchmark",
        "Compte rendu micro-tests",
        "Documentation de passation"
      ],
    },
    {
      id: "next-steps",
      title: "Et ensuite ?",
      body: [],
      list: [
        "Élargir l'échantillon utilisateur",
        "Tester sur davantage d'appareils",
        "Mesurer les KPI après lancement",
        "Approfondir l'accessibilité"
      ]
    },
  ],
  results: [
    {
      metric: "100 %",
      label: "User stories prioritaires",
      note: "Fonctionnalités principales intégrées au prototype final",

    },
    {
      metric: "3",
      label: "Micro-tests réalisés",
      note: "Tests utilisateurs sur le prototype pour valider les parcours et l'ergonomie",
    },
    {
      metric: "1",
      label: "Prototype interactif validé",
      note: "Prototype haute fidélité réalisé avec Figma make et React",
    },
  ],

  learnings: [
    "Ce projet m'a permis d'approfondir l'ensemble d'un processus de Product Design, de la recherche utilisateur jusqu'à la préparation de la passation aux développeurs.",
    "Les tests utilisateurs ont confirmé l'importance de simplifier les parcours et de limiter les frictions lors de la recherche d'événements.",
    "J'ai également appris à mieux documenter mes choix de conception afin de faciliter la collaboration avec les développeurs et d'assurer une implémentation plus fluide.",
  ],

  gallery: [
    {
      caption: "Accueil et découverte des événements",
      alt: "Écran d'accueil de l'application Eventorias",
    },
    {
      caption: "Recherche et filtres",
      alt: "Interface de recherche avec les différents filtres",
    },
    {
      caption: "Création et gestion d'un événement",
      alt: "Parcours de création et de gestion d'un événement",
    },
  ],

  resources: [
    {
      label: "Prototype Figma",
      href: "https://jv-design-et-tech.github.io/Prototype_event-app/",
    },
    {
      label: "Documentation de passation",
      href: "https://app.notion.com/p/Eventorias-App-Passation-aux-d-veloppeurs-bcf72a437cfc830abef3811a08281e68",
    },
    {
      label: "Micro-tests",
      href: "https://app.notion.com/p/Template-Micro-test-d-usage-du-prototype-no-code-f1472a437cfc834da24701c6c6094fee",
    },
    {
      label: "Veille",
      href: "https://app.notion.com/p/Inspirations-et-veille-5a072a437cfc83cdb00d8124f27a75ac",
    }
  ],
};

export const cafeCase: CaseStudy = {
  overview: [
    { label: "Mon Rôle", value: "Recherche utilisateur, Design de service" },
    { label: "Durée", value: "6 semaines" },
    { label: "Contexte", value: "Projet de formation OpenClassrooms" },
    { label: "Livrables", value: "Personas, User Journey Maps, Service Blueprint" },
  ],
  tools: [
    {
      title: "Google Doc",
      description: "Protocole, observation et guide d'entretien",
      icon: "google"
    },
    {
      title: "Notion",
      description: "Plan de conception UX/UI",
      icon: "figma"
    },
    {
      title: "Miro",
      description: "Restitution Atelier d'idéation",
      icon: "miro"
    },
    {
      title: "Figjam",
      description: "Parcours utilisateur",
      icon: "figma"
    }
  ],
  sections: [
    {
      id: "context",
      title: "Contexte",
      body: [
        "Le Café des Beaux-Arts souhaitait améliorer l'expérience de ses clients en comprenant les difficultés rencontrées tout au long de leur parcours. L'objectif était d'identifier les points de friction avant de proposer des solutions adaptées.",
      ],
    },
    {
      id: "problem",
      title: "Problématique",
      body: [
        "Malgré une clientèle fidèle, certains visiteurs rencontraient des difficultés lors de leur expérience au café. Les gérants souhaitaient mieux comprendre leurs besoins afin d'améliorer le service et la satisfaction globale.",
      ],
    },
    {
      id: "role",
      title: "Mon rôle",
      body: [
        "J'ai mené l'ensemble de la démarche UX : préparation de la recherche, observation terrain, entretiens utilisateurs, analyse des données, création des livrables UX et restitution des recommandations.",
      ],
    },
    {
      id: "research",
      title: "Recherche utilisateur",
      body: [
        "Une approche qualitative a été privilégiée afin de comprendre les comportements, les attentes et les frustrations des utilisateurs.",
      ],
      list: [
        "Observation du fonctionnement du Café des Beaux-Arts",
        "5 entretiens semi-directifs avec des profils variés",
        "Analyse et synthèse des verbatims",
        "Identification des principaux points de friction",
      ],
    },
    {
      id: "insights",
      title: "Principaux enseignements",
      body: [
        "L'analyse a mis en évidence plusieurs opportunités d'amélioration concernant le parcours client et la communication des informations.",
      ],
      list: [
        "Les nouveaux visiteurs manquent de repères lors de leur arrivée.",
        "Certaines informations importantes ne sont pas suffisamment visibles.",
        "Le parcours peut être simplifié afin de rendre l'expérience plus fluide.",
      ],
    },
    {
      id: "process",
      title: "Processus UX",
      body: [
        "Les résultats de la recherche ont permis de construire deux personas, deux User Journey Maps, un How Might We (HMW) et un Service Blueprint afin de visualiser l'expérience utilisateur et les interactions avec le service.",
      ],
    },
    {
      id: "wireframes",
      title: "Pistes d'amélioration",
      body: [
        "À partir des enseignements de la recherche, plusieurs recommandations ont été formulées pour améliorer l'expérience utilisateur, faciliter l'accès aux informations essentielles et optimiser le parcours client.",
      ],
    },
    {
      id: "solution",
      title: "Résultat",
      body: [
        "Cette démarche UX a permis de fournir une vision claire des besoins des utilisateurs et de proposer des solutions concrètes, centrées sur leurs attentes, afin d'améliorer durablement l'expérience au Café des Beaux-Arts.",
      ],
    },
    {
      id: "deliverables",
      title: "Livrables",
      body: [],
      list: [
        "Protocole de recherche",
        "Grille d'observation",
        "Guide d'entretien",
        "Personas",
        "Parcours utilisateurs",
        "Restitution atelier d'idéation",
        "Présentation finale"
      ],
    },
    {
      id: "next-steps",
      title: "Et ensuite ?",
      body: [],
      list: [
        "Élargir l'échantillon utilisateur",
        "Tester sur davantage d'appareils",
        "Mesurer les KPI après lancement",
        "Approfondir l'accessibilité"
      ]
    },
  ],
  results: [
    { metric: "5", label: "Entretiens utilisateurs", note: "Profils variés pour comprendre les besoins et les points de friction" },
    { metric: "2", label: "Personas", note: "Identifier et réaliser à partir des entretiens et de l'observation de terrain" },
    { metric: "6", label: "Participants à l'atelier", note: "Choisi pour varié les réponses aux problématiques défini" },
  ],
  learnings: [
    "Ce projet m'a confirmé l'importance de commencer par comprendre les utilisateurs avant de proposer des solutions.",
    "La combinaison d'observations terrain et d'entretiens offre une vision beaucoup plus complète du parcours utilisateur.",
    "Transformer les enseignements de la recherche en livrables UX m'a permis de structurer des recommandations claires et directement exploitables.",
  ],
  gallery: [
    { caption: "Personas", alt: "Deux personas issus de la recherche utilisateur" },
    { caption: "User Journey Maps", alt: "Visualisation du parcours utilisateur et des points de friction" },
    { caption: "Service Blueprint & HMW", alt: "Service Blueprint et atelier How Might We utilisés pour identifier les opportunités de conception" },
  ],
  resources: [
    { label: "Protocole de recherche", href: "/Etude_UX_cafe_des_beaux_arts_1_protocole_de_recherche_062026.pdf" },
    { label: "Grille d'observation", href: "/Etude_UX_cafe_des_beaux_arts_2_grille_observation_062026.pdf" },
    { label: "Guide d'entretien", href: "/Etude_UX_cafe_des_beaux_arts_3_guide_entretien_062026.pdf" },
    { label: "Journey map", href: "https://www.figma.com/board/YQxSVzCWVvMfOBRWFnPuop/Customer-Journey-Map--Community-?node-id=0-1&t=e7Qywqh1p1Nn8DEE-1" },
    { label: "Atelier d'idéation", href: "https://miro.com/app/board/uXjVHHjpdTg=/?embedMode=view_only_without_ToViewport%3D-1538,-452,3463,1684&embedId=190246243052" },
    { label: "Plan de conception UX/UI", href: "https://slender-singer-afe.notion.site/Plan-de-conception-UX-UI-23c72a437cfc834799e081c465502e81" },
  ],
};

export const roadmapCase: CaseStudy = {
  overview: [
    { label: "Mon Rôle", value: "Recherche UX, Analyse, Priorisation, Roadmap UX" },
    { label: "Durée", value: "4 semaines" },
    { label: "Contexte", value: "Projet de formation OpenClassrooms" },
    { label: "Livrables", value: "Analyses UX, Roadmap, Recommandations" },
  ],
  tools: [
    {
      title: "Google Doc",
      description: "Recommandation",
      icon: "google"
    },
    {
      title: "Notion",
      description: "Analyse qualitative et quantitative",
      icon: "notion"
    },
  ],
  sections: [
    {
      id: "context",
      title: "Contexte",
      body: [
        "Ce projet consistait à analyser l'expérience utilisateur d'un produit numérique afin d'identifier les principaux points de friction et de proposer une feuille de route d'amélioration priorisée.",
      ],
    },
    {
      id: "problem",
      title: "Problématique",
      body: [
        "L'objectif était de transformer les résultats des analyses qualitatives et quantitatives en recommandations concrètes, puis de définir les améliorations à mettre en œuvre selon leur impact utilisateur et leur priorité.",
      ],
    },
    {
      id: "role",
      title: "Mon rôle",
      body: [
        "J'ai réalisé l'ensemble de la démarche : analyse des données, synthèse des résultats, priorisation des opportunités d'amélioration et élaboration de la Roadmap UX.",
      ],
    },
    {
      id: "research",
      title: "Recherche et analyse",
      body: [
        "Le travail s'est appuyé sur une analyse qualitative, une analyse quantitative et un tableau de croisement afin de consolider les observations et identifier les axes d'amélioration les plus pertinents.",
      ],
      list: [
        "Analyse qualitative",
        "Analyse quantitative",
        "Tableau de croisement",
        "Synthèse des enseignements",
      ],
    },
    {
      id: "insights",
      title: "Principaux enseignements",
      body: [
        "La confrontation des données qualitatives et quantitatives a permis de mettre en évidence les principaux points de friction du parcours utilisateur et les opportunités ayant le plus fort impact potentiel.",
      ],
    },
    {
      id: "process",
      title: "Priorisation",
      body: [
        "Les enseignements issus de la recherche ont été transformés en recommandations UX, puis organisés au sein d'une Roadmap afin de définir un ordre de mise en œuvre cohérent selon leur valeur pour les utilisateurs.",
      ],
    },
    {
      id: "solution",
      title: "Roadmap UX",
      body: [
        "Le projet aboutit à une Roadmap UX accompagnée de recommandations détaillées permettant de guider les futures évolutions du produit tout en s'appuyant sur les données recueillies lors des analyses.",
      ],
    },
  ],
  results: [
    { metric: "2", label: "Analyses réalisées", note: "Qualitative et quantitative" },
    { metric: "1", label: "Roadmap UX", note: "Priorisation des recommandations" },
    { metric: "1", label: "Document de recommandations", note: "Actions d'amélioration proposées" },
  ],
  learnings: [
    "Croiser des données qualitatives et quantitatives permet d'obtenir une vision plus fiable des problèmes rencontrés par les utilisateurs.",
    "Prioriser les recommandations aide à concentrer les efforts sur les améliorations offrant le plus de valeur.",
    "Une Roadmap UX facilite la planification des évolutions en reliant les décisions de conception aux résultats de la recherche.",
  ],
  gallery: [
    { caption: "Analyse qualitative", alt: "Synthèse des résultats de l'analyse qualitative" },
    { caption: "Analyse quantitative", alt: "Résultats de l'analyse quantitative et tableau de croisement" },
    { caption: "Roadmap UX", alt: "Roadmap UX présentant les recommandations priorisées" },
  ],
  resources: [
    { label: "Analyse qualitative", href: "https://hexagonal-ash-6cc.notion.site/Template-Heuristiques-de-Nielsen-analyse-qualitative-35d71e1ab529801ea21af7254a282ba9" },
    { label: "Analyse quantitatives", href: "https://hexagonal-ash-6cc.notion.site/Template-analyse-de-donn-es-quantitatives-35e71e1ab52980399d88ff0f28138139" },
    { label: "Tableau de croisement", href: "https://hexagonal-ash-6cc.notion.site/Tableau-de-croisement-35e71e1ab52980b09c38f5be5738818b" },
    { label: "Roadmap UX", href: "https://hexagonal-ash-6cc.notion.site/9ff71e1ab52982a4b49201c3bb821130?v=a8571e1ab52982a4a7c008ea6c63621a" },
    { label: "Recommandations UX", href: "/Roadmap_recommandations_052026.pdf" },
  ],
};
