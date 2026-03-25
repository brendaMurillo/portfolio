//stores structured content for projects and blog posts, 
// rendered dynamically using .map() and accessed individually with .find() through dynamic routes like /portfolio/[slug] and /blog/[slug].
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "exploratory-data-analysis-research-paper",
    title: "My Experience Performing Exploratory Data Analysis for a Research Paper",
    excerpt:
      "A reflection on using exploratory data analysis and basic statistical modeling to support a secondary analysis research paper.",
    category: "Research",
    date: " 2026",
    content: [
      "This project gave me the opportunity to work as a researcher on a secondary analysis research paper. My role focused on exploratory data analysis, also known as EDA, along with basic statistical modeling to better understand patterns in the data.",
      "One of the most important parts of this experience was learning how to approach data with curiosity and structure. I had to examine the dataset carefully, identify patterns, look for irregularities, and understand which variables were most meaningful to the overall research question.",
      "I also gained experience interpreting results in a way that supported the larger goals of the paper. That process helped me understand that data analysis is not only about numbers, but also about communication. Being able to explain what patterns mean and why they matter is just as important as identifying them.",
      "This experience strengthened my interest in data science because it showed me how analysis can contribute to real research in a meaningful way. It also gave me more confidence in my ability to work through data thoughtfully, organize findings clearly, and connect technical analysis to broader questions.",
      "Looking back, this project helped me grow in both analytical thinking and written communication. It confirmed that I enjoy work that combines research, interpretation, and technical problem solving."
    ],
  },
  {
    slug: "building-the-salvage-reseller-database-project",
    title: "Building the Salvage Reseller Database Project",
    excerpt:
      "A look at how our team built a database-driven reseller system with SQL, PHP, analytics, and inventory tools.",
    category: "Database Project",
    date: " 2026",
    content: [
      "Salvage Reseller was a group project created for Database Design and Implementation. The purpose of the project was to design a system that could store product information, display items for customers, and provide useful tools for employees managing the business.",
      "Our project used SQL queries connected through PHP to display products and support customer purchasing. We also created an employee dashboard that allowed for analytics as well as inventory actions such as adding, deleting, and updating products. This gave the project both a customer-facing side and an internal management side.",
      "One of the most valuable parts of this project was seeing how database design affects the overall experience of a system. A strong database structure supports accuracy, organization, and efficiency, and it helped me better understand how backend logic connects to what users actually see on the screen.",
      "Because this was a team project, I also gained more experience with collaboration and version control. We used GitHub during development, which helped us organize our work and contribute to the project in a more professional way.",
      "This project helped me strengthen both technical and teamwork skills. It also gave me a clearer sense of how database systems can support practical applications, which is something I want to continue developing in future work."
    ],
  },
  {
    slug: "progress-through-100-days-of-python",
    title: "My Progress Through the 100 Days of Python Challenge",
    excerpt:
      "What I’m learning from consistent Python practice and how it supports my long-term goals in data science and machine learning.",
    category: "Learning Journal",
    date: " 2026",
    content: [
      "I started the 100 Days of Python challenge to build stronger consistency in programming and improve my confidence with Python. I am currently on day 13 and using OnlineGDB to practice regularly.",
      "One of the biggest lessons from this challenge so far is that steady progress matters more than trying to master everything at once. I do multiple days at a time and I notice the more occasions I work, the more comfortable I am with what I've learned.",
      "I know this will be useful in future coursework, projects, and technical interviews.",
      "Python is especially important to me because of its role in data science and machine learning. Since those are major areas of interest for me, I see this challenge as more than just practice. It is a foundation for the kind of work I hope to do in the future.",
      "As I continue through the challenge, my goal is to keep improving step by step and stay focused on long-term growth."
    ],
  },
];