import { Container, Section, SectionHeading } from "@/components/layouts/section";
import { Reveal } from "@/components/ui-kit/motion";
import { SkillCard } from "@/components/ui-kit/skill-card";
import { services } from "@/data/skills";

export function ServicesSection() {
  return (
    <Section id="services" ariaLabelledby="services-heading" className="paper border-y border-border">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Compétence"
          title="Ce que je maîtrise"
          description="De la recherche utilisateur au développement front-end, j'interviens à chaque étape de la conception d'un produit numérique en plaçant les besoins des utilisateurs au cœur de chaque décision."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} className="h-full">
              <SkillCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
