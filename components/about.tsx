import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";
import { technologies } from "@/lib/utils";
import ConvexIcon from "@/public/convex.svg";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const About = () => {
  const shuffledTechnologies = shuffleArray(technologies);
  const currentTechnologies = shuffledTechnologies.filter((technology) => technology.isCurrent);

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">Technologies</h2>
          <Marquee className="mt-12">
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent>
              {shuffledTechnologies.map((technology) => (
                <MarqueeItem key={technology.name} className="mx-3">
                  <div
                    key={technology.name}
                    className="flex justify-baseline items-center gap-3 rounded-full bg-accent/70 border border-accent-foreground/10 px-5 py-3 text-2xl"
                  >
                    {technology.name === "Convex" ? (
                      <Image src={ConvexIcon} alt="Convex" width={28} height={28} />
                    ) : (
                      <technology.icon style={{ fill: technology.color }} size={28} />
                    )}
                    {technology.name}
                  </div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
          <div className="flex flex-col items-center justify-center my-16 gap-4">
            <div className="text-lg font-medium text-muted-foreground">Current Stack:</div>
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
                        <Image src={ConvexIcon} alt="Convex" width={36} height={36} />
                      ) : (
                        <technology.icon style={{ fill: technology.color }} size={36} />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{technology.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="rounded-full">
              <GithubLogo />
              View Github
            </Button>
            <Button variant="outline" className="rounded-full">
              <Download />
              Download CV
            </Button>
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
