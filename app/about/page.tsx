import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-12">
      <section className="card">
        <h1 className="text-4xl font-semibold">Full Name</h1>
        <p className="mt-2 text-[var(--text)]">Professional Title / Occupation</p>
        <p className="mt-6 opacity-90">
          Short description (2–4 sentences). Placeholder.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/portfolio" className="underline">
            View Portfolio
          </Link>
          <Link href="/resume" className="underline">
            Resume
          </Link>
          <Link href="/contact" className="underline">
            Contact
          </Link>
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <ul className="mt-3 list-disc pl-5">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}