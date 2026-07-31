import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { navigation, person } from "@/data/navigation";
import { Container } from "@/components/layouts/section";
import { ButtonAnchor } from "@/components/ui-kit/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${person.name} — home`}
        >
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground transition-transform duration-250 group-hover:-rotate-3"
          >
            LM
          </span>
          <span className="hidden font-display text-sm leading-tight font-semibold sm:block">
            {person.name}
            <span className="block text-xs font-medium text-ink-faint">{person.role}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 font-display text-sm font-medium text-ink-soft transition-colors duration-250 hover:bg-secondary hover:text-ink data-[status=active]:bg-secondary data-[status=active]:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonAnchor
            href="/resume.pdf"
            download
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Download aria-hidden />
            Download resume
          </ButtonAnchor>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors duration-250 hover:border-accent md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-xl px-4 py-3 font-display text-base font-medium text-ink-soft transition-colors duration-250 hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <ButtonAnchor href="/resume.pdf" download className="mt-3 w-full">
              <Download aria-hidden />
              Download resume
            </ButtonAnchor>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
