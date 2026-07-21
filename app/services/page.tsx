"use client";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";
import Logo from "../_src/Logo";
import { motion } from "motion/react";

export default function ServicesPage() {
  const services = [
    {
      title: "Home Renovations",
      description:
        "From kitchens and baths to whole-home transformations, we make every renovation feel intentional, polished, and built to last.",
      image: "/services-renovations.jpg",
    },
    {
      title: "Flooring & Tile",
      description:
        "We install hardwood, luxury vinyl, tile, and ceramic surfaces with precision and clean finishing details.",
      image: "/services-flooring2.jpg",
    },
    {
      title: "Showers & Wet Areas",
      description:
        "Custom shower builds, waterproofing, and upscale tile work that bring comfort and style to everyday routines.",
      image: "/services-showers.jpg",
    },
    {
      title: "Drywall & Finishing",
      description:
        "Seamless drywall repairs, new installs, texturing, and prep work for a flawless finish before paint goes on.",
      image: "/services-drywall.jpg",
    },
    {
      title: "Painting & Trim",
      description:
        "Interior and exterior painting, cabinet refreshes, trim details, and color consultations that complete the look.",
      image: "/services-painting.jpg",
    },
    {
      title: "Property Buying & Selling Support",
      description:
        "We help homeowners and investors assess, prepare, and move through property transactions with practical guidance.",
      image: "/services-retail.jpg",
    },
  ];

  return (
    <>
      <section className="bg-primary-dark text-white/95">
        <div className="md:grid">
          <div className="overflow-hidden row-1 col-1 md:max-w-[2560px] md:mx-auto md:grid md:grid-cols-2 md:gap-8">
            <div className="col-1">
              <div className="relative overflow-hidden aspect-video h-full w-full min-h-100 object-cover">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/services-splash.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="md:pt-(--height-nav-collapsed) row-1 col-1 md:max-w-7xl md:mx-auto md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className="col-2 py-8 px-6 md:pl-0">
              <p className="text-sm uppercase tracking-widest">Services</p>
              <h2 className="mt-1 text-3xl font-semibold">
                Renovation and contracting services for every stage of the
                project.
              </h2>
              <p className="mt-8">
                Whether you need a quick upgrade or a full-scale remodel, our
                crew is equipped to handle it with reliable scheduling and
                careful workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:gap-8 md:px-8">
          {services.map((service, i) => (
            <Fragment key={service.title}>
              <article
                className={`overflow-hidden w-full items-center md:flex md:gap-8${i % 2 !== 0 ? " md:flex-row-reverse" : ""}`}
              >
                <motion.div
                  className={`py-8 px-6 md:px-0 md:w-2/5`}
                  initial={{
                    opacity: 0,
                    transform: `translate(${i % 2 === 0 ? "-25px,-25px" : "25px,-25px"})`,
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translate(0)",
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                  viewport={{ once: true, margin: "-150px" }}
                >
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="leading-7">{service.description}</p>
                </motion.div>
                <div className="md:w-3/5 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className={`h-full w-full object-cover aspect-video`}
                    initial={{
                      opacity: 0,
                      transform: `translateX(${i % 2 === 0 ? "25px" : "-25px"})`,
                    }}
                    whileInView={{
                      opacity: 1,
                      transform: "translateY(0)",
                    }}
                    transition={{
                      delay: 0.2,
                    }}
                    viewport={{ once: true, margin: "-150px" }}
                  />
                </div>
              </article>
              {i !== services.length - 1 && (
                <div className="mt-4">
                  <Logo className="rotate-180 w-8 text-primary-main/30" />
                </div>
              )}
            </Fragment>
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
