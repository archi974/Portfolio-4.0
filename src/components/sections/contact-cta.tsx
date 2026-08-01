import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layouts/section";
import { ButtonLink } from "@/components/ui-kit/button";
import { socials } from "@/data/socials";

export function ContactCta() {
  return (
    <Section ariaLabelledby="cta-heading" className="pb-24">
      <Container>
        <div className="glow-card paper px-8 py-14 text-center sm:px-14 sm:py-20">
          <h2 id="cta-heading" className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">
            Donnons vie à votre prochain produit.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Product Designer spécialisé en UX/UI, je conçois des expériences numériques
            centrées sur les utilisateurs, du besoin métier jusqu'au prototype interactif.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/contact" size="lg">
              Me contacter
              <ArrowRight aria-hidden />
            </ButtonLink>
            <ButtonLink to="/about" size="lg" variant="outline">
              En savoir plus
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="link-underline inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-250 hover:text-ink"
                  {...(social.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  <social.icon className="size-4" aria-hidden />
                  {social.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
