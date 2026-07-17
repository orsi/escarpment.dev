export default function ContactPage() {
  return (
    <section className="bg-white px-6 pt-32 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="mb-2 text-sm uppercase tracking-widest">
            Get a quote
          </p>
          <h2 className="mb-4 text-3xl font-semibold">
            Tell us about your project and we’ll follow up with a tailored
            response.
          </h2>
          <p className="leading-7">
            We're ready to help with renovations, home prep, flooring, ceramics,
            showers, drywalling, painting, and more.
          </p>
        </div>
        <div className="rounded border border-primary-dark/10 p-6 shadow-lg">
          <form className="grid gap-4">
            <label className="grid gap-2 font-semibold">
              Name
              <input
                className="w-full rounded border border-primary-dark/10 px-3 py-3"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 font-semibold">
              Email
              <input
                className="w-full rounded border border-primary-dark/10 px-3 py-3"
                type="email"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 font-semibold">
              Phone
              <input
                className="w-full rounded border border-primary-dark/10 px-3 py-3"
                placeholder="(555) 555-5555"
              />
            </label>
            <label className="grid gap-2 font-semibold">
              Project type
              <select
                className="w-full rounded border border-primary-dark/10 px-3 py-3"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>Home renovation</option>
                <option>Flooring or tile</option>
                <option>Bathroom or shower</option>
                <option>Drywall or painting</option>
                <option>Buying or selling support</option>
              </select>
            </label>
            <label className="grid gap-2 font-semibold">
              Project details
              <textarea
                className="min-h-30 w-full rounded border border-primary-dark/10 px-3 py-3"
                placeholder="Share a little about your goals, timeline, and preferred scope."
              />
            </label>
            <button
              className="inline-flex rounded-full bg-primary-main px-6 py-3 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
              type="button"
            >
              Request a quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
