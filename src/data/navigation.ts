export type NavItem = {
  label: string;
  to: string;
};

export const navigation: NavItem[] = [
  { label: "Accueil", to: "/" },
  { label: "Projets", to: "/projects" },
  { label: "À propos", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const person = {
  name: "Vincent K/BIDI",
  role: "Product Designer · UX/UI",
  location: "Hampteau en Belgique",
  email: "vincent.k.97480@gmail.com",
  tagline:
    "Designer produit spécialisé en UX/UI, avec une solide expérience en développement front-end (React, Next.js et TypeScript).",
};
