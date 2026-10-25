"use client";

import Link from "next/link";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { INSTAGRAM_ESCARPMENTDEVELOPMENTS_URL } from "./_src/globals";

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

const faqs = [
  {
    question:
      "Do you provide renovation services in Stoney Creek and Hamilton?",
    answer:
      "Yes. Escarpment Developments is based in Stoney Creek and serves homeowners across Hamilton and the Greater Toronto Area.",
  },
  {
    question: "What types of home improvement services do you offer?",
    answer:
      "We handle a range of renovation and finishing services, including flooring, tile, showers, drywall, painting, trim, and property improvement work.",
  },
  {
    question: "Can you help with both smaller upgrades and larger remodels?",
    answer:
      "Absolutely. We work on everything from focused refreshes to full renovation projects, with careful planning, quality workmanship, and a practical approach to timelines.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Escarpment Developments",
  description:
    "Home renovation, flooring, drywall, painting, and property improvement services in Stoney Creek, Hamilton, and the Greater Toronto Area.",
  areaServed: ["Stoney Creek", "Hamilton", "Greater Toronto Area"],
  url: "https://escarpment.dev",
  knowsAbout: [
    "Home renovations",
    "Bathroom renovations",
    "Flooring and tile",
    "Drywall and finishing",
    "Painting and trim",
    "Property improvement services",
  ],
};

// interface InstagramApiResponse {
//   data: {
//     id: string;
//     media_url: string;
//     permalink: string;
//     media_type: string;
//     timestamp: string;
//     caption?: string;
//   }[];
//   paging: {
//     cursors: {
//       before: string;
//       after: string;
//     };
//   };
// }

export default function HomePage() {
  // const [posts, setPosts] = useState<InstagramApiResponse["data"]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function loadPosts() {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${ACCESS_TOKEN}`,
  //       );
  //       const json: InstagramApiResponse = await response.json();

  //       if (!response.ok) {
  //         throw new Error(
  //           `Instagram request failed with status ${response.status}`,
  //         );
  //       }

  //       setPosts(json.data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   loadPosts();
  // }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <section className="relative isolate mx-auto max-w-[1900px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.webp"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/hero-360p.mp4"
            type="video/mp4"
            media="(max-width: 640px)"
          />
          <source
            src="/hero-720p.mp4"
            type="video/mp4"
            media="(max-width: 1280px)"
          />
          <source src="/hero-1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto flex min-h-125 w-full max-w-7xl px-6 py-18 text-white sm:px-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm tracking-widest uppercase">
              <span className="font-black">Escarpment</span>{" "}
              <span className="font-thin">Developments</span>
            </p>
            <div className="rounded border border-white/10 bg-black/10 px-6 py-4 backdrop-blur-sm">
              <h1 className="text-3xl leading-tight font-semibold md:text-4xl">
                Home renovations in Stoney Creek, Hamilton, and the GTA.
              </h1>
              <p className="mt-4 text-lg">
                Escarpment Developments creates beautifully finished spaces for
                homeowners across Stoney Creek, Hamilton, and the GTA.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="bg-primary-main inline-flex items-center rounded-full px-6 py-2 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-white/10 px-6 py-2 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <p className="shrink-0 text-sm tracking-widest uppercase">
              About Us
            </p>
            <motion.div
              className="bg-secondary-light h-1 w-full"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-xl font-semibold md:text-3xl">
                From simple updates to full-scale transformations, we do the
                work that makes homes feel better every day.
              </h2>
              <p className="mt-8">
                We bring a practical, detail-driven approach to every project,
                whether it is a quick refresh, a luxury bath upgrade, or a
                complete home renovation.
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:mt-0 lg:w-1/2 lg:min-w-100">
              {highlights.map((item, i) => (
                <motion.article
                  className="pl-0"
                  initial={{ opacity: 0, transform: "translate(-20px, -20px)" }}
                  whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                  transition={{
                    delay: i * 0.2,
                  }}
                  viewport={{ once: true, margin: "-150px" }}
                  key={item.title}
                >
                  <h3 className="text-primary-main/90 text-xl leading-none font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-main px-6 py-16 text-white/95 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-2 text-sm tracking-widest uppercase">
              Why clients choose us
            </p>
            <h2 className="text-text text-3xl font-semibold">
              Clear communication, dependable crews, and carefully finished
              work.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="bg-primary-dark/60 border-primary-dark/50 rounded border p-4 text-center">
              <strong className="text-secondary-light mb-2 block text-xl font-semibold">
                <CountUp scrollSpyOnce enableScrollSpy={true} end={20} />+ years
              </strong>
              <span className="text-sm">Of experience in trades</span>
            </div>
            <div className="bg-primary-dark/60 border-primary-dark/50 rounded border p-4 text-center">
              <strong className="text-secondary-light mb-2 block text-xl font-semibold">
                <CountUp scrollSpyOnce enableScrollSpy={true} end={5} />+
              </strong>
              <span className="text-sm">Core services offered</span>
            </div>
            <div className="bg-primary-dark/60 border-primary-dark/50 rounded border p-4 text-center">
              <strong className="text-secondary-light mb-2 block text-xl font-semibold">
                <CountUp scrollSpyOnce enableScrollSpy={true} end={100} />+
              </strong>
              <span className="text-sm">
                Local projects rooted in the community
              </span>
            </div>
            <div className="bg-primary-dark/60 border-primary-dark/50 rounded border p-4 text-center">
              <strong className="text-secondary-light mb-2 block text-xl font-semibold">
                Customized
              </strong>
              <span className="text-sm">for your own taste and enjoyment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl">
          <video controls className="aspect-video h-full w-full bg-black">
            <source
              src="/home-dream-360p.mp4"
              type="video/mp4"
              media="(max-width: 640px)"
            />
            <source
              src="/home-dream-720p.mp4"
              type="video/mp4"
              media="(max-width: 1280px)"
            />
            <source src="/home-dream-1080p.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="bg-primary-dark overflow-hidden px-6 py-16 text-white/95 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden">
            <video
              muted
              autoPlay
              loop
              playsInline
              className="w-full object-cover md:aspect-square"
            >
              <source
                src="/feature-work-360p.mp4"
                type="video/mp4"
                media="(max-width: 640px)"
              />
              <source
                src="/feature-work-720p.mp4"
                type="video/mp4"
                media="(max-width: 1280px)"
              />
              <source src="/feature-work-720p.mp4" type="video/mp4" />
            </video>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(45px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0)",
            }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <p className="text-sm tracking-widest uppercase">Featured work</p>
            <h2 className="text-text mt-3 text-3xl font-semibold">
              See how we turn rough spaces into refined, functional homes.
            </h2>
            <p className="mt-10">
              From foundational work to final trim, our team keeps projects
              moving with care and precision.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-8">
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
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <p className="shrink-0 text-sm tracking-widest uppercase">FAQ</p>
            <motion.div
              className="bg-secondary-light h-1 w-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start lg:gap-10">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-xl font-semibold md:text-3xl">
                Common questions from homeowners in Stoney Creek, Hamilton, and
                the GTA.
              </h2>
              <p className="mt-6 leading-7 text-slate-700">
                We work with families and property owners throughout the region,
                helping them plan practical improvements that feel polished,
                functional, and built to last.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <motion.article
                  key={faq.question}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5"
                  initial={{ opacity: 0, transform: "translate(-20px, -20px)" }}
                  whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true, margin: "-150px" }}
                >
                  <h3 className="text-primary-dark text-base font-semibold sm:text-lg">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                    {faq.answer}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="from-secondary-dark to-secondary-light bg-linear-to-r">
        <a
          href={INSTAGRAM_ESCARPMENTDEVELOPMENTS_URL}
          target="_blank"
          rel="noreferrer"
          className="group block px-6 py-16 text-center text-3xl tracking-wider text-black/60 mix-blend-hard-light sm:px-8 lg:px-10"
        >
          Follow our latest projects on Instagram
          <svg
            className="-mt-1 ml-2 inline-block transition group-hover:scale-110"
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
        </a>
      </section>
    </>
  );
}
