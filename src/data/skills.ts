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
    title: "UX Research",
    description:
      "Talking to people before drawing anything, then turning what I hear into decisions the team can act on.",
    icon: Search,
    items: ["User interviews", "User testing", "Journey maps", "Personas"],
  },
  {
    title: "UI Design",
    description:
      "Interfaces built on a system: consistent, accessible, and handed over in a state developers enjoy.",
    icon: PenTool,
    items: ["Design systems", "Accessibility", "Figma", "Prototyping"],
  },
  {
    title: "Product Thinking",
    description:
      "Framing the problem, weighing effort against impact, and keeping the roadmap honest.",
    icon: Compass,
    items: ["Roadmaps", "Benchmark", "Strategy", "Prioritization"],
  },
  {
    title: "Front-end",
    description:
      "I ship what I design. Knowing the constraints of the code makes the design better upstream.",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Responsive"],
  },
];

export type ToolGroup = { group: string; tools: string[] };

export const tools: ToolGroup[] = [
  { group: "Design", tools: ["Figma", "FigJam", "Framer", "Whimsical"] },
  { group: "Research", tools: ["Maze", "Dovetail", "Tally", "Notion"] },
  { group: "Build", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Team", tools: ["Linear", "Jira", "Slack", "Storybook"] },
];

export type SkillMeter = { label: string; level: number; note: string };

export const skills: SkillMeter[] = [
  { label: "UX Research", level: 90, note: "Interviews, testing, synthesis" },
  { label: "UI & Design Systems", level: 95, note: "Tokens, components, docs" },
  { label: "Prototyping", level: 85, note: "Figma, Framer, code prototypes" },
  { label: "Accessibility", level: 80, note: "WCAG AA, keyboard, contrast" },
  { label: "Front-end", level: 75, note: "React, Next.js, TypeScript" },
  { label: "Product Strategy", level: 70, note: "Roadmaps, KPIs, discovery" },
];
