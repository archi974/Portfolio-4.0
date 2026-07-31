import { GlowCard } from "@/components/ui-kit/glow-card";
import type { Service } from "@/data/skills";

export function SkillCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <GlowCard className="h-full p-7 sm:p-8">
      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/70 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="mt-6 font-display text-lg font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.description}</p>
      <ul className="mt-6 space-y-2 border-t border-border pt-5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-ink-soft">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </GlowCard>
  );
}
