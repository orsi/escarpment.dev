export default function ContactPage() {
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
          <form>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <label className="text-sm font-bold">
                  Name
                  <input
                    className="text-base w-full px-3 py-2 rounded border"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-bold">
                  Email
                  <input
                    className="text-base w-full px-3 py-2 rounded border"
                    type="email"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="text-sm font-bold">
                  Phone
                  <input
                    className="text-base w-full px-3 py-2 rounded border"
                    placeholder="(555) 555-5555"
                  />
                </label>
              </div>
              <div className="">
                <label className="block h-full text-sm font-bold">
                  Project details
                  <textarea
                    className="min-h-30 h-[calc(100%-1.2rem)] text-base w-full px-3 py-2 rounded border"
                    placeholder="Share a little about your goals, timeline, and preferred scope."
                  />
                </label>
              </div>
              <div className="">
                <button
                  className="inline-flex rounded-full bg-primary-main px-6 py-1.5 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
