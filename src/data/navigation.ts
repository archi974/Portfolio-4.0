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
  role: "Product Designer · Front-end Developer",
  location: "Hampteau en Belgique",
  email: "vincent.k.97480@gmail.com",
  tagline:
    "Product Designer spécialisé en UX/UI et développement Front-end, basé en Belgique et ouvert aux opportunités au Luxembourg.",
};
