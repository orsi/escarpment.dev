import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Home Renovations",
      description:
        "From kitchens and baths to whole-home transformations, we make every renovation feel intentional, polished, and built to last.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Flooring & Tile",
      description:
        "We install hardwood, luxury vinyl, tile, and ceramic surfaces with precision and clean finishing details.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Showers & Wet Areas",
      description:
        "Custom shower builds, waterproofing, and upscale tile work that bring comfort and style to everyday routines.",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Drywall & Finishing",
      description:
        "Seamless drywall repairs, new installs, texturing, and prep work for a flawless finish before paint goes on.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Painting & Trim",
      description:
        "Interior and exterior painting, cabinet refreshes, trim details, and color consultations that complete the look.",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Property Buying & Selling Support",
      description:
        "We help homeowners and investors assess, prepare, and move through property transactions with practical guidance.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <>
      <section className="bg-primary-dark text-white/95 pt-(--height-nav-collapsed) pb-2">
        <div className="max-w-7xl mx-auto md:flex md:gap-8">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80"
              alt="Renovation work in progress"
              className="h-72 w-full object-cover"
            />
          </div>

          <div className="py-8 px-6 md:px-0">
            <div>
              <p className="text-sm uppercase tracking-widest">Services</p>
              <h2 className="mt-1 text-3xl font-semibold">
                Renovation and contracting services for every stage of the
                project.
              </h2>
            </div>
            <p className="mt-8">
              Whether you need a quick upgrade or a full-scale remodel, our crew
              is equipped to handle it with reliable scheduling and careful
              workmanship.
            </p>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80"
              alt="Finished bathroom renovation"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white md:pt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:gap-16">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`bg-white overflow-hidden md:grid md:grid-cols-2 md:items-center gap-8`}
            >
              <img
                src={service.image}
                alt={service.title}
                className={`h-56 w-full object-cover ${i % 2 === 0 ? "order-1" : ""}`}
              />
              <div className={`py-8 md:py-0 px-6 md:px-0 ${i % 2 === 0 ? "md:pl-6 md:text-right" : "md:pr-6"}`}>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="leading-7">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-linear-to-r from-secondary-dark to-secondary-light">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/contact"
            className="block text-center tracking-wider group text-3xl px-6 sm:px-8 lg:px-10 py-16 text-black/60 mix-blend-hard-light"
          >
            Contact us to learn more about how we can make your dream home come
            true
            <svg
              className="inline-block ml-2 -mt-1 transition group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <g className="transition group-hover:transform-[translate(2px,-2px)]">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
              </g>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
