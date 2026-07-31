import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Container, Section } from "@/components/layouts/section";
import { PageTransition, Reveal } from "@/components/ui-kit/motion";
import { GlowCard } from "@/components/ui-kit/glow-card";
import { Tag } from "@/components/ui-kit/tag";
import { getNextProject, getProject } from "@/lib/projects";
import { person } from "@/data/navigation";
import type { Project } from "@/types/project";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: Project; next: Project | undefined } => {
    const project = getProject(params.slug);
    if (!project || project.status !== "published") throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  component: CaseStudyPage,
  head: ({ params, loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.title} — Case study | ${person.name}`
      : `Case study | ${person.name}`;
    const description = project?.description ?? "Product design case study.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
      scripts: project
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                dateCreated: project.year,
                keywords: project.tags.join(", "),
                author: { "@type": "Person", name: person.name },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Projects", item: "/projects" },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: project.title,
                    item: `/projects/${params.slug}`,
                  },
                ],
              }),
            },
          ]
        : [],
    };
  },
});

function CaseStudyPage() {
  const { project, next } = Route.useLoaderData();
  const study = project.caseStudy;

  return (
    <PageTransition>
      <article>
        <Section className="pb-10">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-faint">
                <li>
                  <Link to="/" className="link-underline hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link to="/projects" className="link-underline hover:text-ink">
                    Projects
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-ink">
                  {project.title}
                </li>
              </ol>
            </nav>

            <p className="mb-4 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-ink-faint uppercase">
              {project.category === "design" ? "Product Design" : "Development"} · {project.year}
            </p>
            <h1 className="max-w-3xl text-4xl leading-[1.06] font-semibold sm:text-5xl lg:text-[3.4rem]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {project.description}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Tag tone="accent">{tag}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={project.cover}
                alt={project.coverAlt}
                width={1200}
                height={800}
                className="size-full object-cover"
              />
            </div>
          </Container>
        </Section>

        {study ? (
          <>
            <Section className="py-12">
              <Container>
                <dl className="grid gap-8 border-y border-border py-10 sm:grid-cols-2 lg:grid-cols-4">
                  {study.overview.map((item) => (
                    <div key={item.label}>
                      <dt className="font-display text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </Container>
            </Section>

            <Section className="py-6">
              <Container className="max-w-3xl">
                {study.sections.map((section) => (
                  <Reveal key={section.id} className="mb-16 last:mb-0">
                    <section id={section.id} aria-labelledby={`${section.id}-title`}>
                      <h2
                        id={`${section.id}-title`}
                        className="text-2xl font-semibold sm:text-[1.75rem]"
                      >
                        {section.title}
                      </h2>
                      <div className="mt-5 space-y-4">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="text-base leading-[1.75] text-ink-soft">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {section.list ? (
                        <ul className="mt-6 space-y-3 border-l-2 border-accent/50 pl-5">
                          {section.list.map((item) => (
                            <li key={item} className="text-base leading-relaxed text-ink-soft">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  </Reveal>
                ))}
              </Container>
            </Section>

            <Section ariaLabelledby="results-title" className="paper border-y border-border">
              <Container>
                <h2 id="results-title" className="text-2xl font-semibold sm:text-3xl">
                  Results
                </h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {study.results.map((result) => (
                    <GlowCard key={result.label} className="p-7">
                      <p className="font-display text-3xl font-semibold text-primary">
                        {result.metric}
                      </p>
                      <p className="mt-3 font-display text-sm font-semibold">{result.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{result.note}</p>
                    </GlowCard>
                  ))}
                </div>
              </Container>
            </Section>

            <Section ariaLabelledby="learnings-title">
              <Container className="max-w-3xl">
                <h2 id="learnings-title" className="text-2xl font-semibold sm:text-3xl">
                  Key learnings
                </h2>
                <ul className="mt-8 space-y-5">
                  {study.learnings.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-base leading-relaxed text-ink-soft">{item}</p>
                    </li>
                  ))}
                </ul>
              </Container>
            </Section>

            <Section ariaLabelledby="gallery-title" className="pt-0">
              <Container>
                <h2 id="gallery-title" className="text-2xl font-semibold sm:text-3xl">
                  Gallery
                </h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {study.gallery.map((item) => (
                    <figure key={item.caption}>
                      <div className="aspect-4/3 overflow-hidden rounded-2xl border border-border bg-secondary">
                        <img
                          src={project.cover}
                          alt={item.alt}
                          width={1200}
                          height={800}
                          loading="lazy"
                          className="size-full object-cover"
                        />
                      </div>
                      <figcaption className="mt-3 text-sm text-ink-faint">{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>

                {study.resources.length > 0 ? (
                  <div className="mt-14">
                    <h2 className="text-2xl font-semibold sm:text-3xl">Resources</h2>
                    <ul className="mt-6 flex flex-wrap gap-3">
                      {study.resources.map((resource) => (
                        <li key={resource.label}>
                          <a
                            href={resource.href}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-display text-sm font-medium transition-colors duration-250 hover:border-accent"
                          >
                            <ExternalLink className="size-4" aria-hidden />
                            {resource.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Container>
            </Section>
          </>
        ) : null}

        <Section className="pt-0 pb-24">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-display text-sm font-medium text-ink-soft transition-colors duration-250 hover:text-ink"
              >
                <ArrowLeft className="size-4" aria-hidden />
                All projects
              </Link>
              {next ? (
                <Link
                  to="/projects/$slug"
                  params={{ slug: next.slug }}
                  className="group inline-flex items-center gap-3 text-right"
                >
                  <span>
                    <span className="block font-display text-xs tracking-[0.18em] text-ink-faint uppercase">
                      Next project
                    </span>
                    <span className="block font-display text-lg font-semibold">{next.title}</span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="size-5 text-primary transition-transform duration-250 group-hover:translate-x-1"
                  />
                </Link>
              ) : null}
            </div>
          </Container>
        </Section>
      </article>
    </PageTransition>
  );
}
