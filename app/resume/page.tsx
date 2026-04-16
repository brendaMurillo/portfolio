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
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Professional Summary
        </h2>

        <p className="mt-6 opacity-90 leading-relaxed text-center">
          Computer Science student with experience in programming, database
          projects, research, and team-based development. Strong foundation in
          Java, SQL, JavaScript, and React Native, with growing interests in
          artificial intelligence, data science, robotics, and practical
          software applications. Experienced in collaborative project work using
          shared documents, Discord, and structured planning tools.
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
              C, SQL, Python, Java, JavaScript, R, React Native, PHP
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Developer Tools</h3>
            <p className="mt-2 opacity-90">
              GitHub, Visual Studio Code, Discord
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
              August 2025 – Present | Anticipated Graduation: May 2027
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Antelope Valley College</h3>
            <p className="mt-2 opacity-90">
              Associate of Liberal Arts, Sciences, Math and Science
            </p>
            <p className="opacity-90">Completed: May 2023</p>
            <p className="mt-2 opacity-90 leading-relaxed">
              Relevant coursework includes programming languages, discrete
              structures, computer architecture, assembly language programming,
              software engineering, database systems, Java programming, and C
              programming.
            </p>
          </div>
        </div>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Experience (Work / Projects / Leadership)
        </h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-xl font-medium">Jamba Juice — Manager</h3>
            <p className="mt-2 opacity-90">June 2021 – Present</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Provide technical support for troubleshooting offline
                connections.
              </li>
              <li>
                Manage cash deposits and verify transaction accuracy while
                reporting to upper management.
              </li>
              <li>
                Collaborate with team members to keep daily operations
                organized and efficient.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">"Project Hedgehog"</h3>
            <p className="mt-2 opacity-90">February 2026 – Present</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Evaluate audio, visual, and text content to help train AI
                systems across multiple formats.
              </li>
              <li>
                Maintain quality scores to support accurate and effective
                results.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">R for Data Science Project</h3>
            <p className="mt-2 opacity-90">Ongoing personal project</p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Actively developing skills in R for data analysis, visualization,
                and statistical exploration.
              </li>
              <li>
                Working with datasets to practice data cleaning, transformation,
                and interpretation using R tools and libraries.
              </li>
              <li>
                Strengthening understanding of how R complements Python in data
                science workflows and analytical tasks.
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
            <h3 className="text-xl font-medium">Salvage Reseller</h3>
            <p className="mt-2 opacity-90">
              Group final project for Database Design and Implementation
            </p>
            <ul className="mt-3 list-disc pl-6 opacity-90 leading-relaxed">
              <li>
                Implemented a database with mock data and displayed products
                using SQL queries connected through PHP.
              </li>
              <li>Created a website interface for customer purchasing.</li>
              <li>
                Built an employee dashboard for analytics and inventory updates.
              </li>
              <li>
                Collaborated in a team environment using GitHub for version
                control.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">UCRL Showcase</h3>
            <p className="mt-2 opacity-90">Project Presentation</p>
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
        </div>
      </section>
    </div>
  );
}