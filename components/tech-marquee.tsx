import { Marquee, MarqueeFade, MarqueeContent, MarqueeItem } from "./ui/shadcn-io/marquee";
import { Technology } from "@/lib/utils";
import Image from "next/image";
import ConvexIcon from "@/public/convex.svg";
import { Stardos_Stencil } from "next/font/google";
import { cn } from "@/lib/utils";

const allertaStencil = Stardos_Stencil({
  subsets: ["latin"],
  weight: "700",
});

export const TechnologyMarquee = ({
  title,
  technologies,
  direction,
  className,
}: {
  title: string;
  technologies: Technology[];
  direction: "left" | "right";
  className?: string;
}) => {
  const iconSize = 22;
  const iconSizeSm = 18;
  return (
    <div className={cn("relative", className)}>
      <div
        className={`${
          direction === "left" ? "-rotate-12" : "right-0 rotate-12"
        } sm:text-2xl sm:border-2 border-1 sm:px-1 px-0.5 border-red-600/80 text-red-600/80 translate-y-1/4 absolute z-50 uppercase ${
          allertaStencil.className
        }`}
      >
        {title}
      </div>
      <Marquee>
        <MarqueeFade side="left" className="hidden sm:block" />
        <MarqueeFade side="right" className="hidden sm:block" />
        <MarqueeContent className="py-10" direction={direction}>
          {technologies.map((technology) => (
            <MarqueeItem key={technology.name} className="mx-1 sm:mx-3">
              <div
                key={technology.name}
                className="flex justify-center items-center sm:gap-3 gap-2 rounded-full bg-accent/70 border border-accent-foreground/10 sm:px-4 sm:py-2 px-2 py-1 sm:shadow-lg shadow-md"
              >
                <TechnologyIcon technology={technology} iconSize={iconSize} className="hidden sm:inline" />
                <TechnologyIcon technology={technology} iconSize={iconSizeSm} className="inline sm:hidden" />

                <span className="text-sm sm:text-xl">{technology.name}</span>
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

const TechnologyIcon = ({
  technology,
  iconSize,
  className,
}: {
  technology: Technology;
  iconSize: number;
  className?: string;
}) => {
  return (
    <span className={className}>
      {technology.name === "Convex" ? (
        <Image src={ConvexIcon} alt="Convex" width={iconSize + 4} height={iconSize + 4} />
      ) : (
        <technology.icon style={{ fill: technology.color }} size={iconSize} />
      )}
    </span>
  );
};
