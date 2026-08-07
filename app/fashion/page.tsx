import CategoryPageContent from "@/components/CategoryPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fashion — Shop the Edit",
  description: "Wardrobe staples and seasonal pieces reviewed for fabric quality, fit, and cost-per-wear value.",
  path: "/fashion",
});

export default function Page() {
  return <CategoryPageContent categorySlug="fashion" />;
}
