import type { IconType } from "react-icons";
import {
  SiFigma,
  SiNotion,
  SiReact,
} from "react-icons/si";

interface ProcessStep {
  title: string;
  description: string;
  icon: IconType;
}

interface ProcessCarouselProps {
  items?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Figma",
    description: "Maquette",
    icon: SiFigma,
  },
  {
    title: "Notion",
    description: "Micro-tests, Veille, passation",
    icon: SiNotion,
  },
  {
    title: "Figma make",
    description: "Prototype",
    icon: SiFigma,
  },
  {
    title: "React",
    description: "Prototype",
    icon: SiReact,
  }
];

export function ProcessCarousel({
  items = defaultSteps,
}: ProcessCarouselProps) {
  const content = [...items,
  ...items,
  ...items,
  ...items,
  ];

  return (
    <section className="overflow-hidden py-4">
      <div className="process-track">
        {content.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={`${step.title}-${index}`}
              className="process-card glow-card items-center"
            >
              <Icon className="process-icon" />
              <h3>{step.title}</h3>
              <p className="text-center">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}