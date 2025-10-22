import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  SiAngular,
  SiD3,
  SiDaisyui,
  SiFirebase,
  SiHeroui,
  SiLodash,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactHex,
  SiReactquery,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiTypescriptHex,
  SiNextdotjsHex,
  SiTailwindcssHex,
  SiPrismaHex,
  SiPostgresqlHex,
  SiD3Hex,
  SiLodashHex,
  SiReactqueryHex,
  SiDaisyuiHex,
  SiAngularHex,
  SiFirebaseHex,
  SiHerouiHex,
  SiShadcnuiHex,
  SiJavascriptHex,
  SiJavascript,
  SiPythonHex,
  SiPython,
  SiCss,
  SiCssHex,
  SiHtml5Hex,
  SiHtml5,
} from "@icons-pack/react-simple-icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const technologies = [
  {
    name: "React",
    icon: SiReact,
    color: SiReactHex,
    isCurrent: true,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: SiTypescriptHex,
    isCurrent: true,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: SiNextdotjsHex,
    isCurrent: true,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: SiTailwindcssHex,
    isCurrent: true,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: SiPrismaHex,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: SiPostgresqlHex,
  },
  {
    name: "D3.js",
    icon: SiD3,
    color: SiD3Hex,
  },
  {
    name: "Lodash",
    icon: SiLodash,
    color: SiLodashHex,
  },
  {
    name: "React Query",
    icon: SiReactquery,
    color: SiReactqueryHex,
    isCurrent: true,
  },
  {
    name: "DaisyUI",
    icon: SiDaisyui,
    color: SiDaisyuiHex,
    isCurrent: true,
  },
  {
    name: "Angular",
    icon: SiAngular,
    color: SiAngularHex,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: SiFirebaseHex,
  },
  {
    name: "Convex",
    icon: SiFirebase,
    color: "#FFCA28",
    isCurrent: true,
  },
  {
    name: "HeroUI",
    icon: SiHeroui,
    color: SiHerouiHex,
  },
  {
    name: "Shadcn UI",
    icon: SiShadcnui,
    color: SiShadcnuiHex,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: SiJavascriptHex,
  },
  {
    name: "Python",
    icon: SiPython,
    color: SiPythonHex,
  },
  {
    name: "CSS",
    icon: SiCss,
    color: SiCssHex,
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: SiHtml5Hex,
  },
];
