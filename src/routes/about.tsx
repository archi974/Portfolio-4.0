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

const title = "À propos - Vincent K/BIDI | Product Designer & Développeur web front-end";
const description =
  "Découvrez mon parcours, mon approche du Product Design ainsi que mes compétences en UX/UI Design et développement Front-end.";

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
              À propos
            </p>
            <h1 className="text-4xl leading-[1.07] font-semibold sm:text-5xl">
              Je conçois des produits pensés pour les utilisateurs, conçu pour être développés.
            </h1>
            <span className="mt-3 flex flex-wrap gap-2 text-sm font-medium text-ink-faint sm:text-base">
              <Tag>📍 Montpellier</Tag>
              <Tag>🎓 Product Designer</Tag>
              <Tag>React</Tag>
              <Tag>Next.js</Tag>
              <Tag>TypeScript</Tag>
              <Tag>🎨 UX/UI</Tag>
            </span>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>
                Je suis {person.name}, Product Designer en formation avec une solide expérience en développement front-end, basé à {person.location}.
                Mon parcours vers le design a commencé par la création d'interfaces web, ce qui m'a permis de comprendre qu'une bonne expérience utilisateur doit être à la fois intuitive pour les utilisateurs et réaliste à développer.
              </p>
              <p>
                J'aime transformer des besoins utilisateurs en solutions concrètes. Qu'il s'agisse de mener une recherche utilisateur,
                de concevoir une interface sur Figma ou de réaliser un prototype interactif, mon objectif reste le même : comprendre le problème
                avant de chercher la meilleure solution, puis concevoir des expériences simples, utiles et accessibles.
              </p>
              <p>
                Mon expérience en React, Next.js et TypeScript est un véritable atout dans ma pratique du Product Design.
                Elle me permet d'échanger efficacement avec les développeurs, d'anticiper les contraintes techniques dès la conception
                et de créer des interfaces pensées pour être aussi agréables à utiliser qu'à développer.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/contact">
                <Mail aria-hidden />
                Me contacter
              </ButtonLink>
              <ButtonLink to="/projects" variant="outline">
                Voir mes projets
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-paper">
            <img
              src={aboutImage}
              alt="Bureau de travail avec un carnet de croquis, des crayons et une plante"
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
          <SectionHeading id="skills-heading" eyebrow="Compétences" title="Mon expertise" />
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
            eyebrow="Parcours"
            title="Mon parcours"
            description="Mon évolution, du développement Front-end vers le Product Design."
          />
          <Timeline entries={experience} />
        </Container>
      </Section>

      <Section ariaLabelledby="tools-heading" className="paper border-t border-border">
        <Container>
          <SectionHeading id="tools-heading" eyebrow="Outils" title="Mes outils" />
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
