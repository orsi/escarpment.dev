"use client";
import { motion } from "motion/react";
import Link from "next/link";
import CountUp from "react-countup";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="px-6 py-8 lg:px-0 lg:pt-32 lg:pb-16"
            initial={{
              opacity: 0,
              transform: "translateX(45px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0)",
            }}
            transition={{
              delay: 0.2,
            }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <p className="text-sm tracking-widest uppercase">
              About Escarpment
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Built on craftsmanship, care, and a commitment to doing things
              right.
            </h2>
            <p className="mt-8 leading-7">
              Escarpment Developments was founded by a small team of
              tradespeople who believed that great homes deserve thoughtful
              planning and dependable execution. Over the past 20 years, the
              company has grown from a local remodeling crew into a trusted
              partner for homeowners, investors, and property owners across the
              region.
            </p>
            <p className="leading-7">
              We combine hands-on construction experience with a simple mission:
              make each project feel seamless, clear, and rewarding from the
              first conversation to the final walkthrough.
            </p>
          </motion.div>
          <div className="relative mt-(--height-nav-collapsed) aspect-video min-h-50 overflow-hidden lg:mt-0 lg:aspect-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/about-splash-poster.webp"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="/about-splash-360p.mp4"
                type="video/mp4"
                media="(max-width: 640px)"
              />
              <source src="/about-splash-720p.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-8 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
          <motion.div
            className="bg-primary-dark/90 flex-1 rounded text-white/95 shadow-lg"
            initial={{
              opacity: 0,
              transform: "translate(-25px,-25px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translate(0)",
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <div>
              <img
                src="/tweedside.webp"
                alt="A view of the side of a barn with a wooden staircase leading to the upper level"
                className="aspect-video w-full object-cover"
              />
            </div>
            <div className="px-8 py-6">
              <h3 className="font-bold tracking-widest">Real Estate</h3>
              <p className="mt-6">
                Our crews provide flawless installations every time, guaranteed.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-primary-dark/90 flex-1 rounded text-white/95 shadow-lg"
            initial={{
              opacity: 0,
              transform: "translate(-25px,-25px)",
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
            <div>
              <img
                src="/about-renovations.webp"
                alt="Ceramic tile renovation work in progress"
                className="aspect-video w-full object-cover object-bottom"
              />
            </div>
            <div className="px-8 py-6">
              <h3 className="font-bold tracking-widest">Home Renovations</h3>
              <p className="mt-6">
                Our crews provide flawless installations every time, guaranteed.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-primary-dark/90 flex-1 rounded text-white/95 shadow-lg"
            initial={{
              opacity: 0,
              transform: "translate(-25px,-25px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translate(0)",
            }}
            transition={{
              delay: 0.3,
            }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <div>
              <img
                src="/about-repairs.webp"
                alt="A man repairing a window frame"
                className="aspect-video w-full object-cover object-bottom"
              />
            </div>
            <div className="px-8 py-6">
              <h3 className="font-bold tracking-widest">Repairs</h3>
              <p className="mt-6">
                Our crews provide flawless installations every time, guaranteed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="h-32 bg-[linear-gradient(1deg,var(--color-secondary-light)_100px,var(--color-white)_10px)]" />
        <div className="bg-secondary-light px-6 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h3 className="text-4xl font-semibold tracking-wide">Our values</h3>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Clear communication from start to finish</li>
              <li>Respectful, organized job sites</li>
              <li>Quality finishes that stand the test of time</li>
              <li>
                Flexible support for renovations, repairs, and property
                transitions
              </li>
            </ul>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <motion.div
                className="rounded bg-white/20 px-8 py-6 text-center"
                initial={{
                  opacity: 0,
                  transform: "translate(-25px,-25px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translate(0)",
                }}
                transition={{
                  delay: 0.1,
                }}
                viewport={{ once: true, margin: "-150px" }}
              >
                <strong className="mb-1 block text-3xl font-semibold">
                  <CountUp scrollSpyOnce enableScrollSpy={true} end={20} />+
                </strong>
                <span className="text-sm">Years serving clients</span>
              </motion.div>
              <motion.div
                className="rounded bg-white/20 px-8 py-6 text-center"
                initial={{
                  opacity: 0,
                  transform: "translate(-25px,-25px)",
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
                <strong className="mb-1 block text-3xl font-semibold">
                  Ontario
                </strong>
                <span className="text-sm">Based in the region</span>
              </motion.div>
              <motion.div
                className="rounded bg-white/20 px-8 py-6 text-center"
                initial={{
                  opacity: 0,
                  transform: "translate(-25px,-25px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translate(0)",
                }}
                transition={{
                  delay: 0.3,
                }}
                viewport={{ once: true, margin: "-150px" }}
              >
                <strong className="mb-1 block text-3xl font-semibold">
                  <CountUp scrollSpyOnce enableScrollSpy={true} end={100} />%
                </strong>
                <span className="text-sm">Client-focused approach</span>
              </motion.div>
              <motion.div
                className="rounded bg-white/20 px-8 py-6 text-center"
                initial={{
                  opacity: 0,
                  transform: "translate(-25px,-25px)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translate(0)",
                }}
                transition={{
                  delay: 0.4,
                }}
                viewport={{ once: true, margin: "-150px" }}
              >
                <strong className="mb-1 block text-3xl font-semibold">
                  All-in
                </strong>
                <span className="text-sm">Renovation support</span>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="h-32 bg-[linear-gradient(1deg,var(--color-gray-100)_100px,var(--color-secondary-light)_10px)]" />
      </section>

      <section className="bg-gray-100 md:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
            <div className="aspect-video overflow-hidden">
              <img
                src="/serving-ontario.webp"
                alt="A room under construction work"
                className="aspect-square w-full object-cover object-bottom"
              />
            </div>
            <div className="px-6 py-16 md:py-0 lg:px-0">
              <h3 className="mb-2 text-xl font-semibold">
                Serving Ontario homes with care
              </h3>
              <p className="leading-7">
                From planning to finishing details, our team brings a steady,
                practical approach to every property.
              </p>
              <Link
                className="bg-primary-main mt-4 inline-flex items-center rounded-full px-6 py-2 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                href="/contact/"
              >
                Contact us now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
