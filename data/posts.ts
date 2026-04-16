//stores structured content for projects and blog posts, 
// rendered dynamically using .map() and accessed individually with .find() through dynamic routes like /portfolio/[slug] and /blog/[slug].
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
    slug: "salvage-reseller-project",
    title: "Building the Salvage Reseller Database Project",
    category: "Software Development",
    date: "February 2026",
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
    slug: "r-for-data-science-journey",
    title: "Why I’m Learning R for Data Science",
    category: "Learning",
    date: "April 2026",
    readTime: "3 min read",
    excerpt:
      "Why learning R alongside Python is helping me grow as a data science student.",
    content: [
      "As I continue developing my data science skills, I decided to begin learning R alongside Python.",
      "Both languages are widely used in analytics, statistics, and machine learning, and learning both helps me build a more flexible technical toolkit.",
      "This project represents my commitment to strengthening my skills and becoming more versatile in the kinds of tools I can use for analysis.",
      "It has also helped me think more intentionally about how different languages support different workflows in data science.",
    ],
  },
  {
    slug: "money-app",
    title: "Building MoneyApp: Debt vs. Investing",
    category: "Project Update",
    date: "April 2026",
    readTime: "4 min read",
    excerpt:
      "MoneyApp is a collaborative finance project designed to help users decide whether to pay off debt or focus on investing.",
    content: [
      "MoneyApp is a financial decision-support app that helps users compare debt payoff versus investing.",
      "The purpose of the project is to help people make more informed choices about what to do with their money based on their financial situation.",
      "Rather than guessing whether debt payoff or investing should come first, the app is meant to provide a clearer way to evaluate both options.",
      "This project is being developed collaboratively through shared Word documents and Discord, where ideas, planning, and progress are discussed together.",
      "To stay organized, the team is also using a Gantt chart to manage tasks, timelines, and responsibilities throughout development.",
    ],
  },
  {
    slug: "humanoid-paper",
    title: "Working on a Humanoid Robot Paper",
    category: "Research",
    date: "April 2026",
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