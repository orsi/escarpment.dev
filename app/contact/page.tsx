"use client";
import { SubmitEvent, useState } from "react";

const CONTACT_URL = "https://escarpment-contact.jonathon-orsi.workers.dev";

export default function ContactPage() {
  const [message, setMessage] = useState<null | "success" | "error">(null);

  const onSubmitForm = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch(CONTACT_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok || response.status !== 200) {
      setMessage("error");
    } else {
      setMessage("success");
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
                <label className="text-sm font-bold">
                  Name
                  <input
                    className="text-base w-full px-3 py-2 rounded border"
                    placeholder="Your name"
                    name="name"
                    required
                    maxLength={100}
                  />
                </label>
                <label className="text-sm font-bold">
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
                <label className="text-sm font-bold">
                  Phone
                  <input
                    className="text-base w-full px-3 py-2 rounded border"
                    placeholder="(555) 555-5555"
                    name="phone"
                    required
                    maxLength={100}
                  />
                </label>
              </div>
              <div className="">
                <label className="block h-full text-sm font-bold">
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
              <div className="flex gap-8">
                <div>
                  <button
                    className="inline-flex rounded-full bg-primary-main px-6 py-1.5 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                {message === "success" ? (
                  <span className="text-green-600">
                    Success! We'll get back to you shortly.
                  </span>
                ) : message === "error" ? (
                  <span className="text-red-600">
                    Sorry, there was an error. Please try again.
                  </span>
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
