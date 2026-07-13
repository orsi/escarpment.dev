export default function ContactPage() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#64748b]">Get a quote</p>
          <h2 className="mb-4 text-3xl font-semibold text-[#1f2933]">Tell us about your project and we’ll follow up with a tailored response.</h2>
          <p className="text-[#64748b] leading-7">We’re ready to help with renovations, home prep, flooring, ceramics, showers, drywalling, painting, and more.</p>
        </div>
        <div className="rounded-[1.25rem] border border-[#e6dccf] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
          <form className="grid gap-4">
            <label className="grid gap-2 font-semibold text-[#1f2933]">
              Name
              <input className="w-full rounded-[0.8rem] border border-[#e6dccf] bg-white px-3 py-3" placeholder="Your name" />
            </label>
            <label className="grid gap-2 font-semibold text-[#1f2933]">
              Email
              <input className="w-full rounded-[0.8rem] border border-[#e6dccf] bg-white px-3 py-3" type="email" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 font-semibold text-[#1f2933]">
              Phone
              <input className="w-full rounded-[0.8rem] border border-[#e6dccf] bg-white px-3 py-3" placeholder="(555) 555-5555" />
            </label>
            <label className="grid gap-2 font-semibold text-[#1f2933]">
              Project type
              <select className="w-full rounded-[0.8rem] border border-[#e6dccf] bg-white px-3 py-3" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Home renovation</option>
                <option>Flooring or tile</option>
                <option>Bathroom or shower</option>
                <option>Drywall or painting</option>
                <option>Buying or selling support</option>
              </select>
            </label>
            <label className="grid gap-2 font-semibold text-[#1f2933]">
              Project details
              <textarea className="min-h-[120px] w-full rounded-[0.8rem] border border-[#e6dccf] bg-white px-3 py-3" placeholder="Share a little about your goals, timeline, and preferred scope." />
            </label>
            <button className="inline-flex rounded-full bg-[#c97d2a] px-5 py-3 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" type="button">Request a quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}
