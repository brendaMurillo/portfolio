export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  github?: string;
  status: "Completed" | "In Progress" | "Planned";
  imageFit?: "contain" | "cover";
  pdf?: string;
};

export const projects: Project[] = [
  {
    slug: "secondary-analysis-research-paper",
    title: "Secondary Analysis Research Paper",
    description:
      "A research-focused project using exploratory data analysis and statistical modeling.",
    longDescription:
      "In this project, I worked as a researcher performing exploratory data analysis and statistical modeling to support a secondary analysis research paper.",
    image: "/paper.png",
    techStack: ["Statistical Modeling", "Research"],
    github: "",
    status: "Completed",
    imageFit: "contain",
  },
  {
    slug: "salvage-reseller",
    title: "Salvage Reseller",
    description:
      "A database-driven group project with customer purchasing and inventory management.",
    longDescription:
      "Salvage Reseller was a group project built using SQL and PHP with analytics and inventory management features.",
    image: "/database.png",
    techStack: ["SQL", "PHP", "GitHub"],
    github: "https://github.com/adrimivas/salvage_reseller",
    status: "Completed",
    imageFit: "contain",
  },
  {
    slug: "r-for-data-science",
    title: "R for Data Science",
    description:
      "An in-progress project focused on learning R alongside Python.",
    longDescription:
      "This project is focused on strengthening my data science skills by learning R and continuing development in Python.",
    image: "/randPy.jpeg",
    techStack: ["R", "Python", "Data Science"],
    github: "",
    status: "In Progress",
    imageFit: "contain",
  },
  {
    slug: "humanoid-robot",
    title: "Humanoid Robot Research",
    description:
      "A collaborative humanoid robotics paper developed through shared documents and discussion.",
    longDescription:
  "This humanoid robotics project focuses on collaborative research and paper development, with an emphasis on color-based object detection in computer vision. The work explores how systems can process visual input to detect and track objects based on color features, contributing to applications in robotics perception and interaction. The project is being developed collaboratively through shared Word documents and Discord, allowing for continuous drafting, discussion, and refinement.",
      image: "/human.jpg",
    techStack: ["Research", "Technical Writing", "Word", "Discord"],
    github: "",
    status: "In Progress",
    imageFit: "contain",
    pdf: "/humanoid.pdf",
  },
  {
    slug: "money-app",
    title: "MoneyApp",
    description:
      "A financial app that helps users compare paying off debt versus investing.",
    longDescription:
      "MoneyApp is a financial decision-support app that compares debt versus investments to help users make informed decisions about what to do with their money, including whether to pay off debt or focus on investing. The project is being developed collaboratively through shared Word documents and Discord, with work organized using a Gantt chart.",
    image: "/moneyApp.png",
    techStack: [
      "React",
      "JavaScript",
      "Financial Analysis",
      "Word",
      "Discord",
      "Gantt Chart",
    ],
    github: "",
    status: "In Progress",
    imageFit: "cover",
  },
];