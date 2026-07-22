export default function AccessibilityPage() {
  return (
    <section className="bg-white px-6 pt-32 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <h2 className="text-3xl font-semibold">Accessibility Statement</h2>
        <p className="leading-8">
          Escarpment Developments is committed to making our website accessible
          to everyone, including people with disabilities.
        </p>
        <h3 className="text-xl font-semibold">Our Commitment</h3>
        <p className="leading-8">
          We aim to provide a website experience that is easy to navigate,
          readable, and usable across a range of devices and assistive
          technologies.
        </p>
        <h3 className="text-xl font-semibold">Accessibility Practices</h3>
        <p className="leading-8">
          We work to ensure that our content uses clear headings, meaningful
          link text, readable contrast, and compatible structure for screen
          readers and keyboard navigation where possible.
        </p>
        <h3 className="text-xl font-semibold">Feedback</h3>
        <p className="leading-8">
          If you experience any difficulty accessing content on this website, or
          if you have suggestions for improvement, please contact us at{" "}
          <a
            href="mailto:hello@escarpment.dev"
            style={{ textDecoration: "underline" }}
          >
            hello@escarpment.dev
          </a>
          . We will do our best to address your concerns promptly.
        </p>
        <h3 className="text-xl font-semibold">
          Ontario Accessibility Considerations
        </h3>
        <p className="leading-8">
          As a business operating in Ontario, we are committed to meeting
          reasonable accessibility expectations and continuing to improve the
          usability of our digital experience.
        </p>
      </div>
    </section>
  );
}
