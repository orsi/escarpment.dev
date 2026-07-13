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
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#64748b]">Services</p>
            <h2 className="max-w-3xl text-3xl font-semibold text-[#1f2933]">Renovation and contracting services for every stage of the project.</h2>
          </div>
          <p className="max-w-xl text-[#64748b]">Whether you need a quick upgrade or a full-scale remodel, our crew is equipped to handle it with reliable scheduling and careful workmanship.</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-[1.2rem] border border-[#e6dccf] shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80" alt="Renovation work in progress" className="h-72 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[1.2rem] border border-[#e6dccf] shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80" alt="Finished bathroom renovation" className="h-72 w-full object-cover" />
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-[1.2rem] border border-[#e6dccf] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="leading-7 text-[#64748b]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
