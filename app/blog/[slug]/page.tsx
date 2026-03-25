//uses .map() to render all posts and create links containing a unique slug for each entry.
//uses .find() to retrieve the corresponding post from structured data and display its content dynamically 
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../../data/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="page-fade flex flex-col items-center gap-10 py-20">
      <article className="card max-w-4xl w-full blog-post">
        <Link href="/blog" className="underline font-medium">
          ← Back to Blog
        </Link>

        <div className="mt-6">
          <span className="blog-badge">{post.category}</span>
        </div>

        <p className="mt-4 text-sm opacity-75">
          {post.date} • {post.readTime}
        </p>

        <h1 className="mt-3 text-4xl font-semibold">{post.title}</h1>

        <div className="blog-divider" />

        <div className="mt-8 space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index} className="opacity-90 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}