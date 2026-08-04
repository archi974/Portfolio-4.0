export type ProjectStatus = "published" | "coming-soon";

export type CaseSection = {
  id: string;
  title: string;
  body: string[];
  list?: string[];
};

export type CaseStudy = {
  overview: { label: string; value: string }[];
  tools: { title: string; description: string; icon: string; }[];
  sections: CaseSection[];
  results: { metric: string; label: string; note: string }[];
  learnings: string[];
  gallery: { caption: string; alt: string }[];
  resources: { label: string; href: string }[];
};

export type Project = {
  slug: string;
  title: string;
  category: "design" | "development";
  year: string;
  summary: string;
  description: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  status: ProjectStatus;
  featured?: boolean;
  caseStudy?: CaseStudy;
};
