import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[76rem] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
  ariaLabelledby,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  ariaLabelledby?: string;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-20 sm:py-28 lg:py-32", className)}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 flex items-center gap-3 font-display text-[0.72rem] font-semibold tracking-[0.22em] text-ink-faint uppercase">
          <span aria-hidden className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
