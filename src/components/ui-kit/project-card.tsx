import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { GlowCard } from "@/components/ui-kit/glow-card";
import { Tag } from "@/components/ui-kit/tag";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <GlowCard as="article" className="flex h-full flex-col">
      <div className="relative aspect-16/10 overflow-hidden bg-secondary">
        {isComingSoon ? (
          <div className="flex h-full items-center justify-center bg-secondary/70">
            <span className="flex items-center gap-2 font-display text-sm font-medium text-ink-faint">
              <Clock className="size-4" aria-hidden />
              Coming soon
            </span>
          </div>
        ) : (
          <img
            src={project.cover}
            alt={project.coverAlt}
            loading="lazy"
            width={1200}
            height={800}
            className="size-full object-cover transition-transform duration-300 ease-out will-change-transform hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <span className="font-display text-xs text-ink-faint">{project.year}</span>
        </div>

        <p className="text-sm leading-relaxed text-ink-soft">{project.summary}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        {isComingSoon ? (
          <p className="pt-2 font-display text-sm font-medium text-ink-faint">In progress</p>
        ) : (
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group inline-flex w-fit items-center gap-2 pt-2 font-display text-sm font-semibold text-primary transition-colors duration-250 hover:text-ink"
          >
            Read case study
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            <span className="sr-only">— {project.title}</span>
          </Link>
        )}
      </div>
    </GlowCard>
  );
}
