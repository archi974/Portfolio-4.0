import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export type Social = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const socials: Social[] = [
  {
    label: "Email",
    value: "vincent.k.97480@gmail.com",
    href: "mailto:vincent.k.97480@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/vincent-kbidi/",
    href: "https://www.linkedin.com/in/vincent-kbidi/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@archi974",
    href: "https://github.com/archi974",
    icon: Github,
  },
];
