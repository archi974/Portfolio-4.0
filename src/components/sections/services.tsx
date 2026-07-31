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
          eyebrow="What I do"
          title="Four ways I contribute to a product team"
          description="Research and interface work sit at the centre. Strategy and front-end are what make the handover hold together."
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
