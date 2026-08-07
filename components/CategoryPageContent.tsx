import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import Newsletter from "@/components/Newsletter";
import { categories, productsByCategory, type Product } from "@/lib/data";

export default function CategoryPageContent({
  categorySlug,
}: {
  categorySlug: (typeof categories)[number]["slug"];
}) {
  const category = categories.find((c) => c.slug === categorySlug)!;
  const categoryNameMap: Record<string, Product["category"]> = {
    bags: "Bags",
    jewelry: "Jewelry",
    fashion: "Fashion",
    "home-decor": "Home Decor",
    beauty: "Beauty",
  };
  const items = productsByCategory(categoryNameMap[categorySlug]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} | LuxeNest`,
    description: category.description,
    hasPart: items.map((p) => ({
      "@type": "Product",
      name: p.name,
      image: p.image,
      offers: {
        "@type": "Offer",
        price: p.price.replace("$", ""),
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating,
        reviewCount: p.reviewCount,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-line bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />
          <span className="eyebrow mt-6 block text-gold-dark">Shop The Edit</span>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">{category.name}</h1>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-stone">{category.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  c.slug === categorySlug
                    ? "border-ink bg-ink text-cream"
                    : "border-line bg-white text-charcoal hover:border-ink"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
        <SectionHeading
          eyebrow={`${items.length} Reviewed Picks`}
          title={`Best ${category.name.toLowerCase()} to shop right now`}
        />
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
