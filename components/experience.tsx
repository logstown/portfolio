import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Building2, Calendar, Download, Mountain } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExperienceItemProps, work } from "@/lib/user-data";

const ExperienceItem = ({ title, company, period, achievements, technologies }: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className={cn("space-y-3", company === "Applachian Trail" && "bg-green-600/10 p-4 rounded-lg")}>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            {company === "Applachian Trail" ? (
              <Mountain className="size-5 text-muted-foreground" />
            ) : (
              <Building2 className="size-5 text-muted-foreground" />
            )}
          </div>
          {company === "Applachian Trail" ? (
            <Link
              href="https://ga2me.blogspot.com"
              target="_blank"
              rel="nofollow no-referrer"
              className="text-lg font-semibold hover:text-green-600 underline"
            >
              Applachian Trail
            </Link>
          ) : (
            <span className="text-lg font-semibold">{company}</span>
          )}
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <ul className="text-muted-foreground list-disc list-inside ml-6 [&>li]:mt-2">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Professional Journey</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">A timeline of my professional growth and key achievements</p>
          <Button className="rounded-full mt-6" asChild>
            <a href="/Logan_Joecks_Resume.pdf" download="Logan_Joecks_Resume.pdf">
              <Download />
              Download CV
            </a>
          </Button>
        </div>

        <div className="relative">
          {work.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
