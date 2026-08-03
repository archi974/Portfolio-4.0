export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: "2025 — Aujourd'hui",
    title: "Product Designer en formation",
    org: "OpenClassrooms",
    description:
      "Formation professionnelle en Product Design couvrant la recherche utilisateur, le design d'interfaces, la stratégie produit, le prototypage et les tests utilisateurs. Réalisation de projets complets allant de la recherche UX à la conception de prototypes interactifs en collaboration avec des développeurs.",
    tags: [
      "Recherche utilisateur",
      "Entretiens utilisateurs",
      "Personas",
      "Parcours utilisateur",
      "User flow",
      "Atelier",
      "Plan de conception UX/UI",
      "Maquettes",
      "Wireframes",
      "Moodboard",
      "Prototypage",
      "Micro-test"
    ],
  },
  {
    period: "2023 — 2025",
    title: "Développeur Front-end Freelance",
    org: "Indépendant",
    description:
      "Conception et développement de sites vitrines et de portfolios pour des particuliers et des petites entreprises. Intégration de maquettes Figma avec React et Next.js, optimisation des performances web et intégration d'API externes ainsi que de services Firebase.",
    tags: [
      "Next",
      "Redux",
      "MongoDB",
      "Node",
      "Express",
      "React",
      "TypeScript",
      "Tailwind",
      "CSS",
      "HTML",
      "Figma"
    ],
  },
  {
    period: "2022 — 2023",
    title: "Formation Développeur Web",
    org: "OpenClassrooms",
    description:
      "Obtention du titre professionnel de Développeur Web à travers plusieurs projets couvrant JavaScript, le développement responsive, l'architecture d'applications, l'optimisation des performances, le développement full-stack et la création d'un portfolio professionnel.",
    tags: [
      "MongoDB",
      "Node.js",
      "Express",
      "React",
      "Typescript",
      "Tailwind",
      "Sass",
      "JavaScript",
      "HTML",
      "CSS"
    ],
  },
  {
    period: "2021",
    title: "Assistant pédagogique & Hackathon",
    org: "Epitech / CDS Group",
    description:
      "Accompagnement d'étudiants de première et deuxième année dans l'apprentissage du HTML, CSS et jQuery. Participation à un hackathon organisé par CDS Group autour de l'amélioration de l'expérience utilisateur d'un moteur de recherche d'hôtels grâce à la conception d'interfaces et à l'intégration d'API.",
    tags: [
      "Mentorat",
      "Hackathon",
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },
  {
    period: "2021 — 2022",
    title: "Formation Développeur Web",
    org: "Web@cadémie by Epitech",
    description:
      "Formation intensive en développement web permettant d'acquérir de solides bases en développement front-end et back-end, en architecture logicielle et en travail collaboratif sur des projets techniques.",
    tags: [
      "React Native",
      "React",
      "Vue",
      "Jquery",
      "Javascript",
      "Symfony",
      "Laravel",
      "MySQL",
      "PHP",
      "Tailwind",
      "SASS",
      "CSS",
      "HTML"
    ],
  },
  {
    period: "2015 — 2017",
    title: "BTS Systèmes Numériques",
    org: "Éducation nationale",
    description:
      "Formation orientée vers les systèmes numériques, les bases du développement logiciel et la résolution de problématiques techniques, constituant les fondations de mon parcours dans le développement informatique.",
    tags: [
      "Systèmes numériques",
      "Programmation",
      "HTML",
      "CSS"
    ],
  },
];
