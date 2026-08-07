import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description: "Learn about LuxeNest's editorial process, mission, and how we choose what to recommend.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <span className="eyebrow mt-6 block text-gold-dark">Our Story</span>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">About LuxeNest</h1>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="prose-lg flex flex-col gap-5 text-charcoal/85">
              <p>
                LuxeNest started with a simple frustration: most shopping content online is either
                an unreadable spec sheet or a vague listicle with no real opinion. We wanted
                something in between — guides written the way a friend with good taste and too
                much shopping experience would actually talk to you.
              </p>
              <p>
                We cover fashion, handbags, jewelry, beauty, and home decor for readers across the
                United States, United Kingdom, Canada, and Australia, with an editorial lens that
                favors construction quality, everyday practicality, and honest trade-offs over
                hype.
              </p>
              <h2 className="mt-4 font-display text-2xl text-ink">How We Choose What to Feature</h2>
              <p>
                Every product that appears in a LuxeNest guide is evaluated against a consistent
                checklist: material and construction quality, fit or sizing consistency, comfort
                over repeated use, value relative to price, and how the brand handles returns and
                customer service. Guides are revisited on a regular schedule to keep pricing and
                availability accurate.
              </p>
              <h2 className="mt-4 font-display text-2xl text-ink">How We Make Money</h2>
              <p>
                LuxeNest earns a commission when readers purchase through some of the links on this
                site, at no additional cost to the reader. This never determines which products we
                recommend — see our{" "}
                <a href="/affiliate-disclosure" className="link-underline text-ink">
                  Affiliate Disclosure
                </a>{" "}
                for the full policy.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-line bg-beige/60 p-6">
              <span className="eyebrow text-gold-dark">At a Glance</span>
              <dl className="mt-5 flex flex-col gap-4">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-stone">Founded</dt>
                  <dd className="font-display text-lg text-ink">2022</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-stone">Guides Published</dt>
                  <dd className="font-display text-lg text-ink">180+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-stone">Editorial Team</dt>
                  <dd className="font-display text-lg text-ink">6 writers &amp; researchers</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-beige/40 py-16 md:py-20">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <TrustBadges />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
