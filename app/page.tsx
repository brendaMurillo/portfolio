"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [frontIndex, setFrontIndex] = useState(0);

  const images = [
    {
      src: "/IMG_1092.jpg",
      alt: "Brenda Viviana Murillo",
    },
    {
      src: "/presentation.png",
      alt: "Brenda Viviana Murillo presentation photo",
    },
    {
      src: "/robotics.jpeg",
      alt: "Robotics project preview",
    },
  ];

  const handleNextPhoto = () => {
    setFrontIndex((prev) => (prev + 1) % images.length);
  };

  const frontImage = images[frontIndex];
  const backImage = images[(frontIndex + 1) % images.length];

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
            onClick={handleNextPhoto}
            aria-label="Tap photo to cycle through images"
          >
            <div className="photo-stack">
              <img
                src={backImage.src}
                alt={backImage.alt}
                className="stack-photo stack-photo-second stack-back"
              />

              <img
                src={frontImage.src}
                alt={frontImage.alt}
                className="stack-photo stack-photo-main stack-front"
              />
            </div>
          </button>

          <p className="photo-hint">Tap the photo to cycle through images.</p>

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