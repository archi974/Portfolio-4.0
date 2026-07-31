import type { Project } from "@/types/project";
import coverPortfolio from "@/assets/cover-portfolio.jpg";
import coverUnsplash from "@/assets/cover-unsplash.jpg";

export const developmentProjects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "development",
    year: "2025",
    summary: "This site — designed, typed and shipped end to end.",
    description:
      "A statically rendered portfolio built with React, TanStack Router and TypeScript. Content lives in typed files, motion respects reduced-motion, and every page carries its own metadata.",
    tags: ["React", "Next.js", "TypeScript", "Accessibility"],
    cover: coverPortfolio,
    coverAlt: "Blank laptop screen in warm light",
    status: "published",
  },
  {
    slug: "unsplash-collection",
    title: "Unsplash Collection",
    category: "development",
    year: "2024",
    summary: "A photo collection manager built on a clean architecture.",
    description:
      "Server-rendered gallery with MongoDB persistence, an MVVM presentation layer and a thin API boundary that keeps the domain free of framework code.",
    tags: ["Next.js", "MongoDB", "Clean Architecture", "MVVM", "API"],
    cover: coverUnsplash,
    coverAlt: "Grid of blank paper tiles in warm tones",
    status: "published",
  },
];
