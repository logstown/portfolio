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
  return (
    <div className={cn("relative", className)}>
      <div
        className={`${
          direction === "left" ? "-rotate-12" : "right-0 rotate-12"
        } text-2xl border-2 px-1 border-red-600/80 text-red-600/80 translate-y-1/4 absolute z-50 uppercase ${
          allertaStencil.className
        }`}
      >
        {title}
      </div>
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent className="py-10" direction={direction}>
          {technologies.map((technology) => (
            <MarqueeItem key={technology.name} className="mx-3">
              <div
                key={technology.name}
                className="flex justify-center items-center gap-3 rounded-full bg-accent/70 border border-accent-foreground/10 px-4 py-2 text-xl shadow-lg"
              >
                {technology.name === "Convex" ? (
                  <Image src={ConvexIcon} alt="Convex" width={iconSize + 4} height={iconSize + 4} />
                ) : (
                  <technology.icon style={{ fill: technology.color }} size={iconSize} />
                )}
                {technology.name}
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};
