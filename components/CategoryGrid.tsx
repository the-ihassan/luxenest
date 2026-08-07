import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

const images: Record<string, string> = {
  bags: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  jewelry: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80",
  fashion: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=700&q=80",
  "home-decor": "https://images.unsplash.com/photo-1602874801007-bd36c614332e?auto=format&fit=crop&w=700&q=80",
  beauty: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
};

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {categories.map((cat, i) => (
        <Link
          key={cat.slug}
          href={`/${cat.slug}`}
          className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl"
        >
          <Image
            src={images[cat.slug]}
            alt={cat.name}
            fill
            sizes="(max-width: 768px) 45vw, 18vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <div className="relative z-10 p-4">
            <span className="eyebrow text-[0.58rem] text-gold-light">0{i + 1}</span>
            <p className="mt-1 font-display text-lg text-cream">{cat.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
