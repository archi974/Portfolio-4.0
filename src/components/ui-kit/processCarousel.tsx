import {
  SiFigma,
  SiNotion,
  SiReact,
  SiMiro,
  SiGoogle,
} from "react-icons/si";

interface ProcessCarouselProps {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const icons = {
  figma: SiFigma,
  notion: SiNotion,
  google: SiGoogle,
  miro: SiMiro,
  react: SiReact,
};

export function ProcessCarousel({
  items,
}: ProcessCarouselProps) {
  // const content = [...items, ...items, ...items, ...items, ...items];
  const content = [...items];

  // return (
  //   <section className="overflow-hidden py-4">
  //     <div className="process-track">
  //       {content.map((tool, index) => {
  //         const Icon = icons[tool.icon as keyof typeof icons];

  //         return (
  //           <article
  //             key={`${tool.title}-${index}`}
  //             className="process-card glow-card items-center"
  //           >
  //             {Icon && <Icon className="process-icon" />}

  //             <h3>{tool.title}</h3>

  //             <p className="text-center">{tool.description}</p>
  //           </article>
  //         );
  //       })}
  //     </div>
  //   </section>
  // );
  return (
    <section className="overflow-hidden py-4">
      <div className="flex gap-5 flex-wrap sm:items-center sm:justify-center">
        {content.map((tool, index) => {
          const Icon = icons[tool.icon as keyof typeof icons];

          return (
            <article
              key={`${tool.title}-${index}`}
              className="process-card glow-card items-center"
            >
              {Icon && <Icon className="process-icon" />}

              <h3>{tool.title}</h3>

              <p className="text-center">{tool.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}