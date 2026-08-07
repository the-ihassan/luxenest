import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description: "How LuxeNest discloses and manages affiliate relationships with retail partners.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Affiliate Disclosure" }]} />
      <span className="eyebrow mt-6 block text-gold-dark">Legal</span>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Affiliate Disclosure</h1>
      <p className="mt-3 text-sm text-stone">Last updated: January 1, 2026</p>

      <div className="prose mt-10 flex max-w-3xl flex-col gap-6 text-charcoal/85">
        <p>
          In accordance with the FTC&rsquo;s Guides Concerning the Use of Endorsements and
          Testimonials, and equivalent advertising standards in the UK, Canada, and Australia,
          LuxeNest discloses the following relationship with its readers.
        </p>

        <h2 className="font-display text-2xl text-ink">We Are an Affiliate Marketing Website</h2>
        <p>
          LuxeNest participates in affiliate advertising programs, which means we may earn a
          commission when you click a link on this site and make a qualifying purchase from a
          retail partner. This comes at no additional cost to you &mdash; the price you pay is the
          same whether or not you use our link.
        </p>

        <h2 className="font-display text-2xl text-ink">How This Affects Our Recommendations</h2>
        <p>
          Our editorial team selects and reviews products based on our own evaluation criteria,
          independent of whether a commission is available. Affiliate relationships do not
          determine our ratings, and we do not accept payment in exchange for a favorable review.
        </p>

        <h2 className="font-display text-2xl text-ink">How to Identify Affiliate Links</h2>
        <p>
          Most outbound product links on LuxeNest, including &ldquo;Check Price&rdquo; buttons and
          in-text product mentions, are affiliate links. Links are marked with{" "}
          <code className="rounded bg-beige px-1.5 py-0.5 text-sm">rel=&quot;sponsored&quot;</code>{" "}
          attributes for search engines, and this page serves as our disclosure to readers.
        </p>

        <h2 className="font-display text-2xl text-ink">Sponsored Content</h2>
        <p>
          On the rare occasion we publish sponsored or paid content, it will be clearly labeled as
          such at the top of the article, separate from our standard editorial disclosure.
        </p>

        <h2 className="font-display text-2xl text-ink">Questions</h2>
        <p>
          If you have questions about our affiliate relationships or editorial process, contact us
          at editorial@luxenest.com.
        </p>
      </div>
    </section>
  );
}
