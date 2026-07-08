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
    slug: "predicting-employee-turnover",
    title: "Predicting Employee Turnover",
    description:
      "A research-based data analysis project studying HR employee churn, satisfaction, salary, tenure, and turnover patterns.",
    longDescription:
      "This project analyzes 14,999 HR employee records to identify patterns related to employee turnover. The research focuses on satisfaction level, salary, tenure, workload, and evaluation scores to better understand which factors are most connected to voluntary employee departure. The project includes data cleaning, exploratory data analysis, statistical testing, correlation analysis, and visualizations. Key findings showed that low satisfaction was the strongest predictor of turnover, low-salary employees had higher attrition, and mid-career employees were a major risk group.",
    image: "/HR_Employee_Churn_Poster.png",
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "SciPy",
      "Data Analysis",
      "Statistical Testing",
      "Correlation Analysis",
      "Data Visualization",
    ],
    github: "https://github.com/brendaMurillo/predicting-employee-turnover",
    status: "Completed",
    imageFit: "contain",
  },
  {
    slug: "data-analytics-workshop",
    title: "CSUB Data Analytics Workshop",
    description:
      "A hands-on data analytics workshop focused on dashboards, data cleaning, visualization, research presentation, and analytical storytelling.",
    longDescription:
      "The CSUB Data Analytics Workshop gave me hands-on experience with data cleaning, dashboard development, visualization, research communication, and analytical presentation. Through the workshop, I practiced using data to identify trends, communicate insights clearly, and present findings in a professional setting. This experience strengthened my interest in data analytics and helped me build practical skills connected to real-world data work.",
    image: "/dataWorkshop.jpg",
    techStack: [
      "Data Analytics",
      "Data Cleaning",
      "Excel",
      "Tableau",
      "Research Presentation",
      "Data Visualization",
    ],
    status: "Completed",
    imageFit: "cover",
  },
  {
    slug: "salvage-reseller",
    title: "Salvage Reseller",
    description:
      "A database-driven group project with customer purchasing and inventory management.",
    longDescription:
      "Salvage Reseller was a collaborative database and web development project built using SQL and PHP. The project focused on inventory management, customer purchasing, and operational data organization for a salvage reseller business. I worked with relational database design, SQL queries, PHP integration, and GitHub collaboration to support a functional system for managing business data.",
    image: "/database.png",
    techStack: ["SQL", "PHP", "MySQL", "MariaDB", "Database Design", "GitHub"],
    github: "https://github.com/adrimivas/salvage_reseller",
    status: "Completed",
    imageFit: "contain",
  },
  {
    slug: "money-app",
    title: "MoneyApp",
    description:
      "A completed financial app that helps users compare paying off debt versus investing.",
    longDescription:
      "MoneyApp is a completed collaborative financial decision-support app that helps users think through debt, investing, savings, and budgeting decisions. The app includes financial tools and calculator-style features designed to support better money decisions. This project strengthened my experience with app development, teamwork, user-focused design, and financial technology concepts.",
    image: "/moneyApp.png",
    techStack: [
      "React",
      "JavaScript",
      "App Development",
      "Financial Analysis",
      "Team Collaboration",
    ],
    github: "https://github.com/adrimivas/appdev_final",
    status: "Completed",
    imageFit: "cover",
  },
  {
    slug: "secondary-analysis-research-paper",
    title: "Secondary Analysis Research Paper",
    description:
      "A research-focused project using exploratory data analysis and statistical modeling.",
    longDescription:
      "In this project, I worked as a researcher performing exploratory data analysis and statistical modeling to support a secondary analysis research paper.",
    image: "/paper.png",
    techStack: ["Statistical Modeling", "Research", "Data Analysis"],
    github: "",
    status: "Completed",
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
    status: "Completed",
    imageFit: "contain",
    pdf: "/humanoid.pdf",
  },
];