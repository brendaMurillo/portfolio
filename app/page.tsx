"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [showSecondFront, setShowSecondFront] = useState(false);

  return (
    <div className="page-fade">
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
            This portfolio highlights selected projects, writing, and work
            that reflect my experience in computer science.
          </p>

          <button
            type="button"
            className="photo-stack-button"
            onClick={() => setShowSecondFront((prev) => !prev)}
            aria-label="Swap profile photos"
          >
            <div className="photo-stack">
              <img
                src="/IMG_1092.jpg"
                alt="Brenda Viviana Murillo"
                className={`stack-photo stack-photo-main ${
                  showSecondFront ? "stack-back" : "stack-front"
                }`}
              />

              <img
                src="/presentation.png"
                alt="Brenda Viviana Murillo presentation photo"
                className={`stack-photo stack-photo-second ${
                  showSecondFront ? "stack-front" : "stack-back"
                }`}
              />
            </div>
          </button>

          <p className="photo-hint">Tap the photo to switch images.</p>

          <div className="hero-links">
            <Link href="/about">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}