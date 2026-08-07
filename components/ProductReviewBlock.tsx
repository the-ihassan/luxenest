import Image from "next/image";
import type { Product } from "@/lib/data";
import Stars from "@/components/Stars";

export default function ProductReviewBlock({ product, index }: { product: Product; index: number }) {
  return (
    <div id={product.slug} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-beige">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <span className="eyebrow text-gold-dark">
            {String(index).padStart(2, "0")} &mdash; {product.brandLine}
          </span>
          <h3 className="mt-2 font-display text-2xl text-ink">{product.name}</h3>
          <div className="mt-2">
            <Stars rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-ink">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-stone line-through">{product.originalPrice}</span>
            )}
          </div>

          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-charcoal/85">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-4">
              <p className="eyebrow text-[0.6rem] text-gold-dark">Pros</p>
              <ul className="mt-3 flex flex-col gap-2">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex gap-2 text-sm text-charcoal/85">
                    <span aria-hidden="true" className="text-gold-dark">
                      +
                    </span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-white p-4">
              <p className="eyebrow text-[0.6rem] text-stone">Cons</p>
              <ul className="mt-3 flex flex-col gap-2">
                {product.cons.map((con) => (
                  <li key={con} className="flex gap-2 text-sm text-charcoal/85">
                    <span aria-hidden="true" className="text-stone">
                      &minus;
                    </span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
          >
            Check Price &amp; Availability
          </a>
        </div>
      </div>
    </div>
  );
}
