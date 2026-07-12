import Link from "next/link";
import Navigation from "./components/Navigation";
import "./site.css";

export const metadata = {
  title: "Northstar Renovations & Construction",
  description: "Full-service renovation and construction company for homes, remodels, and property projects.",
};

export default function MLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Navigation />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h3>Northstar Renovations</h3>
            <p>Trusted craftsmanship for homes, properties, and complete remodeling projects.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/m">Home</Link></li>
              <li><Link href="/m/services">Services</Link></li>
              <li><Link href="/m/about">About</Link></li>
              <li><Link href="/m/projects">Projects</Link></li>
              <li><Link href="/m/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>221 Market Street</li>
              <li>Denver, CO 80202</li>
              <li>hello@northstarreno.com</li>
              <li>(303) 555-0148</li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Northstar Renovations & Construction</span>
          <div className="footer-links">
            <Link href="/m/privacy">Privacy Policy</Link>
            <Link href="/m/terms">Terms of Use</Link>
            <Link href="/m/accessibility">Accessibility</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
