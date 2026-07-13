export default function AboutPage() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#64748b]">About Escarpment</p>
          <h2 className="mb-4 text-3xl font-semibold text-[#1f2933]">Built on craftsmanship, care, and a commitment to doing things right.</h2>
          <p className="mb-4 text-[#64748b] leading-7">
            Escarpment Developments was founded by a small team of tradespeople who believed that great homes deserve thoughtful planning and dependable execution. Over the past 20 years, the company has grown from a local remodeling crew into a trusted partner for homeowners, investors, and property owners across the region.
          </p>
          <p className="text-[#64748b] leading-7">
            We combine hands-on construction experience with a simple mission: make each project feel seamless, clear, and rewarding from the first conversation to the final walkthrough.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[1.2rem] border border-[#e6dccf] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80" alt="Construction team at work" className="h-56 w-full object-cover" />
            <div className="p-5">
              <h3 className="mb-2 text-xl font-semibold">Serving Ontario homes with care</h3>
              <p className="text-[#64748b] leading-7">From planning to finishing details, our team brings a steady, practical approach to every property.</p>
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-[#e6dccf] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
            <h3 className="mb-4 text-xl font-semibold">Our values</h3>
            <ul className="mb-5 list-disc space-y-2 pl-5 text-[#64748b]">
              <li>Clear communication from start to finish</li>
              <li>Respectful, organized job sites</li>
              <li>Quality finishes that stand the test of time</li>
              <li>Flexible support for renovations, repairs, and property transitions</li>
            </ul>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1rem] bg-[#f2e9dc] p-4 text-center">
                <strong className="mb-1 block text-[1.1rem] font-semibold text-[#8a4d12]">20+</strong>
                <span className="text-sm text-[#64748b]">Years serving clients</span>
              </div>
              <div className="rounded-[1rem] bg-[#f2e9dc] p-4 text-center">
                <strong className="mb-1 block text-[1.1rem] font-semibold text-[#8a4d12]">Ontario</strong>
                <span className="text-sm text-[#64748b]">Based in the region</span>
              </div>
              <div className="rounded-[1rem] bg-[#f2e9dc] p-4 text-center">
                <strong className="mb-1 block text-[1.1rem] font-semibold text-[#8a4d12]">100%</strong>
                <span className="text-sm text-[#64748b]">Client-focused approach</span>
              </div>
              <div className="rounded-[1rem] bg-[#f2e9dc] p-4 text-center">
                <strong className="mb-1 block text-[1.1rem] font-semibold text-[#8a4d12]">All-in</strong>
                <span className="text-sm text-[#64748b]">Renovation support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
