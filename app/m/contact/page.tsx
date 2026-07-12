export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="container two-col">
        <div>
          <p className="muted">Get a quote</p>
          <h2>Tell us about your project and we’ll follow up with a tailored response.</h2>
          <p>We’re ready to help with renovations, home prep, flooring, ceramics, showers, drywalling, painting, and more.</p>
        </div>
        <div className="quote-card">
          <form className="form-grid">
            <label>
              Name
              <input placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone
              <input placeholder="(555) 555-5555" />
            </label>
            <label>
              Project type
              <select defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Home renovation</option>
                <option>Flooring or tile</option>
                <option>Bathroom or shower</option>
                <option>Drywall or painting</option>
                <option>Buying or selling support</option>
              </select>
            </label>
            <label>
              Project details
              <textarea placeholder="Share a little about your goals, timeline, and preferred scope." />
            </label>
            <button className="btn btn-primary" type="button">Request a quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}
