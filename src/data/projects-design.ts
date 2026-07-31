import type { Project } from "@/types/project";
import { cafeCase, eventoriasCase, roadmapCase } from "@/content/case-studies";
import coverEventorias from "@/assets/cover-eventorias.jpg";
import coverCafe from "@/assets/cover-cafe.jpg";
import coverRoadmap from "@/assets/cover-roadmap.jpg";

export const designProjects: Project[] = [
  {
    slug: "eventorias",
    title: "Eventorias",
    category: "design",
    year: "2024",
    summary: "Event discovery app redesigned around intent instead of chronology.",
    description:
      "A ten-week discovery and redesign cycle for a small event app: interviews, a diary study, an intent-based information architecture and a documented design system.",
    tags: ["UX Research", "UI Design", "Prototype", "No-code", "User Testing"],
    cover: coverEventorias,
    coverAlt: "Stacked app screen cards in warm cream with a cyan edge light",
    status: "published",
    featured: true,
    caseStudy: eventoriasCase,
  },
  {
    slug: "cafe-des-beaux-arts",
    title: "Café des Beaux-Arts",
    category: "design",
    year: "2023",
    summary: "Research-led service design for a neighbourhood café and exhibition space.",
    description:
      "Interviews, observation and a service blueprint that replaced a six-page website brief with a handful of changes that mattered.",
    tags: ["User Research", "Service Design", "Interviews", "Journey Maps", "Personas"],
    cover: coverCafe,
    coverAlt: "Hand-drawn journey map on kraft paper with sticky notes",
    status: "published",
    featured: true,
    caseStudy: cafeCase,
  },
  {
    slug: "product-roadmap",
    title: "Product Roadmap",
    category: "design",
    year: "2024",
    summary: "Turning a 78-item backlog into a two-quarter roadmap a small team could keep.",
    description:
      "Benchmark, churn interviews and a KPI framework used to prioritise a scheduling product for independent therapists.",
    tags: ["Business Strategy", "Benchmark", "KPIs", "Roadmap"],
    cover: coverRoadmap,
    coverAlt: "Abstract paper bars along a cyan timeline",
    status: "published",
    featured: true,
    caseStudy: roadmapCase,
  },
  {
    slug: "running-app",
    title: "Running App",
    category: "design",
    year: "2025",
    summary: "A training companion for runners coming back after an injury.",
    description: "Discovery in progress. Case study coming soon.",
    tags: ["Mobile", "Discovery"],
    cover: "",
    coverAlt: "",
    status: "coming-soon",
  },
  {
    slug: "ai-project-management",
    title: "AI Project Management SaaS",
    category: "design",
    year: "2025",
    summary: "Assisted planning for agencies, without hiding the decisions from the team.",
    description: "Design in progress. Case study coming soon.",
    tags: ["SaaS", "AI", "Design System"],
    cover: "",
    coverAlt: "",
    status: "coming-soon",
  },
];
