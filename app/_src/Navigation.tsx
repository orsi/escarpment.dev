"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const shrink = hasScrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY >= 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full text-slate-50 transition duration-300 ${open || shrink ? "bg-primary-dark/95" : ""} `}
    >
      <div
        className={`relative mx-auto max-w-7xl items-center justify-between px-6 sm:px-8 md:flex`}
      >
        <div
          className={`flex h-(--height-nav) items-center justify-between transition-[height] duration-500 ${shrink ? "h-(--height-nav-collapsed)" : ""}`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Escarpment home"
          >
            <Logo
              className={`text-secondary-main transition-[width] duration-500 sm:ml-10 ${shrink ? "w-10" : "w-20 sm:w-40"}`}
            />
          </Link>
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-[d] duration-150"
                stroke="white"
                d={open ? "M2 2 L20 18" : "M2 2 L20 2"}
              />
              <path
                className="transition-[d] duration-150"
                stroke="white"
                d={open ? "M2 10 L2 10" : "M2 10 L20 10"}
              />
              <path
                className="transition-[d] duration-150"
                stroke="white"
                d={open ? "M2 18 L20 2" : "M2 18 L20 18"}
              />
            </svg>
          </button>
        </div>
        <nav
          style={{
            interpolateSize: "allow-keywords",
          }}
          className={`flex flex-col gap-2 overflow-hidden transition-[height] ${open ? "h-45" : "h-0"} sm:ml-10 md:h-auto md:flex-row`}
        >
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="md:hover:bg-primary-light/10 mt-2 py-1 transition duration-250 last:mb-8 md:m-0 md:rounded-full md:px-6 md:last:mb-0"
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
