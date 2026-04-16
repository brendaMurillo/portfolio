import Link from "next/link";
import { projects } from "../../data/projects";

export default function PortfolioPage() {
  return (
    <div className="page-fade flex flex-col items-center gap-12 py-20">
      <section className="card max-w-3xl w-full text-center">
        <h1 className="text-4xl font-semibold">Portfolio</h1>
        <p className="mt-4 opacity-90">
          A collection of projects highlighting my work in programming,
          data science, research, and software development.
        </p>
      </section>

      <section className="max-w-6xl w-full grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="card block transition hover:-translate-y-1"
          >
            <div className="portfolio-image-frame">
              <img
                src={project.image}
                alt={project.title}
                className={
                  project.imageFit === "contain"
                    ? "portfolio-image portfolio-image-contain"
                    : "portfolio-image portfolio-image-cover"
                }
              />
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-center">
              {project.title}
            </h2>

            <p className="mt-3 text-center opacity-80 leading-relaxed">
              {project.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}