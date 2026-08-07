import ArticleCard from "@/components/ArticleCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";
import { articles } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Buying Guides & Style Journal",
  description:
    "In-depth buying guides covering handbags, jewelry, beauty, and gifts — with comparison tables, pros and cons, and honest recommendations.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-line bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />
          <span className="eyebrow mt-6 block text-gold-dark">The Journal</span>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Buying Guides</h1>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-stone">
            Comparison-driven guides with pros, cons, and honest picks — no filler, no fluff.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
