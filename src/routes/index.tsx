import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageTransition } from "@/components/ui-kit/motion";

const title = "Vincent K/BIDI — Product Designer, UX/UI & Front-end";
const description =
  "Portfolio de Product Designer spécialisé en UX/UI et développement Front-end. De la recherche utilisateur au développement d'interfaces web avec React, Next.js et TypeScript.";

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
      <Hero />

      <ServicesSection />
      <FeaturedProjects />
      <ContactCta />
    </PageTransition>
  );
}
