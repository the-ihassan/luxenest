import Image from "next/image";
import type { Product } from "@/lib/data";
import Stars from "@/components/Stars";

export default function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="compare-table w-full min-w-[720px] border-collapse bg-white text-left text-sm">
        <thead>
          <tr className="bg-beige">
            <th className="border-b p-4 font-display text-base font-normal text-ink">Product</th>
            <th className="border-b p-4 font-display text-base font-normal text-ink">Rating</th>
            <th className="border-b p-4 font-display text-base font-normal text-ink">Price</th>
            <th className="border-b p-4 font-display text-base font-normal text-ink">Best For</th>
            <th className="border-b p-4 font-display text-base font-normal text-ink">
              <span className="sr-only">Buy</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.slug} id={p.slug} className="align-middle">
              <td className="border-b p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-beige">
                    <Image src={p.image} alt={p.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <p className="eyebrow text-[0.58rem] text-stone">{p.brandLine}</p>
                    <p className="font-display text-base leading-snug text-ink">{p.name}</p>
                  </div>
                </div>
              </td>
              <td className="border-b p-4">
                <Stars rating={p.rating} size="sm" />
              </td>
              <td className="border-b p-4">
                <span className="font-semibold text-ink">{p.price}</span>
                {p.originalPrice && (
                  <span className="ml-2 text-xs text-stone line-through">{p.originalPrice}</span>
                )}
              </td>
              <td className="border-b p-4 text-stone">{p.features[0]}</td>
              <td className="border-b p-4">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex whitespace-nowrap rounded-full bg-ink px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
                >
                  Check Price
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
