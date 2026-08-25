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
      id: "constraints",
      title: "Contraintes",
      body: [
        "Le projet devait être réalisé individuellement dans le cadre de ma formation Product Designer, avec un temps limité et des livrables imposés. L'objectif était de couvrir l'ensemble du processus de conception, de la recherche utilisateur jusqu'à la préparation de la passation aux développeurs."
      ],
    },
    {
      id: "design-decisions",
      title: "Décisions de conception",
      body: [
        "Les principaux choix de conception ont été guidés par les enseignements de la recherche utilisateur. L'interface a été pensée pour permettre une découverte rapide des événements, réduire le nombre d'étapes nécessaires à l'inscription et distinguer clairement les parcours des visiteurs et des organisateurs."
      ],
    },
    {
      id: "challenges",
      title: "Défis rencontrés",
      body: [
        "La principale difficulté consistait à concevoir une expérience répondant simultanément aux besoins des visiteurs et des organisateurs sans complexifier l'interface. Cette problématique a été résolue en définissant des parcours distincts et en priorisant les fonctionnalités essentielles pour chaque profil."
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
      ratio: "phone",
      src: "/eventorias/home-page.png",
      alt: "Écran d'accueil de l'application Eventorias",
    },
    {
      caption: "Information de détail d'un événement",
      ratio: "phone",
      src: "/eventorias/event-details.png",
      alt: "Écran de détail d'un événement avec les informations essentielles",
    },
    {
      caption: "Recherche et filtres",
      ratio: "phone",
      src: "/eventorias/research-filter.png",
      alt: "Interface de recherche avec les différents filtres",
    },
    {
      caption: "Information de profil et tickets",
      ratio: "phone",
      src: "/eventorias/profile.png",
      alt: "Écran de profil utilisateur avec les tickets et événements créés",
    },
    {
      caption: "Détails d'un ticket",
      ratio: "phone",
      src: "/eventorias/ticket.png",
      alt: "Écran de détail d'un ticket avec les informations de l'événement et le QR code",
    },
    {
      caption: "Création et gestion d'un événement",
      ratio: "phone",
      src: "/eventorias/create-event.png",
      alt: "Parcours de création et de gestion d'un événement",
    },
  ],

  resources: [
    {
      label: "Documentation de passation",
      href: "https://slender-singer-afe.notion.site/Eventorias-App-Passation-aux-d-veloppeurs-bcf72a437cfc830abef3811a08281e68",
    },
    {
      label: "Prototype finale",
      href: "https://jv-design-et-tech.github.io/Prototype_event-app/",
    },
    {
      label: "Premier prototype",
      href: "https://www.figma.com/design/Nk5gZyYh1YoqQQaQd5xbgK/Maquette-Eventorias?node-id=0-1&t=5m26MHfFjPYwDRzL-1",
    },
    {
      label: "Micro-tests",
      href: "https://app.notion.com/p/Template-Micro-test-d-usage-du-prototype-no-code-f1472a437cfc834da24701c6c6094fee",
    },
    {
      label: "Veille",
      href: "https://slender-singer-afe.notion.site/Template-Micro-test-d-usage-du-prototype-f1472a437cfc834da24701c6c6094fee",
    }
  ],
};

