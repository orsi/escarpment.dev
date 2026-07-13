"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/m/services", label: "Services" },
  { href: "/m/about", label: "About" },
  { href: "/m/projects", label: "Projects" },
  { href: "/m/blog", label: "Blog" },
  { href: "/m/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const shrink = hasScrolled || pathname !== "/m";

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-(--height-nav) w-full max-w-7xl mx-auto text-slate-50 transition-[height,background-color] duration-500 ${shrink ? "bg-primary-dark/95 h-(--height-nav-collapsed)" : ""}`}
    >
      <div className="relative flex h-full items-center justify-between px-6 sm:px-8">
        <Link href="/m" onClick={() => setOpen(false)}>
          <Logo
            className={`text-secondary-main sm:ml-10 transition-[width] duration-500 ${shrink ? "w-10" : "w-20 sm:w-40"}`}
          />
        </Link>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>
        <nav
          className={`absolute left-0 right-0 top-full flex-col gap-2  px-4 sm:px-6 py-4 shadow-lg md:static md:flex md:flex-row md:gap-2 md:bg-transparent md:p-0 md:shadow-none ${open ? "flex" : "hidden"} ${shrink ? "bg-primary-dark/95" : "bg-black/80"}`}
        >
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 md:text-inherit"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
