import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageTransition } from "@/components/ui-kit/motion";

const title = "Léa Marchand — Product Designer, UX/UI & Front-end";
const description =
  "Product Designer specialized in UX/UI with a strong front-end background in React, Next.js and TypeScript. Case studies on research, design systems and product strategy.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <PageTransition>
      <h1 className="sr-only">
        Léa Marchand, Product Designer specialized in UX/UI and front-end development
      </h1>
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <ContactCta />
    </PageTransition>
  );
}
