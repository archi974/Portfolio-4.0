import type { CaseStudy } from "@/types/project";

export const eventoriasCase: CaseStudy = {
  overview: [
    { label: "Mon rôle", value: "Recherche utilisateur, UX/UI Design, Prototypage" },
    { label: "Durée", value: "Environ 8 semaines" },
    { label: "Contexte", value: "Projet de formation OpenClassrooms" },
    { label: "Plateforme", value: "Application mobile (iOS & Android)" },
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
  ],
  results: [
    {
      metric: "100 %",
      label: "User stories prioritaires",
      note: "Fonctionnalités principales intégrées au prototype final",

    },
    {
      metric: "10+",
      label: "Parcours utilisateurs",
      note: "Visiteur et organisateur couverts par le prototype",
    },
    {
      metric: "1",
      label: "Prototype interactif",
      note: "Prototype haute fidélité réalisé sur Figma",
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
    { label: "Role", value: "User research, Service design" },
    { label: "Timeline", value: "6 weeks, 2023" },
    { label: "Team", value: "Me and the café owners" },
    { label: "Output", value: "Journey map, personas, service blueprint" },
  ],
  sections: [
    {
      id: "context",
      title: "Context",
      body: [
        "Café des Beaux-Arts is a neighbourhood café that also hosts exhibitions from local artists. The owners wanted a booking website. Before designing one, we agreed to spend two weeks understanding whether booking was the actual friction.",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      body: [
        "Regulars were happy. Newcomers who came for an exhibition rarely returned, and the owners had no idea why. Nothing in the existing digital touchpoints explained what the place was.",
      ],
    },
    {
      id: "role",
      title: "My role",
      body: [
        "I ran the research end to end: recruitment, interviews, on-site observation, synthesis and the final restitution workshop.",
      ],
    },
    {
      id: "research",
      title: "Research",
      body: ["Mixed methods, small sample, deliberately qualitative."],
      list: [
        "12 customer interviews, split between regulars and first-time visitors",
        "3 observation sessions of 2 hours during exhibition openings",
        "Staff shadowing with the two baristas",
        "Review of 60 online reviews",
      ],
    },
    {
      id: "insights",
      title: "Insights",
      body: ["The journey broke long before any booking screen."],
      list: [
        "First-time visitors could not tell if the exhibition space was free to enter.",
        "The busiest moment for staff — openings — was also the moment newcomers needed the most guidance.",
        "Two thirds of newcomers arrived through an artist's own social post, never through the café's channels.",
      ],
    },
    {
      id: "process",
      title: "Process",
      body: [
        "I mapped the end-to-end journey across five phases, then built a service blueprint that showed which frontstage failures came from backstage constraints. Two personas emerged: the regular remote worker and the exhibition-first visitor.",
      ],
    },
    {
      id: "wireframes",
      title: "Iterations",
      body: [
        "Instead of a booking site, the first deliverable was a set of small service changes: a one-line entry sign, a printed exhibition card on each table, and a shared post template given to exhibiting artists.",
      ],
    },
    {
      id: "solution",
      title: "Final solution",
      body: [
        "A lightweight website focused on the exhibition programme and practical information, plus the service changes above. Booking was reduced to a single form for private events, which was the only booking need the research actually surfaced.",
      ],
    },
  ],
  results: [
    { metric: "3 of 5", label: "Journey phases reworked", note: "Prioritised with the owners in a 2-hour workshop" },
    { metric: "12", label: "Interviews", note: "Regulars and first-time visitors" },
    { metric: "1 page", label: "Website scope", note: "Down from the initial 6-page brief" },
  ],
  learnings: [
    "The most useful outcome of this project was removing scope, not adding features.",
    "Observation caught things interviews never would — people hesitating at the door for several seconds.",
    "Involving the owners in the synthesis made the recommendations stick without a formal report.",
  ],
  gallery: [
    { caption: "Journey map, five phases", alt: "Customer journey map on paper" },
    { caption: "Service blueprint", alt: "Service blueprint with frontstage and backstage lanes" },
    { caption: "Personas", alt: "Two persona cards" },
  ],
  resources: [{ label: "Journey map (PDF)", href: "#" }],
};

export const roadmapCase: CaseStudy = {
  overview: [
    { label: "Role", value: "Product strategy, Benchmark, Roadmap" },
    { label: "Timeline", value: "4 weeks, 2024" },
    { label: "Team", value: "Me, a founder, a lead developer" },
    { label: "Output", value: "Benchmark, KPI framework, 2-quarter roadmap" },
  ],
  sections: [
    {
      id: "context",
      title: "Context",
      body: [
        "A three-person team building a scheduling tool for independent therapists had a long backlog and no shared way to decide what came next. Everything was described as urgent.",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      body: [
        "The backlog held 78 items with no criteria attached. Decisions were made in conversation and reversed the following week, which cost the developer roughly a third of his time in rework.",
      ],
    },
    {
      id: "role",
      title: "My role",
      body: [
        "I facilitated the exercise rather than owning the decisions. My job was to give the team a frame they could keep using after I left.",
      ],
    },
    {
      id: "research",
      title: "Research & benchmark",
      body: [
        "I reviewed six competing products against the jobs the team's users described, and interviewed five customers about the moment they almost churned.",
      ],
      list: [
        "6-product feature and pricing benchmark",
        "5 churn-risk interviews",
        "Support ticket tagging over 4 months",
      ],
    },
    {
      id: "insights",
      title: "Insights",
      body: [
        "Most backlog items served acquisition. Nearly every churn signal came from the first two weeks of use, where nothing was planned.",
      ],
    },
    {
      id: "process",
      title: "Process",
      body: [
        "We scored the backlog with a simple impact-versus-effort grid, defined four KPIs the team could actually measure with their current tooling, and grouped the survivors into three themes across two quarters.",
      ],
      list: [
        "Activation rate at day 14",
        "Weekly active practitioners",
        "Support tickets per 100 bookings",
        "Time to first completed booking",
      ],
    },
    {
      id: "solution",
      title: "Final roadmap",
      body: [
        "Quarter one focused entirely on activation. Quarter two on reducing support load. Everything else moved to a parked list with a stated reason, which turned out to be the part the founder valued most.",
      ],
    },
  ],
  results: [
    { metric: "78 → 21", label: "Backlog items", note: "After scoring and parking" },
    { metric: "4", label: "KPIs adopted", note: "Reviewed monthly by the team" },
    { metric: "2 quarters", label: "Roadmap horizon", note: "Themes, not dated features" },
  ],
  learnings: [
    "Writing down why something was parked prevented the same discussion from returning every week.",
    "Four measurable KPIs beat twelve aspirational ones for a team this size.",
    "Facilitation, not authorship, was what made the roadmap survive.",
  ],
  gallery: [
    { caption: "Impact / effort grid", alt: "Prioritisation grid" },
    { caption: "KPI framework", alt: "KPI framework sheet" },
    { caption: "Two-quarter roadmap", alt: "Roadmap timeline by theme" },
  ],
  resources: [{ label: "Benchmark summary", href: "#" }],
};
