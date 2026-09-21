
export default function ResumePage() {
  return (
    <div className="page-fade flex flex-col items-center gap-10 py-20">
      <section className="card max-w-4xl w-full text-center">
        <h1 className="text-4xl font-semibold">Resume</h1>
        <p className="mt-4 opacity-90">Brenda Viviana Murillo</p>

        <div className="mt-6">
          <a
            href="/B.Murillo-Resume.pdf"
            download
            className="underline font-medium"
          >
            Download Resume (PDF)
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm opacity-90">
          <a href="mailto:bmurillo3@csub.edu" className="underline">
            bmurillo3@csub.edu
          </a>
          <a
            href="https://github.com/brendaMurillo"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-murillo-760465225/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Professional Summary
        </h2>

        <p className="mt-6 opacity-90 leading-relaxed text-center">
          Computer Science student at California State University, Bakersfield
          (GPA 3.65/4.0, expected May 2027) with experience across AI/software
          development, data analytics, machine learning research, and
          full-stack projects. Skilled in Python, SQL, R, and TypeScript, with
          hands-on work in machine learning, computer vision, LLM/RAG and
          agentic AI workflows, dashboard development, and database systems.
          Currently building an AI-powered co-parenting communication platform
          and co-author on IEEE-published computer-vision research. Seeking
          data science, machine learning, or software engineering internship
          opportunities.
        </p>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Technical Skills
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium">Programming</h3>
            <p className="mt-2 opacity-90">Python, SQL, R, TypeScript</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Machine Learning &amp; Data Science
            </h3>
            <p className="mt-2 opacity-90">
              scikit-learn, XGBoost, pandas, NumPy, feature engineering, model
              tuning, model evaluation, statistical analysis
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">AI</h3>
            <p className="mt-2 opacity-90">
              Computer Vision, LLMs, RAG, Agentic AI, LangGraph, Chroma,
              Multimodal AI
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Databases &amp; Development</h3>
            <p className="mt-2 opacity-90">
              PostgreSQL, MySQL, MongoDB, Supabase, React Native, Git/GitHub,
              Gradio
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Visualization</h3>
            <p className="mt-2 opacity-90">
              Tableau, Matplotlib, Excel, ggplot2
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Additional Strengths</h3>
            <p className="mt-2 opacity-90">
              English/Spanish bilingual, teamwork, communication, problem
              solving, technical writing
            </p>
          </div>
        </div>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">Education</h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-xl font-medium">
              California State University, Bakersfield
            </h3>
            <p className="mt-2 opacity-90">
              Bachelor of Science in Computer Science
            </p>
            <p className="opacity-90">
              GPA: 3.65/4.0 | Expected May 2027
            </p>
            <p className="mt-2 opacity-90 leading-relaxed">
              Leadership: Vice President, Robotics Club | MESA Mentor.
            </p>
            <p className="mt-2 opacity-90 leading-relaxed">
              Relevant coursework: Artificial Intelligence, Linear Algebra,
              Database Systems, Data Structures, Algorithm Analysis.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Antelope Valley College</h3>
            <p className="mt-2 opacity-90">
              Associate of Liberal Arts, Sciences, Math and Science
            </p>
            <p className="opacity-90">Completed: May 2023</p>
          </div>
        </div>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Experience
        </h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-xl font-medium">
              Let&rsquo;s Talk &mdash; AI/Software Developer
            </h3>
            <p className="mt-2 opacity-90">
              Industry-Sponsored Senior Capstone | Remote | August 2026 &ndash;
              Present
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Developing a secure co-parenting communication platform using
                React Native, TypeScript, Supabase, and PostgreSQL, with
                real-time messaging, authentication, and family-based account
                linking.
              </li>
              <li>
                Implementing database-level authorization with PostgreSQL Row
                Level Security (RLS) and immutable message history to protect
                sensitive communications and support future court-aligned
                records.
              </li>
              <li>
                Contributing to AI-powered de-escalation and a legal Q&amp;A
                chatbot using LLM/RAG workflows, including neutral message
                rewording and source-grounded responses over curated legal
                information.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Handshake AI &mdash; AI Data Evaluator
            </h3>
            <p className="mt-2 opacity-90">Remote | February 2026 &ndash; Present</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Evaluated text, image, and audio datasets to improve machine
                learning training quality.
              </li>
              <li>
                Validated annotations and identified inconsistencies to support
                high-quality AI model development.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Summer Bridge Program &mdash; CSU Bakersfield
            </h3>
            <p className="mt-2 opacity-90">
              Bakersfield, CA | Summer 2026
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Completed an artificial intelligence program covering local
                LLMs, AI agents, agentic AI, computer vision, and embedded
                systems.
              </li>
              <li>
                Developed PrepPal, an AI-powered academic assistant, and The
                Agent Coach, an agentic AI study companion, applying RAG,
                multi-tool orchestration, and local models.
              </li>
              <li>
                Built Ripeness Bench, an agentic computer-vision app that
                estimates and compares the ripeness of two fruits from a single
                photo and generates individualized recommendations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Data Analyst Workshop &mdash; Data Analyst Trainee
            </h3>
            <p className="mt-2 opacity-90">
              Lancaster, CA | June 2026
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Built 10+ interactive Tableau and Excel dashboards; used SQL and
                Python to clean, validate, and analyze datasets for trends and
                decision-making.
              </li>
              <li>
                Applied EDA, preprocessing, and statistical analysis across 20+
                analytical projects, improving data quality and communicating
                findings through visualizations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">Jamba Juice &mdash; Manager</h3>
            <p className="mt-2 opacity-90">
              Palmdale, CA | October 2022 &ndash; Present
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Analyze 1,000+ weekly sales and transaction records to verify
                accuracy and identify discrepancies.
              </li>
              <li>
                Troubleshoot store system issues, including offline connection
                failures and transaction reporting errors.
              </li>
              <li>
                Lead team coordination, shift workflow, and process improvements
                in a fast-paced environment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Research &amp; Machine Learning Projects
        </h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-xl font-medium">
              Adaptive and Explainable Ball Tracking
            </h3>
            <p className="mt-2 opacity-90">IEEE MIUCC 2026 | Co-author</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Co-authored IEEE-published computer-vision research using CLAHE,
                LAB segmentation, contour validation, motion stability, and
                confidence-based decision-making to improve humanoid robot
                tracking under varying lighting and distance conditions.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Predicting Employee Turnover Using Machine Learning
            </h3>
            <p className="mt-2 opacity-90">
              Research Project | Manuscript in Preparation
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Developed and compared Logistic Regression, Random Forest, and
                XGBoost models using a dataset of 15,000+ employee records;
                performed preprocessing, feature engineering, and hyperparameter
                tuning.
              </li>
              <li>
                Evaluated model performance using ROC-AUC, precision, recall,
                F1-score, and confusion matrices.
              </li>
            </ul>
            <a
              href="https://github.com/brendaMurillo/predicting-employee-turnover"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block underline font-medium"
            >
              View GitHub Repository
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Ripeness Bench &mdash; Computer Vision &amp; Agentic AI
            </h3>
            <p className="mt-2 opacity-90">Collaborative Project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Built an agentic computer-vision system using specialized
                detection, ripeness, and recommendation agents to analyze two
                fruits from a single image and generate individualized
                recommendations.
              </li>
              <li>
                Implemented both offline rule-based vision and AI vision modes,
                integrated Raspberry Pi image capture and a web interface, and
                logged scan results for evaluation and future analysis.
              </li>
            </ul>
            <a
              href="https://github.com/brendaMurillo/agenticFruitDetection"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block underline font-medium"
            >
              View GitHub Repository
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              The Agent Coach &mdash; Agentic AI Study Companion
            </h3>
            <p className="mt-2 opacity-90">Independent Project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Built a private AI study companion in Python using local Ollama
                models, LangChain/LangGraph, and Gradio, with custom tools for
                course Q&amp;A (RAG over an ingested syllabus), GPA, math, and
                web/arXiv search, plus tool-call tracing.
              </li>
              <li>
                Used it as an experimentation ground to test how architecture
                and design choices affect capabilities, comparing multiple
                models, embeddings, and tokenization with LangGraph conversation
                and semantic memory.
              </li>
            </ul>
            <a
              href="https://github.com/brendaMurillo/TheAgentCoach"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block underline font-medium"
            >
              View GitHub Repository
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Salvage Reseller Database System
            </h3>
            <p className="mt-2 opacity-90">
              Collaborative database and web development project
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Designed and populated a relational database with mock business
                data using MySQL/MariaDB.
              </li>
              <li>
                Integrated PHP and SQL queries to display inventory and support
                customer purchasing functionality.
              </li>
              <li>
                Collaborated in a team environment using GitHub for version
                control and project coordination.
              </li>
            </ul>
            <a
              href="https://github.com/adrimivas/salvage_reseller"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block underline font-medium"
            >
              View GitHub Repository
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium">MoneyApp</h3>
            <p className="mt-2 opacity-90">Collaborative software project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Helped develop a financial decision-support app that compares
                debt payoff versus investing.
              </li>
              <li>
                Collaborated using shared documents, Discord, and a Gantt chart
                to organize development.
              </li>
            </ul>
            <a
              href="https://github.com/adrimivas/appdev_final"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block underline font-medium"
            >
              View GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
