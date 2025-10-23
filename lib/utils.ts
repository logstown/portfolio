import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  SiAngular,
  SiD3,
  SiDaisyui,
  SiFirebase,
  SiHeroui,
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
  SiReactqueryHex,
  SiDaisyuiHex,
  SiAngularHex,
  SiFirebaseHex,
  SiHerouiHex,
  SiShadcnuiHex,
  SiPythonHex,
  SiPython,
  SiMaterialdesign,
  SiMaterialdesignHex,
  SiVite,
  SiViteHex,
} from "@icons-pack/react-simple-icons";

export interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
  isCurrent?: boolean;
  isFrontend?: boolean;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const technologies: Technology[] = [
  {
    name: "React",
    icon: SiReact,
    color: SiReactHex,
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: SiTypescriptHex,
    isCurrent: true,
    isFrontend: true,
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
    isFrontend: true,
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
    isFrontend: true,
  },
  {
    name: "React Query",
    icon: SiReactquery,
    color: SiReactqueryHex,
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "DaisyUI",
    icon: SiDaisyui,
    color: SiDaisyuiHex,
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "Angular",
    icon: SiAngular,
    color: SiAngularHex,
    isFrontend: true,
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
    isFrontend: true,
  },
  {
    name: "Shadcn UI",
    icon: SiShadcnui,
    color: SiShadcnuiHex,
    isFrontend: true,
  },
  {
    name: "Python",
    icon: SiPython,
    color: SiPythonHex,
  },
  {
    name: "Material Design",
    icon: SiMaterialdesign,
    color: SiMaterialdesignHex,
    isFrontend: true,
  },
  {
    name: "Vite",
    icon: SiVite,
    color: SiViteHex,
    isFrontend: true,
  },
];
