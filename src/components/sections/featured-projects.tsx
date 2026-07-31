import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layouts/section";
import { ButtonLink } from "@/components/ui-kit/button";
import { Reveal } from "@/components/ui-kit/motion";
import { ProjectCard } from "@/components/ui-kit/project-card";
import { featuredProjects } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <Section ariaLabelledby="featured-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="featured-heading"
            eyebrow="Selected work"
            title="Case studies, written honestly"
            description="Three projects with the decisions, the detours and the parts that did not work."
          />
          <ButtonLink to="/projects" variant="outline">
            All projects
            <ArrowRight aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.07} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
