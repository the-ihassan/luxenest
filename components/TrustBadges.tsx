const badges = [
  {
    title: "Independently Reviewed",
    body: "Every product is evaluated against our editorial checklist before it earns a spot in a guide.",
  },
  {
    title: "Transparent Affiliate Model",
    body: "We may earn a commission on purchases — it never affects which products we recommend.",
  },
  {
    title: "Updated Regularly",
    body: "Guides are re-checked for pricing, availability, and accuracy every quarter.",
  },
  {
    title: "Global Shipping Coverage",
    body: "Curated for shoppers across the US, UK, Canada, Australia, and beyond.",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b) => (
        <div key={b.title} className="rounded-2xl border border-line bg-white p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold">
            <span className="h-2 w-2 rounded-full bg-gold" />
          </div>
          <h3 className="font-display text-lg text-ink">{b.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone">{b.body}</p>
        </div>
      ))}
    </div>
  );
}
