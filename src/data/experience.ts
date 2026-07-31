export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: "2023 — today",
    title: "Product Designer (freelance)",
    org: "Independent",
    description:
      "Discovery, UX/UI and design systems for small product teams — mostly early-stage SaaS and mobile apps. I usually take part in the front-end handover too.",
    tags: ["Discovery", "Design systems", "Front-end handover"],
  },
  {
    period: "2021 — 2023",
    title: "UX/UI Designer",
    org: "Atelier Numérique",
    description:
      "Worked on booking and back-office tools for hospitality clients. Ran the first accessibility audit of the agency and helped set the shared component library.",
    tags: ["B2B", "Accessibility", "Component library"],
  },
  {
    period: "2019 — 2021",
    title: "Front-end Developer",
    org: "Studio Lignes",
    description:
      "Built marketing sites and internal dashboards in React. This is where the habit of designing with real constraints in mind started.",
    tags: ["React", "TypeScript", "Design ops"],
  },
  {
    period: "2018 — 2019",
    title: "Product Design certification",
    org: "OpenClassrooms",
    description:
      "Career switch from graphic design. Six client-facing projects, from research plan to tested prototype.",
    tags: ["Research", "Prototyping"],
  },
];
