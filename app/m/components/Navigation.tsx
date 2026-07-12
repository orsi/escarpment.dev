'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/m", label: "Home" },
  { href: "/m/services", label: "Services" },
  { href: "/m/about", label: "About" },
  { href: "/m/projects", label: "Projects" },
  { href: "/m/blog", label: "Blog" },
  { href: "/m/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const renderedLinks = links.map((link) => {
    const isActive = pathname === link.href || (link.href === "/m" && pathname === "/m/");

    return (
      <Link key={link.href} href={link.href} className={isActive ? "active" : ""} onClick={() => setOpen(false)}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className="top-nav">
      <Link href="/m" className="nav-brand">
        Northstar Renovations
      </Link>
      <button className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
        ☰
      </button>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {renderedLinks}
      </nav>
    </header>
  );
}
