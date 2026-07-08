
export default function ResumePage() {
  return (
    <div className="page-fade flex flex-col items-center gap-10 py-20">
      <section className="card max-w-4xl w-full text-center">
        <h1 className="text-4xl font-semibold">Resume</h1>
        <p className="mt-4 opacity-90">Brenda Viviana Murillo</p>

        <div className="mt-6">
          <a href="/resume.pdf" download className="underline font-medium">
            Download Condensed Resume (PDF)
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
            href="https://bmurillo-portfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Portfolio
          </a>
        </div>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Professional Summary
        </h2>

        <p className="mt-6 opacity-90 leading-relaxed text-center">
          Computer Science student at California State University, Bakersfield
          with experience in data analytics, AI data evaluation, statistical
          modeling, dashboard development, database systems, research, and
          software projects. Skilled in Python, SQL, R, Excel, Tableau, Java,
          JavaScript, and PHP, with hands-on experience cleaning datasets,
          analyzing trends, building visualizations, engineering predictive
          features, and supporting machine learning workflows.
          Seeking data analyst, data science, or machine learning internship
          opportunities.
        </p>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Technical Skills
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium">Programming Languages</h3>
            <p className="mt-2 opacity-90">
              Python, SQL, R, Java, JavaScript, C, PHP
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Data Science & Analytics</h3>
            <p className="mt-2 opacity-90">
              Data cleaning, data visualization, statistical analysis, EDA,
              regression, clustering, predictive modeling, feature engineering,
              hypothesis testing, model evaluation
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Libraries & Frameworks</h3>
            <p className="mt-2 opacity-90">
              pandas, NumPy, scikit-learn, XGBoost, Matplotlib, OpenCV, dplyr,
              ggplot2, React Native
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Tools & Technologies</h3>
            <p className="mt-2 opacity-90">
              Tableau, Excel, GitHub, VS Code, MySQL, MariaDB, MongoDB
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Business Software</h3>
            <p className="mt-2 opacity-90">
              Microsoft Word, Excel, PowerPoint
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
              GPA: 3.65/4.0 | August 2025 – May 2027 Expected
            </p>
            <p className="mt-2 opacity-90 leading-relaxed">
              Relevant coursework includes Artificial Intelligence, Database
              Systems, Software Engineering, Data Structures, Linear Algebra,
              and App Development.
            </p>
            <p className="mt-2 opacity-90 leading-relaxed">
              Activity: Vice President, Robotics Club.
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
              Data Analyst Workshop — Data Analyst Trainee
            </h3>
            <p className="mt-2 opacity-90">
              Lancaster, CA | June 2026 
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Create 10+ dashboards and visualizations using Tableau and
                Excel to communicate key insights.
              </li>
              <li>
                Use SQL and Python to clean, validate, and analyze datasets for
                trends and decision-making.
              </li>
              <li>
                Perform data preprocessing and validation across 20+ workshop
                exercises using Python, NumPy, and pandas.
              </li>
              <li>
                Identify and correct inconsistencies to improve dataset quality
                and analysis reliability.
              </li>
              <li>
                Analyze datasets with 15000+ records using Excel, SQL, and Python
                to identify trends.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Handshake AI — AI Data Evaluator
            </h3>
            <p className="mt-2 opacity-90">Remote | February 2026 – Present</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Evaluate multi-format datasets, including text, audio, and
                visual content, to support machine learning model training.
              </li>
              <li>
                Contribute to data validation processes that ensure consistency
                and accuracy across training inputs.
              </li>
              <li>
                Validate annotations and identify inconsistencies to support
                high-quality AI model development.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">Jamba Juice — Manager</h3>
            <p className="mt-2 opacity-90">
              Palmdale, CA | October 2022 – Present
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
                Manage financial data including cash deposits and daily
                reporting for upper management.
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
          Technical Projects
        </h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-xl font-medium">
              Vehicle Emissions Data Analysis
            </h3>
            <p className="mt-2 opacity-90">Independent data analytics project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Analyzed 43,000+ vehicle records using correlation,
                chi-square, regression, and other statistical methods.
              </li>
              <li>
                Created data visualizations in Excel to identify emission
                trends, correlations, and key environmental factors.
              </li>
            </ul>
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
                Developed an administrative dashboard for inventory updates and
                operational analytics.
              </li>
              <li>
                Collaborated in a team environment using GitHub for version
                control and project coordination.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Predicting Employee Turnover Using Machine Learning
            </h3>
            <p className="mt-2 opacity-90">
              SIGTSE paper in preparation
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Developed Logistic Regression, Random Forest, and XGBoost
                models on a 15,000+ record employee dataset.
              </li>
              <li>
                Engineered predictive features and tuned hyperparameters to
                improve model performance.
              </li>
              <li>
                Evaluated models using ROC-AUC, precision, recall, F1-score,
                and confusion matrices.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Statistical Data Analysis in R
            </h3>
            <p className="mt-2 opacity-90">Ongoing analytics project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Perform exploratory data analysis using R for data cleaning,
                transformation, and visualization.
              </li>
              <li>
                Build data pipelines to process and analyze datasets using
                statistical techniques.
              </li>
              <li>
                Apply regression and clustering techniques, including k-means
                and hierarchical clustering, to analyze patterns and support
                insights.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">MoneyApp</h3>
            <p className="mt-2 opacity-90">Collaborative software project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Help develop a financial decision-support app that compares debt
                payoff versus investing.
              </li>
              <li>
                Collaborate using shared documents, Discord, and a Gantt chart
                to organize development.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Online Shopping Cart Simulator
            </h3>
            <p className="mt-2 opacity-90">
              Final project for Programming Languages
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Designed and implemented an object-oriented shopping cart using
                inheritance and polymorphism.
              </li>
              <li>
                Built dynamic customer filtering based on a provided budget.
              </li>
              <li>
                Added shipping cost functionality through method-based logic.
              </li>
              <li>Presented the project through an oral walkthrough.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">UCRL Showcase</h3>
            <p className="mt-2 opacity-90">Project presentation</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>Presented to 50+ students and faculty about an IoT project.</li>
              <li>Demonstrated a smart watering system using ESP32.</li>
              <li>
                Explained real-time data monitoring and control through a web
                interface.
              </li>
              <li>
                Designed a device that utilizes an API to provide plant
                identification.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">Humanoid Robot Research</h3>
            <p className="mt-2 opacity-90">Collaborative research project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Contribute to a humanoid robotics paper focused on research,
                technical writing, and project development.
              </li>
              <li>
                Collaborate through shared Word documents and Discord to draft,
                revise, and organize project ideas.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
