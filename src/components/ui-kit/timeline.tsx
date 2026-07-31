import type { TimelineEntry } from "@/data/experience";
import { Tag } from "@/components/ui-kit/tag";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-border pl-8 sm:pl-10">
      {entries.map((entry) => (
        <li key={entry.period + entry.title} className="relative pb-12 last:pb-0">
          <span
            aria-hidden
            className="absolute top-1.5 -left-[calc(2rem+1px)] size-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:-left-[calc(2.5rem+1px)]"
          />
          <p className="font-display text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
            {entry.period}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold">
            {entry.title}
            <span className="text-ink-faint"> · {entry.org}</span>
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {entry.description}
          </p>
          {entry.tags ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
