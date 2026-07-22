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
      <section className="relative isolate overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover blur-sm saturate-150"
        >
          <source src="/escarpment-preview2.mov" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto flex min-h-125 max-w-7xl px-6 py-18 sm:py-24 sm:px-20 text-white/60 isolate mix-blend-plus-lighter">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-widest">
              <span className="font-black">Escarpment</span>{" "}
              <span className="font-thin">Developments</span>
            </p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Beautiful spaces, built to last.
            </h1>
            <p className="max-w-xl text-lg">Dream. Live. Grow.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center rounded-full py-2 px-6 bg-primary-main text-white font-bold transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full py-2 px-6 bg-white/15 font-bold text-white backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <p className="shrink-0 text-sm uppercase tracking-widest ">
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
                delay: .3,
                duration: 0.8,
              }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>
          <div className="mt-8 flex flex-col gap-6 lg:gap-10 lg:flex-row-reverse">
            <div>
              <h2 className="text-xl md:text-3xl font-semibold">
                From simple updates to full-scale transformations, we do the
                work that makes homes feel better every day.
              </h2>
              <p className="mt-8">
                We bring a practical, detail-driven approach to every project,
                whether it is a quick refresh, a luxury bath upgrade, or a
                complete home renovation.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:min-w-100 grid gap-8">
              {highlights.map((item, i) => (
                <motion.article
                  className="border-l-4 border-secondary-light pl-4"
                  initial={{ opacity: 0, transform: "translate(-20px, -20px)" }}
                  whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
                  transition={{
                    delay: i * 0.2,
                  }}
                  viewport={{ once: true, margin: "-150px" }}
                  key={item.title}
                >
                  <h3 className="text-xl leading-none text-primary-main/90 font-bold ">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 ">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-main text-white/95 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <div className="mb-6">
            <p className="mb-2 text-sm uppercase tracking-widest ">
              Why clients choose us
            </p>
            <h2 className="text-3xl font-semibold text-text">
              Clear communication, dependable crews, and carefully finished
              work.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="p-4 text-center rounded bg-primary-dark/60 border border-primary-dark/50">
              <strong className="mb-2 block text-xl font-semibold text-secondary-light">
                <CountUp scrollSpyOnce enableScrollSpy={true} end={20} />+ years
              </strong>
              <span className="text-sm ">Of experience in trades</span>
            </div>
            <div className="p-4 text-center rounded bg-primary-dark/60 border border-primary-dark/50">
              <strong className="mb-2 block text-xl font-semibold text-secondary-light">
                <CountUp scrollSpyOnce enableScrollSpy={true} end={5} />+
              </strong>
              <span className="text-sm ">Core services offered</span>
            </div>
            <div className="p-4 text-center rounded bg-primary-dark/60 border border-primary-dark/50">
              <strong className="mb-2 block text-xl font-semibold text-secondary-light">
                <CountUp scrollSpyOnce enableScrollSpy={true} end={100} />+
              </strong>
              <span className="text-sm ">
                Local projects rooted in the community
              </span>
            </div>
            <div className="p-4 text-center rounded bg-primary-dark/60 border border-primary-dark/50">
              <strong className="mb-2 block text-xl font-semibold text-secondary-light">
                Customized
              </strong>
              <span className="text-sm ">for your own taste and enjoyment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-7xl mx-auto">
          <video controls className="h-full w-full aspect-video">
            <source src="/escarpment-dreamlivegrow.mov" />
          </video>
        </div>
      </section>

      <section className="bg-primary-dark text-white/95 overflow-hidden py-16 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden">
            <video
              muted
              autoPlay
              loop
              playsInline
              controls
              className="w-full object-cover md:aspect-square"
            >
              <source src="/feature-work.mp4" />
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
            <p className="text-sm uppercase tracking-widest ">Featured work</p>
            <h2 className="mt-3 text-3xl font-semibold text-text">
              See how we turn rough spaces into refined, functional homes.
            </h2>
            <p className="mt-10 ">
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

      <section className="bg-linear-to-r from-secondary-dark to-secondary-light">
        <a
          href={INSTAGRAM_ESCARPMENTDEVELOPMENTS_URL}
          target="_blank"
          rel="noreferrer"
          className="block text-center tracking-wider group text-3xl px-6 sm:px-8 lg:px-10 py-16 text-black/60 mix-blend-hard-light"
        >
          Follow our latest projects on Instagram
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
        </a>
      </section>
    </>
  );
}
