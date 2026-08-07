export default function Newsletter() {
  return (
    <section className="bg-ink py-16 text-cream md:py-20">
      <div className="mx-auto flex max-w-content flex-col items-center px-5 text-center md:px-8">
        <span className="eyebrow text-gold-light">Stay In The Loop</span>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight md:text-4xl">
          Get the edit before everyone else
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
          New buying guides, restock alerts, and seasonal edits — once a week, no spam, unsubscribe
          anytime.
        </p>
        <form
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          action="#"
          method="post"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-cream/25 bg-cream/5 px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gold px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-gold-light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
