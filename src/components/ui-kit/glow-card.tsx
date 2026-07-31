import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={cn("glow-card overflow-hidden", className)}>{children}</Tag>;
}
