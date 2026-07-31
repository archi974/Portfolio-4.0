import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-display text-[0.7rem] font-medium tracking-wide",
        tone === "default" && "border-border bg-secondary/60 text-ink-soft",
        tone === "accent" && "border-accent/40 bg-accent/10 text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
