export interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const work: ExperienceItemProps[] = [
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

export const projects: ProjectCardProps[] = [
  {
    title: "Quintacles",
    description: "Social web app that allows users to create, share, and browse top five lists for movies and TV.",
    image: "/projects/quintacles/q-home.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "HeroUI"],
    liveUrl: "https://quintacles.com",
    githubUrl: "https://github.com/logstown/quintacles",
  },
  {
    title: "Dangled My Stats",
    description: "Song, venue and tour charts and stats for the band Phish",
    image: "/projects/dangled-my-stats/landing.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Motion"],
    liveUrl: "https://dangledmystats.net",
    githubUrl: "https://github.com/logstown/dangled-my-stats",
  },
  {
    title: "The Bee Yard",
    description: "Chat web app created for users to discuss and react to live events in realitime.",
    image: "/projects/beeyard/beeyard-home.png",
    technologies: ["Angular", "Firebase", "Material UI"],
    liveUrl: "https://beeyard.io",
    githubUrl: "https://github.com/logstown/bee-yard",
  },
  {
    title: "Oscar Showdown",
    description: "Create pools, fill out an oscar ballot, and compete against other users.",
    image: "/projects/oscars/ballot.png",
    technologies: ["Vite", "HeroUI", "Tailwind CSS", "React", "Firebase", "React Query"],
    liveUrl: "https://oscar-showdown.com",
    githubUrl: "https://github.com/logstown/vite-oscars",
  },
];
