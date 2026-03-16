import Link from "next/link";
import Image from "next/image";
import { projects } from "../../lib/projects";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col items-center gap-12">
      <section className="card">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <p className="mt-4 opacity-90">
          Projects rendered dynamically from structured data.
        </p>
      </section>

      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="card">
            <Image
              src={p.image}
              alt={p.title}
              width={1200}
              height={700}
              className="h-auto w-full rounded-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 opacity-90">{p.description}</p>

            <p className="mt-4 text-sm opacity-90">
              Tech: {p.techStack.join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}