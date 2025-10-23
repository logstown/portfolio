import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CircleArrowDown, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 h-full skew-y-12")}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
            <Image src="https://github.com/logstown.png" alt="Logan Joecks" className="object-cover" fill />
          </div>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">Logan Joecks</h1>
        <Badge variant="secondary" className="rounded-full border-none mt-4">
          <Zap className="fill-current" />
          Web Developer
        </Badge>
        <p className="mt-6 text-[17px] md:text-lg">
          Hey there! I&apos;m a Boston-based web developer with a passion for building what I want to see in the world. Enterprise
          web-app developer by day, side-project enthusiast by night 🚀
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full text-base">
            <Link href="#tech">
              See More <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
