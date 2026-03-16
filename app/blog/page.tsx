import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPage() {
  return (
    <div className="page-fade flex flex-col items-center gap-12 py-20">
      <section className="card max-w-3xl w-full text-center blog-hero">
        <p className="blog-kicker">WRITING & REFLECTIONS</p>
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="mt-4 opacity-90">
          Reflections on projects, learning, research, and technical growth.
        </p>
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

            <p className="mt-4 opacity-90 leading-relaxed">
              {post.excerpt}
            </p>

            <p className="mt-5 blog-read-more">Read post →</p>
          </Link>
        ))}
      </section>
    </div>
  );
}