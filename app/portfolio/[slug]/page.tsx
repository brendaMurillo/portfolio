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

          {project.github && (
            <div className="mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                View GitHub Repository
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}