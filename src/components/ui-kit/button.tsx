import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-250 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-paper hover:-translate-y-0.5 hover:bg-ink",
        outline:
          "bg-surface text-ink glow-card hover:-translate-y-0.5",
        ghost: "text-ink-soft hover:bg-secondary hover:text-ink",
        accent:
          "bg-accent text-accent-foreground shadow-paper hover:-translate-y-0.5 hover:brightness-105",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonStyles> & { className?: string; children: ReactNode };

export function Button({
  variant,
  size,
  className,
  ...props
}: ButtonBaseProps & ComponentProps<"button">) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  to,
  ...props
}: ButtonBaseProps & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "className">) {
  return <Link to={to} className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export function ButtonAnchor({
  variant,
  size,
  className,
  ...props
}: ButtonBaseProps & ComponentProps<"a">) {
  return <a className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export { buttonStyles };
