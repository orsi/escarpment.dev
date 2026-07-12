export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container two-col">
        <div>
          <p className="muted">About Northstar</p>
          <h2>Built on craftsmanship, care, and a commitment to doing things right.</h2>
          <p>
            Northstar Renovations & Construction was founded by a small team of tradespeople who believed that great homes deserve thoughtful planning and dependable execution. Over the past 20 years, the company has grown from a local remodeling crew into a trusted partner for homeowners, investors, and property owners across the region.
          </p>
          <p>
            We combine hands-on construction experience with a simple mission: make each project feel seamless, clear, and rewarding from the first conversation to the final walkthrough.
          </p>
        </div>
        <div className="about-stack">
          <div className="image-card">
            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80" alt="Construction team at work" />
            <div className="card-content">
              <h3>Serving Ontario homes with care</h3>
              <p>From planning to finishing details, our team brings a steady, practical approach to every property.</p>
            </div>
          </div>
          <div className="quote-card">
            <h3>Our values</h3>
            <ul className="list">
              <li>Clear communication from start to finish</li>
              <li>Respectful, organized job sites</li>
              <li>Quality finishes that stand the test of time</li>
              <li>Flexible support for renovations, repairs, and property transitions</li>
            </ul>
            <div className="stats-row">
              <div className="stat-badge">
                <strong>20+</strong>
                <span>Years serving clients</span>
              </div>
              <div className="stat-badge">
                <strong>Ontario</strong>
                <span>Based in the region</span>
              </div>
              <div className="stat-badge">
                <strong>100%</strong>
                <span>Client-focused approach</span>
              </div>
              <div className="stat-badge">
                <strong>All-in</strong>
                <span>Renovation support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
