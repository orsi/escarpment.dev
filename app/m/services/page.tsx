export default function ServicesPage() {
  const services = [
    {
      title: "Home Renovations",
      description: "From kitchens and baths to whole-home transformations, we make every renovation feel intentional, polished, and built to last.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Flooring & Tile",
      description: "We install hardwood, luxury vinyl, tile, and ceramic surfaces with precision and clean finishing details.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Showers & Wet Areas",
      description: "Custom shower builds, waterproofing, and upscale tile work that bring comfort and style to everyday routines.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Drywall & Finishing",
      description: "Seamless drywall repairs, new installs, texturing, and prep work for a flawless finish before paint goes on.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Painting & Trim",
      description: "Interior and exterior painting, cabinet refreshes, trim details, and color consultations that complete the look.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Property Buying & Selling Support",
      description: "We help homeowners and investors assess, prepare, and move through property transactions with practical guidance.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="muted">Services</p>
            <h2>Renovation and contracting services for every stage of the project.</h2>
          </div>
          <p>Whether you need a quick upgrade or a full-scale remodel, our crew is equipped to handle it with reliable scheduling and careful workmanship.</p>
        </div>

        <div className="media-grid">
          <div className="media-card">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80" alt="Renovation work in progress" />
          </div>
          <div className="media-card">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80" alt="Finished bathroom renovation" />
          </div>
        </div>

        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {services.map((service) => (
            <article key={service.title} className="card image-card">
              <img src={service.image} alt={service.title} />
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
