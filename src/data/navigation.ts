export type NavItem = {
  label: string;
  to: string;
};

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const person = {
  name: "Léa Marchand",
  role: "Product Designer · UX/UI",
  location: "Bordeaux, France",
  email: "hello@leamarchand.design",
  tagline:
    "Product Designer specialized in UX/UI with a strong front-end background using React, Next.js and TypeScript.",
};
