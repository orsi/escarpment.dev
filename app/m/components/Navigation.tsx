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
      <Link
        key={link.href}
        href={link.href}
        className={isActive
          ? "rounded-full bg-accent px-3 py-2 font-semibold text-card"
          : "rounded-full px-3 py-2 font-semibold text-muted transition-colors hover:bg-accent hover:text-card"
        }
        onClick={() => setOpen(false)}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/m" className="text-lg font-bold uppercase tracking-widest text-text" onClick={() => setOpen(false)}>
          Northstar Renovations
        </Link>
        <button
          className="inline-flex items-center justify-center rounded-full border border-border bg-surface-alt p-2 text-lg md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`absolute left-0 right-0 top-full flex-col gap-2 border-b border-border bg-card px-4 py-4 shadow-sm md:static md:flex md:flex-row md:items-center md:border-none md:bg-transparent md:p-0 md:shadow-none ${open ? "flex" : "hidden"}`}>
          {renderedLinks}
        </nav>
      </div>
    </header>
  );
}
