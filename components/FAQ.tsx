export default function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col divide-y divide-line rounded-2xl border border-line bg-white">
      {faqs.map((item) => (
        <details key={item.q} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
            {item.q}
            <span className="shrink-0 text-xl text-gold-dark transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-stone">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
