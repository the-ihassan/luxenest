import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-center px-5 py-28 text-center md:px-8">
      <span className="eyebrow text-gold-dark">404</span>
      <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">This page stepped out</h1>
      <p className="mt-4 max-w-md text-stone">
        The page you&rsquo;re looking for may have moved or no longer exists. Let&rsquo;s get you
        back to the edit.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
      >
        Back To Homepage
      </Link>
    </section>
  );
}
