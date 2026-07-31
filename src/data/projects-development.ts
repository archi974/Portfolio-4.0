import type { Project } from "@/types/project";
import coverPortfolio from "@/assets/cover-portfolio.jpg";
import coverUnsplash from "@/assets/cover-unsplash.jpg";

export const developmentProjects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio personnel",
    category: "development",
    year: "2026",
    summary: "Mon portfolio personnel, conçu pour présenter mes projets en Product Design et en développement.",
    description:
      "Développement d'un portfolio moderne avec Next.js et TypeScript, mettant en avant mes projets, mes compétences et mon parcours. Le site est conçu autour des bonnes pratiques en matière de performance, d'accessibilité, de SEO et de responsive design.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Accessibilité"
    ],
    cover: coverPortfolio,
    coverAlt: "Aperçu du portfolio personnel sur ordinateur portable",
    status: "published",
  },
  {
    slug: "unsplash-collection",
    title: "Unsplash Collection",
    category: "development",
    year: "2026",
    summary: "Application web permettant de rechercher et d'organiser des collections de photos.",
    description:
      "Projet développé avec Next.js et TypeScript mettant en œuvre une architecture propre, une séparation des responsabilités et une API dédiée pour gérer les collections d'images. L'objectif était de créer une application performante, évolutive et facile à maintenir.",
    tags: [
      "Next.js",
      "TypeScript",
      "API",
      "Architecture propre",
      "MongoDB"
    ],
    cover: coverUnsplash,
    coverAlt: "Interface de gestion de collections de photos",
    status: "published",
  },
];
