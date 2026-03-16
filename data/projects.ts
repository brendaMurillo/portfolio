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
};

export const projects: Project[] = [
  {
    slug: "secondary-analysis-research-paper",
    title: "Secondary Analysis Research Paper",
    description:
      "A research-focused project using exploratory data analysis and basic statistical modeling to support a secondary analysis paper.",
    longDescription:
      "In this project, I worked as a researcher performing exploratory data analysis (EDA) and basic statistical modeling to support a secondary analysis research paper. My role involved examining data, identifying patterns and relationships, and helping interpret findings in a way that supported the overall research goals. This project strengthened my interest in data science by combining analytical thinking, data interpretation, and structured written communication.",
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
      "A database-driven group project with customer purchasing features, employee analytics, and inventory management.",
    longDescription:
      "Salvage Reseller was a group final project for Database Design and Implementation. The system used mock data stored in a database and displayed products through SQL queries called in PHP. It also included an employee dashboard with analytics and inventory add, delete, and update functionality. The project was developed collaboratively using GitHub. The repository is hosted on my partner's GitHub account, which I had access to while working on the project.",
    image: "/database.png",
    techStack: ["SQL", "PHP", "GitHub", "Database Systems"],
    github: "https://github.com/adrimivas/salvage_reseller",
    status: "Completed",
    imageFit: "contain",
  },
  {
    slug: "100-days-of-python",
    title: "100 Days of Python",
    description:
      "An in-progress Python learning challenge documenting steady progress through hands-on daily practice.",
    longDescription:
      "This project represents my ongoing 100 Days of Python challenge. I am currently on day 13 and using OnlineGDB to practice and build consistency while improving my programming skills. My goal is to strengthen my Python foundation because it is widely used in data science and machine learning, which are key areas of interest for me.",
    image: "/100days-course.webp",
    techStack: ["Python", "OnlineGDB"],
    github: "",
    status: "In Progress",
    imageFit: "contain",
  },
  {
    slug: "r-for-data-science-planned",
    title: "R for Data Science",
    description:
      "A planned project focused on learning R to strengthen my skills in data science alongside Python.",
    longDescription:
      "This is a planned self-development project that I intend to begin as I continue building technical depth in data science. The goal is to learn R and strengthen my understanding of both Python and R, since both languages are widely used in my field. This project will support my long-term interests in data science, machine learning, and analytics.",
    image: "/randPy.jpeg",
    techStack: ["R", "Python", "Data Science"],
    github: "",
    status: "Planned",
    imageFit: "contain",
  },
];