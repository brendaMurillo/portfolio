import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-band" />

      <div className="hero-inner">
        <p className="hero-label">PORTFOLIO 2026</p>

        <h1 className="hero-title">
          BRENDA VIVIANA <br />
          MURILLO
        </h1>

        <p className="hero-subtitle">Computer Science Student</p>

        <p className="hero-description">
          This portfolio highlights selected projects, writing, and work that reflect
          my experience in computer science while also sharing a bit about me.
          Each piece demonstrates my knowledge across various domains and the
          skills I have developed through academic work and practical projects.
        </p>

        {/* Profile Image */}
        <div className="profile-wrapper">
          <Image
            src="/IMG_1092.jpg"
            alt="Brenda Viviana Murillo"
            width={260}
            height={260}
            className="profile-image"
          />
        </div>

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