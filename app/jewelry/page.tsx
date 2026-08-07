import CategoryPageContent from "@/components/CategoryPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Jewelry — Shop the Edit",
  description: "Fine and demi-fine jewelry reviewed for plating durability, hypoallergenic claims, and everyday wearability.",
  path: "/jewelry",
});

export default function Page() {
  return <CategoryPageContent categorySlug="jewelry" />;
}
