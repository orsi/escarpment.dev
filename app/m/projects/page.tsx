export default function ProjectsPage() {
  const projects = [
    {
      title: "Historic Home Revival",
      blurb: "A full kitchen and bath remodel paired with restored hardwood floors and new lighting details.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Modern Basement Conversion",
      blurb: "A family-friendly basement buildout featuring custom tile, drywall finishes, and a bright entertainment space.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Whole-Home Refresh",
      blurb: "Interior painting, new flooring, upgraded showers, and refreshed trim throughout a dated property.",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="muted">Projects</p>
            <h2>Recent work that blends practical upgrades with elevated design.</h2>
          </div>
          <p>From cosmetic refreshes to large-scale renovations, these projects show the range of work we bring to homes and properties.</p>
        </div>

        <div className="video-card" style={{ marginBottom: "1.5rem" }}>
          <iframe
            src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0"
            title="Before and after renovation walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="card image-card">
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
