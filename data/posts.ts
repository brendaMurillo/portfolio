// stores structured content for projects and blog posts,
// rendered dynamically using .map() and accessed individually with .find()
// through dynamic routes like /portfolio/[slug] and /blog/[slug].

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "predicting-employee-turnover-research",
    title: "Predicting Employee Turnover Through Data Analysis",
    category: "Research",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "A reflection on analyzing HR employee churn patterns using Python, statistics, and data visualization.",
    content: [
      "Working on my predicting employee turnover research project helped me understand how data analysis can be used to study real workplace challenges.",
      "The project focused on HR employee churn and explored factors such as satisfaction level, salary, tenure, workload, and evaluation scores.",
      "Through Python, data cleaning, exploratory data analysis, statistical testing, and visualization, I was able to identify patterns that were connected to employee turnover.",
      "One of the most important lessons I learned was that strong technical analysis is only one part of a project. Communicating the results clearly through visuals, writing, and presentation is just as important.",
      "This project strengthened my interest in data science, machine learning, and research because it showed how analytical work can support practical decision-making.",
    ],
  },
  {
    slug: "data-analytics-workshop-experience",
    title: "What I Learned from the Data Analytics Workshop",
    category: "Data Analytics",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "A reflection on building dashboards, cleaning data, and presenting insights through a hands-on analytics workshop.",
    content: [
      "The CSUB Data Analytics Workshop gave me hands-on experience working with data in a practical and career-focused environment.",
      "During the workshop, I practiced cleaning data, building dashboards, analyzing trends, and communicating insights through visualizations.",
      "This experience helped me become more comfortable using tools like Excel, Tableau, SQL, and Python in a data analytics workflow.",
      "I also learned how important it is to present information clearly so that technical findings can be understood by different audiences.",
      "The workshop strengthened my confidence in pursuing data analyst, data science, and machine learning internship opportunities.",
    ],
  },
  {
    slug: "money-app",
    title: "Completing MoneyApp: A Financial Decision-Support Project",
    category: "Project Update",
    date: "March 2026",
    readTime: "4 min read",
    excerpt:
      "A look at completing MoneyApp, a collaborative finance app focused on debt, investing, savings, and decision support.",
    content: [
      "MoneyApp is a collaborative financial decision-support app designed to help users think through money decisions related to debt, investing, savings, and budgeting.",
      "The project helped me practice app development, teamwork, planning, and user-focused design.",
      "One of the main goals of MoneyApp was to make financial choices easier to understand by giving users tools and information that support better decision-making.",
      "Completing this project helped me see how software development can be used to solve practical problems that people may experience in everyday life.",
      "It also strengthened my experience working on a team project from planning through implementation.",
    ],
  },
  {
    slug: "salvage-reseller-project",
    title: "Building the Salvage Reseller Database Project",
    category: "Software Development",
    date: "December 2025",
    readTime: "5 min read",
    excerpt:
      "A look back at a group database project involving SQL, PHP, analytics, and inventory management.",
    content: [
      "Salvage Reseller was a group project built for Database Design and Implementation, and it gave me valuable experience working on a collaborative software system.",
      "The project used mock data stored in a database, with products displayed through SQL queries called in PHP.",
      "In addition to customer-facing purchasing features, the system also included an employee dashboard with analytics and inventory management functionality.",
      "One of the most valuable parts of the experience was collaborating through GitHub and seeing how database design, queries, and application logic come together in a complete project.",
    ],
  },
  {
    slug: "secondary-analysis-research-paper",
    title: "What I Learned from Secondary Analysis Research",
    category: "Research",
    date: "March 2026",
    readTime: "4 min read",
    excerpt:
      "A reflection on using exploratory data analysis and statistical modeling to support a research paper.",
    content: [
      "Working on a secondary analysis research paper gave me a stronger understanding of how data can support research questions in a structured and meaningful way.",
      "My role involved exploratory data analysis and statistical modeling, which helped uncover patterns and relationships within the dataset.",
      "This experience strengthened both my technical and communication skills because I had to interpret results clearly and connect them back to the overall goals of the research.",
      "It also reinforced my interest in data science by showing me how analytical work can directly contribute to academic and research-based projects.",
    ],
  },
  {
    slug: "humanoid-paper",
    title: "Working on a Humanoid Robot Paper",
    category: "Research",
    date: "February 2026",
    readTime: "3 min read",
    excerpt:
      "A collaborative humanoid robotics paper in progress, developed through shared documents and ongoing discussion in Discord.",
    content: [
      "This project is centered on developing a humanoid robot paper through collaborative research, writing, and revision.",
      "The paper is being worked on collaboratively using shared Word documents, which makes it easier to build ideas together and refine each section over time.",
      "Discord is also being used to support communication, discussion, and feedback throughout the project.",
      "The process has been valuable not only for exploring humanoid robotics concepts, but also for strengthening collaboration and technical communication skills.",
    ],
  },
];