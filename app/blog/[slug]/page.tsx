import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonTable from "@/components/ComparisonTable";
import ProductReviewBlock from "@/components/ProductReviewBlock";
import FAQ from "@/components/FAQ";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { articles, products } from "@/lib/data";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return buildMetadata({ title: "Article Not Found", description: "", path: "/blog" });
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.image,
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const reviewedProducts = article.productSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "LuxeNest Editorial Team" },
    publisher: {
      "@type": "Organization",
      name: "LuxeNest",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article>
        <section className="border-b border-line bg-cream py-10 md:py-14">
          <div className="mx-auto max-w-content px-5 md:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Journal", href: "/blog" },
                { label: article.category },
              ]}
            />
            <span className="eyebrow mt-6 block text-gold-dark">{article.category} Guide</span>
            <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-widest text-stone">
              <span>LuxeNest Editorial Team</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        <div className="relative mx-auto -mt-4 aspect-[16/8] w-full max-w-content overflow-hidden rounded-2xl px-5 md:px-8">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-charcoal/85">{article.excerpt}</p>
              <p className="mt-4 leading-relaxed text-charcoal/80">
                We compared each pick on construction quality, comfort, and how it performs weeks
                after the unboxing — not just how it photographs. Jump to the comparison table
                below for a quick read, or scroll through full reviews for the details that matter
                before you buy.
              </p>

              <h2 className="mt-12 font-display text-2xl text-ink">At a Glance</h2>
              <div className="mt-5">
                <ComparisonTable products={reviewedProducts} />
              </div>

              <h2 className="mt-14 font-display text-2xl text-ink">Full Reviews</h2>
              <div className="mt-4">
                {reviewedProducts.map((p, i) => (
                  <ProductReviewBlock key={p.slug} product={p} index={i + 1} />
                ))}
              </div>

              <h2 className="mt-14 font-display text-2xl text-ink">Frequently Asked Questions</h2>
              <div className="mt-5">
                <FAQ faqs={article.faqs} />
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-4 rounded-2xl border border-line bg-beige/60 p-6">
                <span className="eyebrow text-gold-dark">Quick Jump</span>
                <ul className="flex flex-col gap-3">
                  {reviewedProducts.map((p, i) => (
                    <li key={p.slug}>
                      <a
                        href={`#${p.slug}`}
                        className="link-underline flex items-baseline gap-2 text-sm text-charcoal"
                      >
                        <span className="text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="gold-rule my-2" />
                <p className="text-xs leading-relaxed text-stone">
                  Some links in this guide are affiliate links. Read our{" "}
                  <Link href="/affiliate-disclosure" className="link-underline text-ink">
                    Affiliate Disclosure
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </div>

        <section className="border-t border-line bg-beige/60 py-14 md:py-20">
          <div className="mx-auto max-w-content px-5 md:px-8">
            <span className="eyebrow text-gold-dark">Keep Reading</span>
            <h2 className="mt-3 font-display text-3xl text-ink">Related Guides</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </article>
    </>
  );
}
