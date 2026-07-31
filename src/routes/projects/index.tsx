import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/layouts/section";
import { PageTransition, Reveal } from "@/components/ui-kit/motion";
import { ProjectCard } from "@/components/ui-kit/project-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { designProjects } from "@/data/projects-design";
import { developmentProjects } from "@/data/projects-development";

const title = "Projects — Product Design & Development | Léa Marchand";
const description =
  "Product design case studies covering research, service design and strategy, plus front-end projects built with React, Next.js and TypeScript.";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <PageTransition>
      <Section className="pb-10">
        <Container>
          <p className="mb-4 flex items-center gap-3 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-ink-faint uppercase">
            <span aria-hidden className="h-px w-8 bg-accent" />
            Projects
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.06] font-semibold sm:text-5xl lg:text-[3.5rem]">
            Work I can talk about in detail.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Two families of projects: product design engagements that start with research, and
            front-end builds where I own the implementation.
          </p>
          <nav aria-label="Project categories" className="mt-8 flex flex-wrap gap-3">
            <a
              href="#product-design"
              className="rounded-full border border-border bg-surface px-4 py-2 font-display text-sm font-medium transition-colors duration-250 hover:border-accent"
            >
              Product Design
            </a>
            <a
              href="#development"
              className="rounded-full border border-border bg-surface px-4 py-2 font-display text-sm font-medium transition-colors duration-250 hover:border-accent"
            >
              Development
            </a>
          </nav>
        </Container>
      </Section>

      <Section id="product-design" ariaLabelledby="design-heading" className="pt-6">
        <Container>
          <SectionHeading
            id="design-heading"
            eyebrow="Product Design"
            title="Research, interfaces and strategy"
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {designProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="development" ariaLabelledby="dev-heading" className="paper border-y border-border">
        <Container>
          <SectionHeading
            id="dev-heading"
            eyebrow="Development"
            title="Things I designed and then built"
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {developmentProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCta />
    </PageTransition>
  );
}
