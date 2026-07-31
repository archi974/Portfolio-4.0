import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mockups.jpg";
import { Container } from "@/components/layouts/section";
import { ButtonLink } from "@/components/ui-kit/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 lg:pt-28 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-accent/8 blur-3xl"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5 font-display text-xs font-medium text-ink-soft"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            Available for freelance product design
          </motion.p>

          <motion.h1
            {...fade(0.06)}
            className="text-[2.6rem] leading-[1.04] font-semibold sm:text-[3.4rem] lg:text-[4rem]"
          >
            Designing intuitive digital experiences with a{" "}
            <span className="relative whitespace-nowrap">
              product mindset
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[0.28em] rounded-full bg-accent/35"
              />
            </span>
            .
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Product Designer specialized in UX/UI with a strong front-end background using React,
            Next.js and TypeScript. I work from research to shipped interface, and I stay involved
            after the handover.
          </motion.p>

          <motion.div {...fade(0.18)} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/projects" size="lg">
              View projects
              <ArrowRight aria-hidden />
            </ButtonLink>
            <ButtonLink to="/contact" size="lg" variant="outline">
              Contact me
            </ButtonLink>
          </motion.div>

          <motion.dl
            {...fade(0.24)}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              { value: "6 yrs", label: "Design & front-end" },
              { value: "20+", label: "Products shipped" },
              { value: "WCAG AA", label: "Accessibility baseline" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-semibold">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-ink-faint">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, scale: 0.98 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={heroImage}
              alt="Floating paper-textured app screens above a walnut desk, one edge lit in cyan"
              width={1408}
              height={1104}
              fetchPriority="high"
              className="size-full object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
