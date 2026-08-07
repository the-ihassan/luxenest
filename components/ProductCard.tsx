import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import Stars from "@/components/Stars";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card group flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-widest text-cream">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={`${product.name} by ${product.brandLine}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="eyebrow text-[0.62rem] text-stone">{product.brandLine}</span>
        <Link href={`/${categorySlug(product.category)}#${product.slug}`} className="link-underline">
          <h3 className="font-display text-lg leading-snug text-ink">{product.name}</h3>
        </Link>
        <Stars rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-ink">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-stone line-through">{product.originalPrice}</span>
          )}
        </div>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
        >
          Check Price
        </a>
      </div>
    </article>
  );
}

function categorySlug(category: Product["category"]) {
  const map: Record<Product["category"], string> = {
    Bags: "bags",
    Jewelry: "jewelry",
    Fashion: "fashion",
    "Home Decor": "home-decor",
    Beauty: "beauty",
  };
  return map[category];
}