export const cafeCase: CaseStudy = {
  overview: [
    { label: "Mon Rôle", value: "Recherche utilisateur, Design de service" },
    { label: "Durée", value: "6 semaines" },
    { label: "Contexte", value: "Projet de formation OpenClassrooms" },
    { label: "Livrables", value: "Personas, User Journey Maps" },
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
      id: "constraints",
      title: "Contraintes",
      body: [
        "Le projet devait être mené dans un délai limité en s'appuyant principalement sur des méthodes qualitatives. Les recommandations devaient être argumentées par les observations de terrain et les entretiens réalisés auprès des utilisateurs."
      ],
    },
    {
      id: "design-decisions",
      title: "Décisions de conception",
      body: [
        "Les recommandations proposées ont été directement construites à partir des observations et des entretiens afin de répondre aux difficultés réellement rencontrées par les clients. Les livrables UX ont été sélectionnés pour faciliter la compréhension des parcours et des opportunités d'amélioration par les parties prenantes."
      ],
    },
    {
      id: "challenges",
      title: "Défis rencontrés",
      body: [
        "Le principal défi était de transformer des observations parfois subjectives en recommandations concrètes et priorisées. La synthèse des données recueillies a permis de mettre en évidence les problématiques récurrentes et de proposer des solutions cohérentes."
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
        "Les résultats de la recherche ont permis de construire deux personas, deux User Journey Maps et un How Might We (HMW) afin de visualiser l'expérience utilisateur et les interactions avec le service.",
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
    { caption: "User Journey Maps et HMW persona principal", ratio: "phone", src: "/coffee/persona_1.png", alt: "Visualisation du parcours utilisateur et des points de friction" },
    { caption: "User Journey Maps et HMW persona secondaire", ratio: "phone", src: "/coffee/persona_2.png", alt: "Visualisation du parcours utilisateur et des points de friction" },
    { caption: "Persona principal", ratio: "square", src: "/coffee/Persona_1_Etude_UX_cafe_des_beaux_arts_4.png", alt: "Le persona qui présente le plus de friction" },
    { caption: "Persona secondaire", ratio: "square", src: "/coffee/Persona_2_Etude_UX_cafe_des_beaux_arts_5.png", alt: "Persona secondaire avec peu de friction" },
  ],
  resources: [
    { label: "Protocole de recherche", href: "/coffee/Protocole_de_recherche_Etude_UX_cafe_des_beaux_arts_1.pdf" },
    { label: "Grille d'observation", href: "/coffee/Grille_observation_Etude_UX_cafe_des_beaux_arts_2.pdf" },
    { label: "Guide d'entretien", href: "coffee/Guide_entretien_Etude_UX_cafe_des_beaux_arts_3.pdf" },
    { label: "Personas", href: "coffee/Persona_1_Etude_UX_cafe_des_beaux_arts_4" },
    { label: "Journey map", href: "https://www.figma.com/board/YQxSVzCWVvMfOBRWFnPuop/Customer-Journey-Map--Community-?node-id=0-1&t=e7Qywqh1p1Nn8DEE-1" },
    { label: "Atelier d'idéation", href: "https://miro.com/app/board/uXjVHHjpdTg=/?embedMode=view_only_without_ToViewport%3D-1538,-452,3463,1684&embedId=190246243052" },
    { label: "Plan de conception UX/UI", href: "https://slender-singer-afe.notion.site/Plan-de-conception-UX-UI-23c72a437cfc834799e081c465502e81" },
    { label: "Diaporama", href: "https://canva.link/o0uddv7gpg8ymr8" },
  ],
};

export const roadmapCase: CaseStudy = {
  overview: [
    {
      label: "Mon rôle",
      value: "Recherche UX, Analyse, Priorisation, Roadmap produit",
    },
    {
      label: "Durée",
      value: "4 semaines",
    },
    {
      label: "Contexte",
      value: "Projet de formation OpenClassrooms",
    },
    {
      label: "Livrables",
      value: "Analyses, Roadmap produit, Recommandations",
    },
  ],

  tools: [
    {
      title: "Google Doc",
      description: "Document de recommandations",
      icon: "google",
    },
    {
      title: "Notion",
      description: "Analyses et Roadmap produit",
      icon: "notion",
    },
  ],

  sections: [
    {
      id: "context",
      title: "Contexte",
      body: [
        "J'ai travaillé sur Flowrate, un SaaS B2B de gestion du temps et de gestion de projet utilisé par des milliers d'équipes. La plateforme permet notamment de suivre le temps, gérer les projets et les tâches, analyser la productivité, facturer les clients et planifier les ressources.",
        "L'équipe produit faisait face à un problème critique : seulement 14 % des utilisateurs terminaient l'onboarding après avoir cliqué sur « Commencer maintenant ».",
      ],
    },

    {
      id: "objective",
      title: "Objectif",
      body: [
        "Comprendre pourquoi les utilisateurs abandonnent l'onboarding en analysant les données disponibles, puis proposer des recommandations priorisées afin de construire une roadmap produit fondée sur des preuves.",
      ],
    },

    {
      id: "role",
      title: "Mon rôle",
      body: [
        "J'ai réalisé l'analyse qualitative, l'analyse quantitative, le croisement des données, la priorisation des recommandations ainsi que la construction de la roadmap produit.",
      ],
    },

    {
      id: "constraints",
      title: "Contraintes",
      body: [
        "Le projet reposait exclusivement sur des données existantes. Les recommandations devaient être priorisées selon leur impact utilisateur et leur faisabilité afin d'accompagner les décisions de l'équipe produit.",
      ],
    },

    {
      id: "challenges",
      title: "Défis rencontrés",
      body: [
        "Le principal défi consistait à transformer un volume important d'informations en décisions concrètes. Le croisement des analyses qualitatives et quantitatives a permis d'identifier les points de friction les plus critiques et de définir un ordre de priorité cohérent.",
      ],
    },

    {
      id: "process",
      title: "Ma démarche",
      body: [
        "Le travail s'est déroulé en plusieurs étapes, depuis l'analyse des données jusqu'à la construction de la roadmap produit.",
      ],
      list: [
        "Analyse qualitative",
        "Analyse quantitative",
        "Croisement des données",
        "Identification des principaux points de friction",
        "Priorisation des recommandations",
        "Construction de la roadmap produit",
      ],
    },

    {
      id: "solution",
      title: "Résultat",
      body: [
        "Cette démarche a permis de produire un document de recommandations ainsi qu'une roadmap produit priorisant les améliorations à apporter à l'onboarding afin de réduire les abandons et guider les futures évolutions de Flowrate.",
      ],
    },
  ],

  results: [
    {
      metric: "2",
      label: "Analyses réalisées",
      note: "Qualitative et quantitative",
    },
    {
      metric: "1",
      label: "Roadmap produit",
      note: "Priorisation des améliorations",
    },
    {
      metric: "1",
      label: "Document de recommandations",
      note: "Actions proposées",
    },
  ],

  learnings: [
    "Croiser des données qualitatives et quantitatives permet de valider les problèmes UX avec davantage de confiance.",
    "Prioriser les recommandations facilite la prise de décision produit en concentrant les efforts sur les améliorations à plus fort impact.",
    "Une roadmap produit transforme les enseignements de la recherche en un plan d'action concret pour les équipes.",
  ],

  gallery: [
    { caption: "", ratio: "", src: "", alt: "" },
    { caption: "", ratio: "", src: "", alt: "" },
    { caption: "", ratio: "", src: "", alt: "" },
  ],

  resources: [
    {
      label: "Analyse qualitative",
      href: "https://hexagonal-ash-6cc.notion.site/Template-Heuristiques-de-Nielsen-analyse-qualitative-35d71e1ab529801ea21af7254a282ba9",
    },
    {
      label: "Analyse quantitative",
      href: "https://hexagonal-ash-6cc.notion.site/Template-analyse-de-donn-es-quantitatives-35e71e1ab52980399d88ff0f28138139",
    },
    {
      label: "Tableau de croisement",
      href: "https://hexagonal-ash-6cc.notion.site/Tableau-de-croisement-35e71e1ab52980b09c38f5be5738818b",
    },
    {
      label: "Roadmap produit",
      href: "https://hexagonal-ash-6cc.notion.site/9ff71e1ab52982a4b49201c3bb821130?v=a8571e1ab52982a4a7c008ea6c63621a",
    },
    {
      label: "Recommandations",
      href: "/roadmap/Roadmap_recommandations_052026.pdf",
    },
  ],
};