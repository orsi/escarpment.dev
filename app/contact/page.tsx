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
      <section className="bg-white px-6 sm:px-8 lg:px-10 pt-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest">Contact us</p>
            <h2 className="mb-4 text-3xl font-semibold">
              Tell us about your project and we’ll follow up with a tailored
              response.
            </h2>
            <p className="leading-7">
              We're ready to help with renovations, home prep, flooring,
              ceramics, showers, drywalling, painting, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <form name="contact" onSubmit={onSubmitForm}>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <label className="text-sm font-bold" htmlFor="name">
                  Name
                  <input
                    className="text-base w-full px-3 py-2 rounded border"
                    placeholder="Your name"
                    name="name"
                    required
                    maxLength={100}
                  />
                </label>
                <label className="text-sm font-bold" htmlFor="email">
                  Email
                  <input
                    className="text-base w-full px-3 py-2 rounded border"
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
                    className="text-base w-full px-3 py-2 rounded border"
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
                    className="min-h-30 h-[calc(100%-1.2rem)] text-base w-full px-3 py-2 rounded border"
                    placeholder="Share a little about your goals, timeline, and preferred scope."
                    name="message"
                    maxLength={1000}
                    required
                  />
                </label>
              </div>
              <div>
                <button
                  className={`inline-flex rounded-full bg-primary-main px-6 py-1.5 font-bold text-white transition duration-200 hover:-translate-y-0.5 cursor-pointer ${status.isLoading ? "opacity-40 cursor-default!" : ""}`}
                  disabled={status.isLoading}
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="md:row-3">
                {status.type === "success" ? (
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">
                      Success! We'll get back to you shortly.
                    </span>
                  </div>
                ) : status.type === "error" ? (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
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
