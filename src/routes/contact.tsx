import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/layouts/section";
import { PageTransition } from "@/components/ui-kit/motion";
import { ContactForm } from "@/components/ui-kit/contact-form";
import { GlowCard } from "@/components/ui-kit/glow-card";
import { socials } from "@/data/socials";
import { person } from "@/data/navigation";

const title = "Contact Léa Marchand — Product Designer available for projects";
const description =
  "Freelance product design, UX research and front-end collaboration. Email, LinkedIn and GitHub, or send a short brief directly.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <PageTransition>
      <Section>
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 flex items-center gap-3 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-ink-faint uppercase">
              <span aria-hidden className="h-px w-8 bg-accent" />
              Contact
            </p>
            <h1 className="text-4xl leading-[1.07] font-semibold sm:text-5xl">
              Let's talk about your product.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              Whether you need a discovery sprint, a design system, or a designer who can also open
              a pull request — tell me where you are and I'll tell you honestly if I'm the right fit.
            </p>

            <ul className="mt-10 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 transition-[border-color,transform,box-shadow] duration-250 hover:-translate-y-0.5 hover:border-accent hover:shadow-paper"
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <social.icon className="size-4.5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-display text-sm font-semibold">
                        {social.label}
                      </span>
                      <span className="block text-sm text-ink-soft">{social.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-ink-faint">
              Basé à {person.location} · Product Designer & Développeur Front-end
            </p>
          </div>

          <GlowCard className="p-7 sm:p-10">
            <h2 className="font-display text-xl font-semibold">Discutons de votre projet</h2>
            <p className="mt-2 mb-8 text-sm text-ink-soft">
              Une question, un projet ou une opportunité ? N'hésitez pas à me contacter, je vous répondrai dans les meilleurs délais.
            </p>
            <ContactForm />
          </GlowCard>
        </Container>
      </Section>
    </PageTransition>
  );
}
