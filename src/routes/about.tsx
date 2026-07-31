import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import aboutImage from "@/assets/about-desk.jpg";
import { Container, Section, SectionHeading } from "@/components/layouts/section";
import { PageTransition, Reveal } from "@/components/ui-kit/motion";
import { Timeline } from "@/components/ui-kit/timeline";
import { GlowCard } from "@/components/ui-kit/glow-card";
import { ButtonLink } from "@/components/ui-kit/button";
import { Tag } from "@/components/ui-kit/tag";
import { experience } from "@/data/experience";
import { skills, tools } from "@/data/skills";
import { person } from "@/data/navigation";

const title = "About Léa Marchand — Product Design approach & experience";
const description =
  "How I work as a Product Designer: research first, systems over screens, and a front-end background that keeps design decisions grounded in what can ship.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <PageTransition>
      <Section className="pb-8">
        <Container className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-4 flex items-center gap-3 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-ink-faint uppercase">
              <span aria-hidden className="h-px w-8 bg-accent" />
              About
            </p>
            <h1 className="text-4xl leading-[1.07] font-semibold sm:text-5xl">
              I design products the way I'd want them built.
            </h1>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>
                I'm {person.name}, a product designer based in {person.location}. I came to design
                through front-end development, which is probably why I care as much about the state
                nobody thought about as about the happy path.
              </p>
              <p>
                My approach is unremarkable on purpose: talk to people, frame the problem in writing,
                sketch cheaply, test early, then build a system rather than a pile of screens. Most
                of the value I add happens before anything looks finished.
              </p>
              <p>
                The front-end side is a complement, not a second job title. Knowing how a component
                will be implemented changes what I propose — and it makes handovers short.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/contact">
                <Mail aria-hidden />
                Get in touch
              </ButtonLink>
              <ButtonLink to="/projects" variant="outline">
                See the work
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-paper">
            <img
              src={aboutImage}
              alt="A wooden desk by a window with an open sketchbook, pencils and a small plant"
              width={900}
              height={1100}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section ariaLabelledby="skills-heading" className="paper border-y border-border">
        <Container>
          <SectionHeading id="skills-heading" eyebrow="Skills" title="Where I'm strongest" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Reveal key={skill.label} delay={index * 0.04} className="h-full">
                <GlowCard className="h-full p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-semibold">{skill.label}</h3>
                    <span className="font-display text-xs text-ink-faint">{skill.level}%</span>
                  </div>
                  <div
                    className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary"
                    role="img"
                    aria-label={`${skill.label}: ${skill.level} out of 100`}
                  >
                    <span
                      className="block h-full rounded-full bg-accent"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="mt-4 text-sm text-ink-soft">{skill.note}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section ariaLabelledby="experience-heading">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            id="experience-heading"
            eyebrow="Timeline"
            title="Experience"
            description="Six years between design studios, agencies and independent work."
          />
          <Timeline entries={experience} />
        </Container>
      </Section>

      <Section ariaLabelledby="tools-heading" className="paper border-t border-border">
        <Container>
          <SectionHeading id="tools-heading" eyebrow="Toolbox" title="What I work with daily" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((group) => (
              <div key={group.group}>
                <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li key={tool}>
                      <Tag>{tool}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
