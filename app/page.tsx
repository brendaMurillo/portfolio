"use client";

import Link from "next/link";
import { useState } from "react";
import PythonRunner from "@/components/PythonRunner";

export default function HomePage() {
  const [frontIndex, setFrontIndex] = useState(0);

  const images = [
    {
      src: "/IMG_1092.jpg",
      alt: "Brenda Viviana Murillo at CSUB",
    },
    {
      src: "/roboclub.jpg",
      alt: "CSUB Antelope Valley Robotics Club group photo",
    },
    {
      src: "/humanoidrobo.jpeg",
      alt: "Tony Pi humanoid robot",
    },
    {
      src: "/presentation.png",
      alt: "Brenda Viviana Murillo presentation photo",
    },
    {
      src: "/dataWorkshop.jpg",
      alt: "CSUB Data Analytics Workshop group photo",
    },
    {
      src: "/edwards.jpeg",
      alt: "AV-Robotics Club STEM volunteer table at Edwards Air Force Base Red, White & Boom event",
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
            This portfolio highlights selected projects, writing, and work that
            reflect my experience in computer science, data analytics, research,
            and software development.
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

          

          <section className="card max-w-4xl w-full mt-14">
            <h2 className="text-2xl font-semibold text-center">
              Python Playground
            </h2>

            <p className="mt-4 opacity-90 text-center">
              Edit and run a simple Python program directly in the browser.
            </p>

            <div className="mt-6">
              <PythonRunner />
            </div>
          </section>

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