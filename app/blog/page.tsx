import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPage() {
  return (
    <div className="page-fade flex flex-col items-center gap-12 py-20">
      <section className="card max-w-4xl w-full text-center blog-hero">
        <p className="blog-kicker">WRITING & REFLECTIONS</p>

        <h1 className="text-4xl font-semibold">Blog</h1>

        <p className="mt-4 opacity-90 leading-relaxed">
          Reflections on my growth in computer science, data analytics,
          research, software development, and machine learning.
        </p>

        <p className="mt-4 opacity-80 leading-relaxed">
          I use this space to document what I am learning, explain project
          decisions, and reflect on experiences such as research, workshops,
          technical projects, and career development.
        </p>
      </section>

      <section className="card max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center">
          Featured Topics
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3 text-center">
          <div className="rounded-2xl border border-white/15 p-5">
            <h3 className="font-semibold">Data Analytics</h3>
            <p className="mt-2 text-sm opacity-80">
              Dashboards, visualization, data cleaning, and insights.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 p-5">
            <h3 className="font-semibold">Machine Learning</h3>
            <p className="mt-2 text-sm opacity-80">
              Predictive modeling, research, and model evaluation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 p-5">
            <h3 className="font-semibold">Project Growth</h3>
            <p className="mt-2 text-sm opacity-80">
              Lessons from coding, teamwork, and technical problem solving.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl w-full flex flex-col gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card block blog-card transition hover:-translate-y-1"
          >
            <div className="blog-meta-row">
              <span className="blog-badge">{post.category}</span>

              <span className="text-sm opacity-75">
                {post.date} • {post.readTime}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>

            <p className="mt-4 opacity-90 leading-relaxed">{post.excerpt}</p>

            <p className="mt-5 blog-read-more">Read post →</p>
          </Link>
        ))}
      </section>
    </div>
  );
}