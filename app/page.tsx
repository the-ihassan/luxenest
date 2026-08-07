import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import TrustBadges from "@/components/TrustBadges";
import SectionHeading from "@/components/SectionHeading";
import { products, articles, bestSellers } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "LuxeNest — Premium Fashion, Handbags, Jewelry & Home Edit",
  description:
    "Curated fashion, handbags, jewelry, beauty, and home decor picks — reviewed for quality, comfort, and value. Shopping guides for the US, UK, Canada, and Australia.",
  path: "/",
});

const trending = products.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust marquee */}
      <div className="overflow-hidden border-b border-line bg-beige py-3">
        <div className="marquee-track gap-16">
          {[...Array(2)].map((_, dupe) => (
            <div key={dupe} className="flex gap-16 pr-16">
              {[
                "As Seen In Style Weekly",
                "Reviewed By 200k+ Shoppers",
                "Free Returns On Featured Retailers",
                "Editorially Independent",
                "Updated Every Month",
              ].map((t) => (
                <span key={t} className="eyebrow whitespace-nowrap text-[0.68rem] text-stone">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Collections */}
      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Featured Collections"
          title="Shop the categories"
          description="Five edits, refreshed seasonally, each vetted against our construction and value checklist."
        />
        <div className="mt-10">
          <CategoryGrid />
        </div>
      </section>

      {/* Trending Products */}
      <section className="border-y border-line bg-beige/60 py-16 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Trending Now"
              title="What readers are buying"
              description="The pieces getting the most clicks across the LuxeNest edit this month."
            />
            <Link
              href="/blog"
              className="link-underline shrink-0 text-[0.75rem] font-semibold uppercase tracking-widest text-ink"
            >
              View All Guides
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {trending.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Buying Guides */}
      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="The Journal"
          title="Latest buying guides"
          description="Long-form, comparison-driven guides that go deeper than a product blurb."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="border-y border-line bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <span className="eyebrow text-gold-light">Best Sellers</span>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight md:text-4xl">
            The pieces our readers keep buying twice
          </h2>
          <span className="gold-rule mt-4 block w-16" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((p) => (
              <div key={p.slug} className="rounded-2xl bg-cream p-1">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Why Trust LuxeNest"
          title="Editorially independent, always"
          align="center"
          description="We buy, test, and photograph a large share of what we review, and we disclose affiliate relationships in full."
        />
        <div className="mt-12">
          <TrustBadges />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
