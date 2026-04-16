import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isRProject = project.slug === "r-for-data-science";

  return (
    <div className="page-fade flex flex-col items-center gap-10 py-20">
      <section className="card max-w-4xl w-full">
        <Link href="/portfolio" className="underline font-medium">
          ← Back to Portfolio
        </Link>

        <div className="portfolio-detail-image-frame mt-6">
          <img
            src={project.image}
            alt={project.title}
            className={
              project.imageFit === "contain"
                ? "portfolio-detail-image portfolio-image-contain"
                : "portfolio-detail-image portfolio-image-cover"
            }
          />
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-4xl font-semibold">{project.title}</h1>
            <span className="text-sm opacity-80">{project.status}</span>
          </div>

          <p className="mt-6 opacity-90 leading-relaxed">
            {project.longDescription}
          </p>

  
          {isRProject && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">
                What I’m Currently Working On
              </h2>

              <ul className="mt-4 list-disc pl-6 opacity-90 leading-relaxed space-y-2">
                <li>
                  Practicing data cleaning and transformation using real-world
                  datasets in R.
                </li>
                <li>
                  Exploring data visualization techniques using libraries like
                  ggplot2.
                </li>
                <li>
                  Learning how to analyze and interpret data through statistical
                  methods.
                </li>
                <li>
                  Comparing how R and Python are used in different data science
                  workflows.
                </li>
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.github || project.pdf) && (
            <div className="mt-8 flex flex-wrap gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  View GitHub Repository
                </a>
              )}

              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  View Paper PDF
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}