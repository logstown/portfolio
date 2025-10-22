import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";
import { technologies } from "@/lib/utils";
import ConvexIcon from "@/public/convex.svg";

const About = () => {
  // const shuffledTechnologies = shuffleArray(technologies);

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Content */}
        <div className="md:text-left">
          {/* <Badge variant="secondary" className="mb-4">
            About Me
          </Badge> */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-center">Technologies</h2>
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className={cn(
                  "flex justify-baseline items-center gap-2 bg-accent rounded-full border border-accent-foreground/30 px-4 py-2 text-lg",
                  technology.isCurrent && ""
                )}
              >
                {technology.name === "Convex" ? (
                  <Image src={ConvexIcon} alt="Convex" width={20} height={20} />
                ) : (
                  <technology.icon style={{ fill: technology.color }} size={20} />
                )}
                {technology.name}
              </div>
            ))}
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
