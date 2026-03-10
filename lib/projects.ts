export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "One sentence project description.",
    image: "/palette.png",
    techStack: ["Next.js", "Tailwind", "API"],
    github: "https://github.com/yourname/project-one",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "One sentence project description.",
    image: "/palette.png",
    techStack: ["React", "UI", "Data"],
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "One sentence project description.",
    image: "/palette.png",
    techStack: ["TypeScript", "Design"],
    github: "https://github.com/yourname/project-three",
  },
  {
    slug: "project-four",
    title: "Project Four",
    description: "One sentence project description.",
    image: "/palette.png",
    techStack: ["Full Stack", "Auth"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}