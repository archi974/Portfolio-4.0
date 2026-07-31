export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: "2025 — Present",
    title: "Product Designer Student",
    org: "OpenClassrooms",
    description:
      "Currently completing a professional Product Design certification focused on UX research, UI design, product strategy and prototyping. Working on end-to-end design projects covering user research, design systems, service design and collaboration with developers.",
    tags: ["UX Research", "UI Design", "Prototyping"],
  },
  {
    period: "2023 — 2025",
    title: "Freelance Front-end Developer",
    org: "Self-employed",
    description:
      "Designed and developed responsive websites and portfolios for individuals and small businesses. Built React and Next.js interfaces from Figma mockups, optimized web performance and integrated external APIs and Firebase services.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "2022 — 2023",
    title: "Web Developer Certification",
    org: "OpenClassrooms",
    description:
      "Completed a professional Web Development certification through seven hands-on projects covering JavaScript, responsive development, application architecture, performance optimization, full-stack development and portfolio creation.",
    tags: ["JavaScript", "Full-stack", "Performance"],
  },
  {
    period: "2021",
    title: "Teaching Assistant & Hackathon Participant",
    org: "Epitech / CDS Group",
    description:
      "Mentored first and second-year students in HTML, CSS and jQuery while participating in a hackathon focused on improving hotel search experiences through interface design and API integration.",
    tags: ["Mentoring", "Hackathon", "HTML/CSS"],
  },
  {
    period: "2021 — 2022",
    title: "Web Developer Program",
    org: "Web@cadémie by Epitech",
    description:
      "Completed an intensive web development program focused on modern front-end and back-end technologies, strengthening software engineering fundamentals and collaborative development practices.",
    tags: ["Web Development", "React", "Node.js"],
  },
  {
    period: "2015 — 2017",
    title: "Higher National Diploma in Digital Systems",
    org: "BTS Systèmes Numériques",
    description:
      "Studied digital systems, software development fundamentals and technical problem-solving, building a strong engineering mindset before specializing in web technologies.",
    tags: ["Digital Systems", "Programming"],
  },
];
