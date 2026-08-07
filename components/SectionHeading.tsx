export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : ""}`}>
      <span className="eyebrow text-gold-dark">{eyebrow}</span>
      <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      {description && (
        <p className={`max-w-xl text-[0.95rem] leading-relaxed text-stone ${align === "center" ? "" : ""}`}>
          {description}
        </p>
      )}
      <span className="gold-rule mt-1 w-16 animate-lineGrow" />
    </div>
  );
}
