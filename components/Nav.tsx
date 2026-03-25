 //Constants are defined once and reused in multiple pages
 //reusable navigation bar used across all pages. 
// client-side routing with Next.js which is dynamic page loading without reloading the entire application. 
 // It stores navigation links in a structured array and renders them dynamically using .map(). 
 // It also uses state to control a responsive hamburger menu for mobile devices, allowing users to toggle navigation visibiliity
 //A state is created inside a component, can change over time, and used for interactivity (buttons, forms, toggles)
 "use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container>
        <div className="site-nav">
          <Link href="/" className="site-logo" onClick={() => setMenuOpen(false)}>
            Brenda Viviana Murillo
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav-links ${menuOpen ? "open" : ""}`}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}