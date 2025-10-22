import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

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
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
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
      images: [
        // optional: leave the array empty if you don't want to display images
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
      images: [
        {
          src: "/images/work/orsyp-1.png",
          alt: "uX Landing page",
          width: 16,
          height: 9,
        },
        {
          src: "/images/work/orsyp-2.png",
          alt: "uX Graph",
          width: 16,
          height: 9,
        },
        {
          src: "/images/work/orsyp-3.png",
          alt: "uX Graph",
          width: 16,
          height: 9,
        },
        {
          src: "/images/work/orsyp-4.png",
          alt: "uX Calendars",
          width: 16,
          height: 9,
        },
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
      images: [],
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
      images: [],
      technologies: ["Caché ObjectScript"],
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
      images: [],
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
