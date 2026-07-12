import Link from "next/link";

const highlights = [
  {
    title: "Residential renovations",
    text: "Modern upgrades and classic improvements tailored to the way you live.",
  },
  {
    title: "Contracting expertise",
    text: "Skilled crews for flooring, showers, drywall, painting, trim, and more.",
  },
  {
    title: "Property guidance",
    text: "Support for buyers and sellers who need reliable, hands-on renovation insight.",
  },
];

const stats = [
  { value: "20 years", label: "Experience in the trade" },
  { value: "5+", label: "Core services offered" },
  { value: "Local", label: "Projects rooted in the community" },
  { value: "Tailored", label: "Plans for each property" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="muted">Renovations • Construction • Property Support</p>
            <h1>Reliable craftsmanship for renovations, remodeling, and everything in between.</h1>
            <p>
              Northstar Renovations & Construction helps homeowners and property owners transform their spaces with thoughtful planning, quality finishes, and dependable project support.
            </p>
            <div className="hero-actions">
              <Link href="/m/services" className="btn btn-primary">Explore services</Link>
              <Link href="/m/contact" className="btn btn-secondary">Get a quote</Link>
            </div>
          </div>
          <div className="hero-media-card">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" alt="Modern kitchen renovation" />
            <div className="hero-media-copy">
              <h3>Recent project spotlight</h3>
              <p>Kitchen and bath transformation with warm finishes and modern detail.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="muted">Overview</p>
              <h2>From simple updates to full-scale transformations, we do the work that makes homes feel better every day.</h2>
            </div>
            <p>We bring a practical, detail-driven approach to every project, whether it is a quick refresh, a luxury bath upgrade, or a complete home renovation.</p>
          </div>

          <div className="card-grid">
            {highlights.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="media-grid">
            <div className="media-card">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80" alt="Bright interior renovation" />
            </div>
            <div className="media-card">
              <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80" alt="Bathroom update with tile and fixtures" />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: "var(--surface-alt)" }}>
        <div className="container two-col">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1"
              title="Renovation project overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div>
            <p className="muted">Featured work</p>
            <h2>See how we turn rough spaces into refined, functional homes.</h2>
            <p>From foundational work to final trim, our team keeps projects moving with care and precision.</p>
            <ul className="list">
              <li>Hands-on project coordination from planning through completion</li>
              <li>Clean, professional finishes that feel polished and lasting</li>
              <li>Flexible support for both cosmetic refreshes and larger transformations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="muted">Why clients choose us</p>
              <h2>Clear communication, dependable crews, and carefully finished work.</h2>
            </div>
          </div>
          <div className="stats-row">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-badge">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
