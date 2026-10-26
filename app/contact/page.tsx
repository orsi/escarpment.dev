"use client";
import { SubmitEvent, useState } from "react";

const CONTACT_URL = "https://escarpment-contact.jonathon-orsi.workers.dev";

export default function ContactPage() {
  const [status, setStatus] = useState<{
    isLoading: boolean;
    type: null | "success" | "error";
  }>({ isLoading: false, type: null });

  const onSubmitForm = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setStatus({ isLoading: true, type: null });

    try {
      const response = await fetch(CONTACT_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok || response.status !== 200) {
        setStatus({ isLoading: false, type: "error" });
      } else {
        setStatus({ isLoading: false, type: "success" });
      }
    } catch (err) {
      setStatus({ isLoading: false, type: "error" });
    } finally {
      setTimeout(() => {
        setStatus({ isLoading: false, type: null });
      }, 8000);
    }
  };

  return (
    <>
      <section className="bg-white px-6 pt-32 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-2 text-sm tracking-widest uppercase">Contact us</p>
            <h2 className="mb-4 text-3xl font-semibold">
              Request a quote for your renovation or property improvement
              project.
            </h2>
            <p className="leading-7">
              Based in Stoney Creek, Escarpment Developments serves homeowners
              across Hamilton and the Greater Toronto Area with renovations,
              flooring, tile, showers, drywall, painting, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <form name="contact" onSubmit={onSubmitForm}>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <label className="text-sm font-bold" htmlFor="name">
                  Name
                  <input
                    className="w-full rounded border px-3 py-2 text-base"
                    placeholder="Your name"
                    name="name"
                    required
                    maxLength={100}
                  />
                </label>
                <label className="text-sm font-bold" htmlFor="email">
                  Email
                  <input
                    className="w-full rounded border px-3 py-2 text-base"
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    required
                    maxLength={100}
                  />
                </label>
                <label className="text-sm font-bold" htmlFor="phone">
                  Phone
                  <input
                    className="w-full rounded border px-3 py-2 text-base"
                    placeholder="(555) 555-5555"
                    name="phone"
                    type="tel"
                    required
                    maxLength={100}
                  />
                </label>
              </div>
              <div>
                <label
                  className="block h-full text-sm font-bold"
                  htmlFor="message"
                >
                  Project details
                  <textarea
                    className="h-[calc(100%-1.2rem)] min-h-30 w-full rounded border px-3 py-2 text-base"
                    placeholder="Share a little about your goals, timeline, and preferred scope."
                    name="message"
                    maxLength={1000}
                    required
                  />
                </label>
              </div>
              <div>
                <button
                  className={`bg-primary-main inline-flex cursor-pointer rounded-full px-6 py-1.5 font-bold text-white transition duration-200 hover:-translate-y-0.5 ${status.isLoading ? "cursor-default! opacity-40" : ""}`}
                  disabled={status.isLoading}
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="md:row-3">
                {status.type === "success" ? (
                  <div
                    className="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
                    role="alert"
                  >
                    <span className="block sm:inline">
                      Success! We'll get back to you shortly.
                    </span>
                  </div>
                ) : status.type === "error" ? (
                  <div
                    className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                    role="alert"
                  >
                    <span className="block sm:inline">
                      Sorry, there was an error. Please try again.
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
