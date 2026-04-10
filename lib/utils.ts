import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export interface Technology {
  name: string;
  icon: string;
  isCurrent?: boolean;
  isFrontend?: boolean;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const technologies: Technology[] = [
  {
    name: "React",
    icon: "skill-icons:react-dark",
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "TypeScript",
    icon: "skill-icons:typescript",
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "Next.js",
    icon: "skill-icons:nextjs-light",
  },
  {
    name: "Tailwind CSS",
    icon: "skill-icons:tailwindcss-dark",
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "Prisma",
    icon: "skill-icons:prisma",
  },
  {
    name: "PostgreSQL",
    icon: "skill-icons:postgresql-light",
  },
  {
    name: "D3.js",
    icon: "skill-icons:d3-dark",
    isFrontend: true,
  },
  {
    name: "React Query",
    icon: "logos:react-query-icon",
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "DaisyUI",
    icon: "logos:daisyui-icon",
    isCurrent: true,
    isFrontend: true,
  },
  {
    name: "Angular",
    icon: "skill-icons:angular-dark",
    isFrontend: true,
  },
  {
    name: "Firebase",
    icon: "logos:firebase-icon",
  },
  {
    name: "Convex",
    icon: "bxl:convex",
    isCurrent: true,
  },
  {
    name: "HeroUI",
    icon: "simple-icons:heroui",
    isFrontend: true,
  },
  {
    name: "Shadcn UI",
    icon: "simple-icons:shadcnui",
    isFrontend: true,
  },
  {
    name: "Python",
    icon: "skill-icons:python-light",
  },
  {
    name: "Material UI",
    icon: "devicon:materialui",
    isFrontend: true,
  },
  {
    name: "Vite",
    icon: "skill-icons:vite-dark",
    isFrontend: true,
  },
  {
    name: "Tanstack Start",
    icon: "simple-icons:tanstack",
    isFrontend: true,
    isCurrent: true,
  },
];
