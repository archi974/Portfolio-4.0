import type { Project } from "@/types/project";
import { kasaCase, oldBookCase } from "@/content/case-studies";
import coverKasa from "@/assets/cover-portfolio.jpg";
import coverBook from "@/assets/cover-old_book.jpg";

export const developmentProjects: Project[] = [
  {
    slug: "kasa",
    title: "Kasa",
    category: "development",
    year: "2023",
    summary: "Développement d'une application web responsive de location immobilière à partir de maquettes Figma.",
    description: "Développement du front-end de Kasa dans le cadre d'une refonte d'une application legacy vers React. L'application a été construite à partir de maquettes Figma responsives et de données JSON, avec une architecture basée sur des composants réutilisables, une navigation avec React Router et des interfaces interactives comme une galerie d'images et des sections dépliables.",
    tags: [
      "React",
      "React Router",
      "Sass",
      "JavaScript",
      "Responsive Design"
    ],
    cover: coverKasa,
    coverAlt: "Aperçu de l'application web Kasa",
    status: "published",
    caseStudy: kasaCase
  },
  {
    slug: "mon-vieux-grimoire",
    title: "Mon Vieux Grimoire",
    category: "development",
    year: "2023",
    summary: "Développement d'une API REST sécurisée pour une plateforme de référencement et de notation de livres.",
    description: "Développement du back-end de Mon Vieux Grimoire et intégration avec une application React existante. Conception d'une API REST avec Node.js et Express, gestion et persistance des données avec MongoDB, mise en place de l'authentification et de la sécurisation des routes, gestion de l'ajout et de la notation des livres ainsi que optimisation des images envoyées par les utilisateurs.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "API REST",
      "Sécurité"
    ],
    cover: coverBook,
    coverAlt: "Interface de la plateforme de notation de livres Mon Vieux Grimoire",
    status: "published",
    caseStudy: oldBookCase
  },
];
