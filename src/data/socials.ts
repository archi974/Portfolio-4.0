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
    value: "hello@leamarchand.design",
    href: "mailto:hello@leamarchand.design",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/leamarchand",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@leamarchand",
    href: "https://github.com/",
    icon: Github,
  },
];
