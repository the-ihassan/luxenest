import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:items-center">
        <div className="animate-fadeUp lg:col-span-6">
          <span className="eyebrow text-gold-dark">The Edit &mdash; Spring 2026</span>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Quiet luxury,
            <br />
            chosen carefully.
          </h1>
          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-charcoal/80">
            LuxeNest curates the handbags, jewelry, fashion, and home pieces worth your money —
            tested for construction, comfort, and how they hold up long after checkout.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/bags"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
            >
              Shop The Edit
            </Link>
            <Link
              href="/blog"
              className="link-underline text-[0.8rem] font-semibold uppercase tracking-widest text-ink"
            >
              Read Buying Guides
            </Link>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <dt className="eyebrow text-[0.6rem] text-stone">Pieces Reviewed</dt>
              <dd className="mt-1 font-display text-2xl text-ink">480+</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.6rem] text-stone">Monthly Readers</dt>
              <dd className="mt-1 font-display text-2xl text-ink">210k</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.6rem] text-stone">Countries Served</dt>
              <dd className="mt-1 font-display text-2xl text-ink">4+</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
                alt="Structured leather tote styled on a neutral background"
                fill
                priority
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
                alt="Gold jewelry laid flat on beige fabric"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 hidden w-56 -translate-x-1/2 rounded-xl border border-line bg-white p-4 shadow-xl md:block">
            <p className="eyebrow text-[0.58rem] text-gold-dark">Editor&rsquo;s Note</p>
            <p className="mt-2 font-display text-sm leading-snug text-ink">
              &ldquo;This season&rsquo;s tote is the one piece worth the splurge.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
