import Link from "next/link";
import type { ReactNode } from "react";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Northstar Renovations & Construction",
  description: "Full-service renovation and construction company for homes, remodels, and property projects.",
};

export default function MLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="mt-auto bg-primary-dark text-white px-6 py-9 text-footer-text sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Northstar Renovations</h3>
            <p className="text-sm leading-7 text-footer-text/80">
              Trusted craftsmanship for homes, properties, and complete remodeling projects.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-base font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-footer-text/80">
              <li><Link href="/m" className="hover:text-accent-dark">Home</Link></li>
              <li><Link href="/m/services" className="hover:text-accent-dark">Services</Link></li>
              <li><Link href="/m/about" className="hover:text-accent-dark">About</Link></li>
              <li><Link href="/m/projects" className="hover:text-accent-dark">Projects</Link></li>
              <li><Link href="/m/contact" className="hover:text-accent-dark">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-base font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-footer-text/80">
              <li>221 Market Street</li>
              <li>Denver, CO 80202</li>
              <li>hello@northstarreno.com</li>
              <li>(303) 555-0148</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-base font-semibold">Follow</h4>
            <ul className="space-y-2 text-sm text-footer-text/80">
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent-dark">Instagram</a></li>
              <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-accent-dark">Facebook</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent-dark">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-footer-text/15 pt-4 text-sm text-footer-text/70">
          <span>© 2026 Northstar Renovations & Construction</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/m/privacy" className="hover:text-accent-dark">Privacy Policy</Link>
            <Link href="/m/terms" className="hover:text-accent-dark">Terms of Use</Link>
            <Link href="/m/accessibility" className="hover:text-accent-dark">Accessibility</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
