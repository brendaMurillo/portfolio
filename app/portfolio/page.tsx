import Link from "next/link";
import { projects } from "../../data/projects";

export default function PortfolioPage() {
  const orderedProjects = projects.sort((a, b) => {
    const priority = (slug: string) => {
      if (slug === "predicting-employee-turnover") return 1;
      if (slug === "data-analytics-workshop") return 2;
      if (slug === "salvage-reseller") return 3;
      if (slug === "money-app") return 4;
      if (slug === "secondary-analysis-research-paper") return 5;
      if (slug === "humanoid-robot") return 6;
      return 99;
    };

    return priority(a.slug) - priority(b.slug);
  });

  return (
    <div className="page-fade flex flex-col items-center gap-12 py-20">
      <section className="card max-w-3xl w-full text-center">
        <h1 className="text-4xl font-semibold">Portfolio</h1>
        <p className="mt-4 opacity-90">
          A collection of projects highlighting my work in programming,
          data science, research, and software development. Click on a project to learn more about it. 
        </p>
      </section>

      <section className="max-w-6xl w-full grid gap-8 md:grid-cols-2">
        {orderedProjects.map((project) => (
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