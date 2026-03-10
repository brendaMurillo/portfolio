import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">Brenda Murillo</h1>
      <p className="text-zinc-600">My personal site (Next.js + Tailwind).</p>

      <div className="flex flex-wrap gap-4">
        <Link className="underline" href="/about">About</Link>
        <Link className="underline" href="/resume">Resume</Link>
        <Link className="underline" href="/portfolio">Portfolio</Link>
        <Link className="underline" href="/blog">Blog</Link>
        <Link className="underline" href="/contact">Contact</Link>
      </div>
    </div>
  );
}