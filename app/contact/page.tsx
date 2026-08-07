import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with the LuxeNest editorial team for press, partnerships, or reader questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <span className="eyebrow mt-6 block text-gold-dark">Get In Touch</span>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Contact LuxeNest</h1>
      <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-stone">
        Questions about a guide, a partnership idea, or press inquiry? Send us a note and the
        editorial team will get back to you within two business days.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <form className="flex flex-col gap-5 lg:col-span-7" action="#" method="post">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg border border-line bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-line bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="rounded-lg border border-line bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="rounded-lg border border-line bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-fit rounded-full bg-ink px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="rounded-2xl border border-line bg-beige/60 p-6">
            <span className="eyebrow text-gold-dark">Editorial &amp; Press</span>
            <p className="mt-3 text-sm text-charcoal/85">editorial@luxenest.com</p>
          </div>
          <div className="rounded-2xl border border-line bg-beige/60 p-6">
            <span className="eyebrow text-gold-dark">Partnerships</span>
            <p className="mt-3 text-sm text-charcoal/85">partners@luxenest.com</p>
          </div>
          <div className="rounded-2xl border border-line bg-beige/60 p-6">
            <span className="eyebrow text-gold-dark">Mailing Address</span>
            <p className="mt-3 text-sm text-charcoal/85">
              LuxeNest Media Ltd.
              <br />
              228 Beacon Street, Suite 4
              <br />
              Boston, MA 02116, USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
