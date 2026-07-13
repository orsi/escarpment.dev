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
      <section className="relative isolate overflow-hidden -mt-(--height-nav)">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute inset-0 bg-black/55" /> */}
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl px-6 py-18 sm:py-24 sm:px-20">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/80">
              <span className="font-black">Escarpment</span>{" "}
              <span className="font-thin">Developments</span>
            </p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Beautiful spaces, built to last.
            </h1>
            <p className="max-w-xl text-lg text-white/80">
               Dream. Live. Grow.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/m/services"
                className="inline-flex rounded-full bg-primary-main text-secondary-light px-5 py-3 font-bold transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore services
              </Link>
              <Link
                href="/m/contact"
                className="inline-flex rounded-full bg-white/15 px-5 py-3 font-bold text-white backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-muted">
                Overview
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold text-text">
                From simple updates to full-scale transformations, we do the
                work that makes homes feel better every day.
              </h2>
            </div>
            <p className="max-w-xl text-muted">
              We bring a practical, detail-driven approach to every project,
              whether it is a quick refresh, a luxury bath upgrade, or a
              complete home renovation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-primary-light/20 border border-primary-dark/10 p-6"
              >
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                alt="Bright interior renovation"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
                alt="Bathroom update with tile and fixtures"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark text-white/95 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl bg-white p-2">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1"
              title="Renovation project overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="min-h-80 w-full rounded-2xl border-0"
            />
          </div>
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-muted">
              Featured work
            </p>
            <h2 className="mb-3 text-3xl font-semibold text-text">
              See how we turn rough spaces into refined, functional homes.
            </h2>
            <p className="mb-4 text-muted">
              From foundational work to final trim, our team keeps projects
              moving with care and precision.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted">
              <li>
                Hands-on project coordination from planning through completion
              </li>
              <li>
                Clean, professional finishes that feel polished and lasting
              </li>
              <li>
                Flexible support for both cosmetic refreshes and larger
                transformations
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="mb-2 text-sm uppercase tracking-widest text-muted">
              Why clients choose us
            </p>
            <h2 className="text-3xl font-semibold text-text">
              Clear communication, dependable crews, and carefully finished
              work.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-primary-light/10 border border-primary-dark/10 p-4 text-center"
              >
                <strong className="mb-2 block text-xl font-semibold text-accent-dark">
                  {stat.value}
                </strong>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
