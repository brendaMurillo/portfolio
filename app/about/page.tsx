export default function AboutPage() {
  return (
    <div className="page-fade flex flex-col items-center gap-16 py-20">
      <section className="card max-w-3xl text-center">
        <h1 className="text-4xl font-semibold">Brenda Viviana Murillo</h1>

        <p className="mt-6 opacity-90 leading-relaxed">
          I am a computer science student interested in data science,
          machine learning, and cybersecurity. My focus is to create
          meaningful projects that combine technical knowledge with
          real-world applications.
        </p>

        <p className="mt-6 opacity-90">
          Years of experience: 2–3 years as a student
        </p>

        <div className="mt-8">
          <a href="/resume.pdf" download className="underline font-medium">
            Download Resume (PDF)
          </a>
        </div>
      </section>

      <section className="card max-w-md text-center">
        <h2 className="text-2xl font-semibold">Specializations</h2>

        <ul className="mt-6 list-disc text-left pl-6 opacity-90 inline-block">
          <li>Data Science</li>
          <li>Problem Solving</li>
          <li>Programming Fundamentals</li>
        </ul>
      </section>

      <section className="card max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Skills Overview</h2>

        <p className="mt-6 opacity-90 leading-relaxed">
          My technical experience includes programming, working with modern
          development tools, and building projects that demonstrate practical
          skills in the fields I am interested in.
        </p>

        <div className="mt-6 flex justify-center">
          <img
            src="/python.png"
            alt="Brenda Murillo"
            className="about-photo"
          />
        </div>
      </section>
    </div>
  );
}