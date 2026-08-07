import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/data";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="product-card group overflow-hidden rounded-2xl border border-line bg-white">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-3 p-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone">
            <span className="text-gold-dark">{article.category}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="font-display text-xl leading-snug text-ink">{article.title}</h3>
          <p className="text-sm leading-relaxed text-stone">{article.excerpt}</p>
          <span className="link-underline mt-1 text-[0.75rem] font-semibold uppercase tracking-widest text-ink">
            Read Guide
          </span>
        </div>
      </Link>
    </article>
  );
}
