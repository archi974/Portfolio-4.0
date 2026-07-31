import { designProjects } from "@/data/projects-design";
import { developmentProjects } from "@/data/projects-development";
import type { Project } from "@/types/project";

export const allProjects: Project[] = [...designProjects, ...developmentProjects];

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const published = allProjects.filter((p) => p.status === "published");
  const index = published.findIndex((p) => p.slug === slug);
  return published[(index + 1) % published.length];
}

export const featuredProjects = designProjects.filter((p) => p.featured);
