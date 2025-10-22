import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Building2, Calendar, Mountain } from "lucide-react";
import Link from "next/link";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

const ExperienceItem = ({ title, company, period, achievements, technologies }: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className={cn("space-y-3", company === "Applachian Trail" && "bg-green-600/5 p-4 rounded-lg")}>
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
  const work = [
    {
      company: "Ryan LLC",
      period: "2014 - Present",
      title: "Senior Front-end Developer",
      achievements: [
        "Develop UI of enterprise-level property tax SaaS",
        "Initially hired as sole front-end developer. Scaffolded UI in AngularJS, then partially upgraded to Angular 2+ creating a hybrid.",
        "Contributed to home-grown UI framework (ACE)",
      ],
      technologies: ["AngularJS", "Angular 2+", "JavaScript", "TypeScript", "CSS", "HTML", "D3.js"],
    },
    {
      company: "Orsyp Software (now Automic)",
      period: "2013 - 2014",
      title: "Front-end Developer",
      achievements: [
        "Sole front-end developer of a web-app called uX. Despite its nondescript title, uX was actually a powerful, enterprise-level, SaaS web app that sought to correlate business and IT metrics, allowing high level executives to draw conclusions as to how their IT performance was affecting their revenue and vice versa.",
        "Made heavy use of AngularJS and D3.js, as well as a host of other UI javascript libraries",
      ],
      technologies: ["AngularJS", "JavaScript", "CSS", "HTML", "D3.js"],
    },
    {
      company: "Vision Consulting LLC",
      period: "2010 - 2013",
      title: "Programmer",
      achievements: [
        "Developed extracts and NPR reports for various clients using NPR report-writer (proprietary Meditech software)",
        "Wrote SQL to query Meditech data repository for SSRS development",
        "Regular weekly travel to and from national headquarters in Nashville, TN (2010--2011) ",
      ],
      technologies: ["SQL", "SSRS", "Meditech"],
    },
    {
      company: "Partners HealthCare",
      period: "2009 - 2010",
      title: "Programmer Analyst",
      achievements: [
        "Experience in software development life cycle from analysis and design to coding and testing for the Admitting Outpatient application (ADO) for Brigham and Women`s Hospital.",
        "Provided 24-hour on-call support for ADO over week-long periods and fixed priority technical issues",
      ],
      technologies: ["Caché ObjectScript"],
    },
    {
      company: "Applachian Trail",
      period: "2008",
      title: "Thru-Hiker",
      achievements: ["Hiked 2176 miles from Georgia to Maine", "Took 6 months to complete", "Slept in the woods"],
      technologies: ["Backpack", "Tent", "Sleeping Bag"],
    },
    {
      company: "Meditech",
      period: "2005 - 2008",
      title: "Development Programmer",
      achievements: [
        "Experience in software development life cycle for the Imaging and Therapeutic Services (ITS) module",
        "Developed projects for requested enhancements and fixed issues",
        "Created technical specifications and wrote code based on specifications",
      ],
      technologies: ["MIIS", "MAGIC"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Professional Journey</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">A timeline of my professional growth and key achievements</p>
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
