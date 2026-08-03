import {
  Search,
  PenTool,
  Compass,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const services: Service[] = [
  {
    title: "Recherche utilisateur",
    description:
      "Comprendre les besoins des utilisateurs grâce à la recherche terrain afin de concevoir des solutions adaptées et fondées sur des données concrètes.",
    icon: Search,
    items: [
      "Entretiens utilisateurs",
      "Tests utilisateurs",
      "User Journey Maps",
      "Personas",
    ],
  },
  {
    title: "UI Design",
    description:
      "Concevoir des interfaces cohérentes, accessibles et évolutives grâce à une approche basée sur les Design Systems.",
    icon: PenTool,
    items: [
      "Design Systems",
      "Accessibilité",
      "Figma",
      "Prototypage",
    ],
  },
  {
    title: "Stratégie Produit",
    description:
      "Analyser les besoins utilisateurs et les objectifs business afin de prioriser les fonctionnalités et construire une vision produit claire.",
    icon: Compass,
    items: [
      "Roadmaps",
      "Benchmark",
      "Stratégie",
      "Priorisation",
    ],
  },
  {
    title: "Développement Front-end",
    description:
      "Transformer les maquettes en interfaces performantes et responsives. Ma connaissance du développement me permet d'anticiper les contraintes techniques dès la conception.",
    icon: Code2,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Responsive",
    ],
  },
];

export type ToolGroup = { group: string; tools: string[] };

export const tools: ToolGroup[] = [
  { group: "Design", tools: ["Figma", "FigJam", "Miro", "Figma Make", "Canva"] },
  { group: "Recherche", tools: [ "Notion", "ChatGPT", "Claude", "Copilot", "V0", "Lovable"] },
  { group: "Développement", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Javascript", "Node.js"] },
  { group: "Collaboration", tools: ["Trello", "GitHub", "Postman", "Visual Studio Code", "MongoDB Atlas", "Firebase"] },
];

export type SkillMeter = { label: string; level: number; note: string };

export const skills: SkillMeter[] = [
  { label: "Recherche utilisateur", level: 85, note: "Entretiens, personas, User Journey Maps" },
  { label: "UX/UI Design", level: 90, note: "Figma, wireframes, maquettes" },
  { label: "Prototypage", level: 85, note: "Figma, prototypes interactifs" },
  { label: "Accessibilité", level: 80, note: "WCAG, contraste, responsive" },
  { label: "Développement Front-end", level: 90, note: "React, Next.js, TypeScript" },
  { label: "Stratégie Produit", level: 70, note: "Roadmaps, benchmark, KPIs" },
];
