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
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#64748b]">Projects</p>
            <h2 className="max-w-3xl text-3xl font-semibold text-[#1f2933]">Recent work that blends practical upgrades with elevated design.</h2>
          </div>
          <p className="max-w-xl text-[#64748b]">From cosmetic refreshes to large-scale renovations, these projects show the range of work we bring to homes and properties.</p>
        </div>

        <div className="mb-6 rounded-[1.25rem] border border-[#e6dccf] bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
          <iframe
            src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0"
            title="Before and after renovation walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="min-h-[320px] w-full rounded-[1rem] border-0"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.2rem] border border-[#e6dccf] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="leading-7 text-[#64748b]">{project.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
