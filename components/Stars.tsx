export default function Stars({
  rating,
  reviewCount,
  size = "md",
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}) {
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  return (
    <div className={`flex items-center gap-1.5 ${textSize}`} aria-label={`Rated ${rating} out of 5`}>
      <div className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            width={size === "sm" ? 13 : 15}
            height={size === "sm" ? 13 : 15}
            viewBox="0 0 20 20"
            fill={i <= Math.round(rating) ? "#C6A45C" : "#E7DFD2"}
          >
            <path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.1 6-.7z" />
          </svg>
        ))}
      </div>
      <span className="font-medium text-charcoal">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-stone">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
