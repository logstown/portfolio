import Image from "next/image";
import { technologies, Technology } from "@/lib/utils";
import ConvexIcon from "@/public/convex.svg";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { TechnologyMarquee } from "./tech-marquee";

const About = () => {
  const shuffledTechnologies = shuffleArray(technologies);
  const currentTechnologies = shuffledTechnologies.filter((technology) => technology.isCurrent);
  const { frontendTechnologies, backendTechnologies } = technologies.reduce(
    (acc, technology) => {
      if (technology.isFrontend) {
        acc.frontendTechnologies.push(technology);
      } else {
        acc.backendTechnologies.push(technology);
      }
      return acc;
    },
    { frontendTechnologies: [] as Technology[], backendTechnologies: [] as Technology[] }
  );

  return (
    <section id="tech" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Content */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">Technologies</h2>
        <p className="text-muted-foreground mt-2 sm:mt-4 text-lg text-center">Love some -- used them all</p>
        <div className="p-8 rounded-lg inset-shadow-sm inset-shadow-foreground/20 bg-accent/30 mt-12">
          <div>
            <TechnologyMarquee title="Frontend" technologies={frontendTechnologies} direction="left" />
            <TechnologyMarquee title="Backend" technologies={backendTechnologies} direction="right" className="mt-2" />
          </div>
          <div className="flex flex-col items-center justify-center mt-8 gap-4">
            <div className="text-lg font-medium text-muted-foreground">Current Stack</div>
            <div className="flex flex-wrap gap-1 justify-center">
              {currentTechnologies.map((technology) => (
                <Tooltip key={technology.name} delayDuration={500}>
                  <TooltipTrigger>
                    {" "}
                    <div
                      key={technology.name}
                      className="hover:scale-125 transition-all duration-100 hover:bg-accent rounded-full p-3"
                    >
                      {technology.name === "Convex" ? (
                        <Image src={ConvexIcon} alt="Convex" width={48} height={48} />
                      ) : (
                        <technology.icon style={{ fill: technology.color }} size={48} />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{technology.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function shuffleArray(array: any[]) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default About;
