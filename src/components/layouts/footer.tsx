import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layouts/section";
import { navigation, person } from "@/data/navigation";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold">{person.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {person.role} — basé à {person.location}, spécialisé en UX/UI et développement Front-end.
          </p>
        </div>

        <div className="flex gap-14">
          <nav aria-label="Footer">
            <h2 className="font-display text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
              Pages
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-ink-soft transition-colors duration-250 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase">
              Réseaux
            </h2>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="link-underline text-sm text-ink-soft transition-colors duration-250 hover:text-ink"
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {person.name}. Tous droits réservés.</p>
        <p>Conçu et développé avec React, TypeScript et Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
