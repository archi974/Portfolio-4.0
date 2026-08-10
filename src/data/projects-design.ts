import type { Project } from "@/types/project";
import { cafeCase, eventoriasCase, roadmapCase } from "@/content/case-studies";
import coverEventorias from "@/assets/cover-eventorias.jpg";
import coverCafe from "@/assets/cover-cafe.png";
import coverRoadmap from "@/assets/cover-roadmap.jpg";

export const designProjects: Project[] = [
  {
    slug: "eventorias",
    title: "Eventorias",
    category: "design",
    year: "2026",
    summary: "Conception et prototypage d'une application mobile dédiée à la découverte et à l'organisation d'événements.",
    description:
      "Projet de Product Design mené de bout en bout, intégrant recherche utilisateur, analyse concurrentielle, stratégie UX, conception d'interfaces, prototypage interactif et tests utilisateurs. L'objectif était de simplifier la découverte d'événements tout en proposant aux organisateurs des outils de gestion intuitifs.",
    tags: [
      "Recherche utilisateur",
      "UI Design",
      "Figma",
      "Prototypage",
      "Tests utilisateurs",
      "Product Design"
    ],
    cover: coverEventorias,
    coverAlt: "Maquettes de l'application mobile Eventorias",
    status: "published",
    featured: true,
    caseStudy: eventoriasCase,
  },
  {
    slug: "cafe-des-beaux-arts",
    title: "Étude UX – Café des Beaux-Arts",
    category: "design",
    year: "2026",
    summary: "Étude utilisateur visant à améliorer l'expérience client d'un café de quartier.",
    description:
      "Réalisation d'observations sur le terrain et d'entretiens semi-directifs afin de mieux comprendre les besoins des clients. Les résultats ont été synthétisés sous forme de personas, de User Journey Maps et de recommandations pour améliorer l'expérience globale du service.",
    tags: [
      "Recherche utilisateur",
      "Entretiens",
      "Personas",
      "User Journey Map",
      "Design de service"
    ],
    cover: coverCafe,
    coverAlt: "Supports de recherche UX comprenant personas et parcours utilisateur",
    status: "published",
    featured: true,
    caseStudy: cafeCase,
  },
  {
    slug: "product-roadmap",
    title: "Roadmap Produit",
    category: "design",
    year: "2026",
    summary: "Construction d'une roadmap produit alignée sur les besoins utilisateurs et les objectifs business.",
    description:
      "Projet de stratégie produit comprenant une analyse concurrentielle, un audit UX, la priorisation des fonctionnalités, la définition d'une roadmap et l'identification d'indicateurs de performance (KPIs) pour accompagner les décisions produit.",
    tags: [
      "Stratégie Produit",
      "Roadmap",
      "Benchmark",
      "Audit UX",
      "KPIs"
    ],
    cover: coverRoadmap,
    coverAlt: "Roadmap produit et planification stratégique",
    status: "published",
    featured: true,
    caseStudy: roadmapCase,
  },
  {
    slug: "running-app",
    title: "Application de Running",
    category: "design",
    year: "2026",
    summary: "Conception UX/UI d'une application mobile dédiée à la course à pied.",
    description:
      "Projet actuellement en cours dans le cadre de ma formation Product Designer. Le case study complet sera disponible prochainement.",
    tags: [
      "Mobile",
      "UX/UI",
      "Atomic Design"
    ],
    cover: "",
    coverAlt: "",
    status: "coming-soon",
  },
  {
    slug: "ai-project-management",
    title: "SaaS de gestion de projet avec IA",
    category: "design",
    year: "2026",
    summary: "Conception d'une plateforme SaaS de gestion de projet intégrant l'intelligence artificielle.",
    description:
      "Projet à venir centré sur la conception de workflows complexes, l'intégration de fonctionnalités assistées par l'IA et la création d'un Design System évolutif. Le case study sera publié à la fin du projet.",
    tags: [
      "SaaS",
      "IA",
      "Design System",
      "Product Design"
    ],
    cover: "",
    coverAlt: "",
    status: "coming-soon",
  },
];
