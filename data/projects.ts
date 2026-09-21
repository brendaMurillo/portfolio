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
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "lets-talk-legal-chatbot",
    title: "Let's Talk — Legal Q&A Chatbot",
    description:
      "An industry-sponsored senior capstone: a secure co-parenting communication platform with an AI legal question chatbot.",
    longDescription:
      "Let's Talk is my industry-sponsored senior capstone, where I work as an AI/Software Developer building a secure co-parenting communication platform using React Native, TypeScript, Supabase, and PostgreSQL, with real-time messaging, authentication, and family-based account linking. I implemented database-level authorization with PostgreSQL Row Level Security (RLS) and immutable message history to protect sensitive communications and support future court-aligned records. As part of the platform, I also built a legal question chatbot along with AI-powered de-escalation features using LLM/RAG workflows, including neutral message rewording and source-grounded responses over curated legal information.",
    image: "/roboclub.jpg",
    techStack: [
      "React Native",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "LLMs",
      "RAG",
      "Row Level Security",
    ],
    github: "",
    status: "In Progress",
    imageFit: "cover",
  },
  {
    slug: "stratolaunch-summer-program",
    title: "Stratolaunch Summer Program",
    description:
      "My second summer program: hands-on experience at Stratolaunch, a hypersonic flight-test accelerator at the Mojave Air and Space Port.",
    longDescription:
      "For my second summer program, I took part in a program at Stratolaunch, a technology accelerator focused on hypersonic flight testing based at the Mojave Air and Space Port. The experience gave me hands-on exposure to real-world aerospace engineering, data systems, and operations in a fast-paced technical environment, and the chance to learn alongside a talented group of peers. It strengthened my interest in applying computer science and data skills to complex, mission-driven engineering problems.",
    image: "/stratolaunch.jpeg",
    techStack: [
      "Aerospace",
      "Data Systems",
      "Engineering Operations",
      "Teamwork",
    ],
    github: "",
    status: "Completed",
    imageFit: "cover",
  },
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
    title: "Data Analytics Workshop",
    description:
      "My first summer program: a hands-on data analytics workshop focused on dashboards, data cleaning, visualization, and analytical storytelling.",
    longDescription:
      "The Data Analytics Workshop was my first summer program, where I worked as a Data Analyst Trainee and gained hands-on experience with data cleaning, dashboard development, visualization, research communication, and analytical presentation. I built 10+ interactive Tableau and Excel dashboards and used SQL and Python to clean, validate, and analyze datasets, and applied EDA, preprocessing, and statistical analysis across 20+ analytical projects. This experience strengthened my interest in data analytics and helped me build practical skills connected to real-world data work.",
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
  {
    slug: "ripeness-bench",
    title: "Ripeness Bench",
    description:
      "An agentic computer-vision system that analyzes fruit ripeness from a single image and generates individualized recommendations.",
    longDescription:
      "Ripeness Bench is a collaborative agentic computer-vision project. I built a system using specialized detection, ripeness, and recommendation agents to analyze two fruits from a single image and generate individualized recommendations. It supports both offline rule-based vision and AI vision modes, integrates Raspberry Pi image capture and a web interface, and logs scan results for evaluation and future analysis. Tap through the screenshots below to see the interface and results in action.",
    image: "/ripeness.PNG",
    gallery: ["/ripeness.PNG", "/ripeness2.PNG"],
    techStack: [
      "Computer Vision",
      "Agentic AI",
      "Python",
      "Raspberry Pi",
      "Web Interface",
    ],
    github: "https://github.com/brendaMurillo/agenticFruitDetection",
    status: "Completed",
    imageFit: "contain",
  },
  {
    slug: "the-agent-coach",
    title: "The Agent Coach",
    description:
      "A private AI study companion, built as an experimentation ground for comparing agentic AI architectures, tools, and models.",
    longDescription:
      "The Agent Coach is an independent agentic AI project: a private AI study companion powered by local models through Ollama, LangChain/LangGraph, and Gradio. It answers questions about your course from an ingested syllabus (RAG), calculates your GPA, does math, and searches the web and arXiv — all through a set of custom tools with full tool-call tracing. Beyond the assistant itself, the project is an experimentation ground for testing how the way an agentic system is built affects what it can do, including RAG over ingested documents with local embeddings, LangGraph conversation and semantic memory, multi-tool orchestration, and side-by-side comparisons of multiple models, embeddings, and tokenization.",
    image: "/agentcoach.png",
    techStack: [
      "Python",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Ollama",
      "Chroma",
      "RAG",
      "Gradio",
    ],
    github: "https://github.com/brendaMurillo/TheAgentCoach",
    status: "Completed",
    imageFit: "contain",
  },
];