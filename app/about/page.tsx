import PythonRunner from "@/components/PythonRunner";

export default function AboutPage() {
  return (
    <div className="page-fade flex flex-col items-center gap-16 py-20">
      <section className="card max-w-3xl text-center">
        <h1 className="text-4xl font-semibold">Brenda Viviana Murillo</h1>

        <p className="mt-6 opacity-90 leading-relaxed">
          I am a Computer Science student at California State University,
          Bakersfield with interests in data science, machine learning,
          data analytics, and cybersecurity. My work focuses on building
          meaningful projects that combine technical problem solving with
          real-world applications.
        </p>

        <p className="mt-6 opacity-90 leading-relaxed">
          I have hands-on experience with Python, SQL, R, Java, JavaScript,
          Tableau, Excel, database systems, statistical analysis, dashboard
          development, and machine learning workflows. Through academic
          projects, research, and data-focused experience, I enjoy turning
          datasets into clear insights and practical solutions.
        </p>

        <p className="mt-6 opacity-90">
          Years of experience: 2–3 years as a student and project contributor
        </p>

        <div className="mt-8">
          <a href="/resume.pdf" download className="underline font-medium">
            Download Resume (PDF)
          </a>
        </div>
      </section>

      <section className="card max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Specializations</h2>

        <ul className="mt-6 list-disc text-left pl-6 opacity-90 inline-block leading-relaxed">
          <li>Data Science and Data Analytics</li>
          <li>Machine Learning and Predictive Modeling</li>
          <li>Database Systems and SQL</li>
          <li>Dashboard Development and Data Visualization</li>
          <li>Problem Solving and Programming Fundamentals</li>
          <li>Cybersecurity Interest and Technical Research</li>
        </ul>
      </section>

      <section className="card max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Skills Overview</h2>

        <p className="mt-6 opacity-90 leading-relaxed">
          My technical experience includes programming, working with modern
          development tools, cleaning and analyzing datasets, building
          visualizations, designing relational databases, and developing
          projects that demonstrate practical skills in computer science.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 text-left">
          <div>
            <h3 className="text-xl font-medium">Programming</h3>
            <p className="mt-2 opacity-90">
              Python, SQL, R, Java, JavaScript, C, PHP
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Data Science</h3>
            <p className="mt-2 opacity-90">
              EDA, statistical analysis, regression, hypothesis testing,
              feature engineering, predictive modeling
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Libraries</h3>
            <p className="mt-2 opacity-90">
              pandas, NumPy, scikit-learn, XGBoost, Matplotlib, dplyr, ggplot2
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Tools</h3>
            <p className="mt-2 opacity-90">
              Tableau, Excel, GitHub, VS Code, MySQL, MariaDB, MongoDB
            </p>
          </div>
        </div>

      
      </section>

      <section className="card max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Leadership & Activities</h2>

        <p className="mt-6 opacity-90 leading-relaxed">
          I serve as Vice President of the Robotics Club, where I collaborate
          with other students on technical projects, research ideas, and
          hands-on development. I value teamwork, communication, technical
          writing, and continuous learning.
        </p>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Python Playground
        </h2>

        <div className="mt-8 flex justify-center">
  <img
    src="/python.png"
    alt="Python programming skills graphic"
    className="about-photo"
  />
</div>

        <p className="mt-4 opacity-90 text-center">
          Try editing and running a simple Python program directly in the
          browser.
        </p>

        <div className="mt-6">
          <PythonRunner />
        </div>
      </section>
    </div>
  );
}