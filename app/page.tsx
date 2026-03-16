import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-band" />

      <div className="hero-inner">
        <p className="hero-label">DIGITAL MARKETING 2026</p>

        <h1 className="hero-title">FULL NAME</h1>

        <p className="hero-subtitle">Computer Science Student</p>

        <p className="hero-description">
          I create thoughtful, polished work with a focus on strategy,
          storytelling, and clean execution. This portfolio highlights selected
          projects, experience, and writing.
        </p>

        <div className="hero-links">
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </section>
  );
}