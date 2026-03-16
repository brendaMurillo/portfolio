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