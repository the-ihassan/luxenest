import CategoryPageContent from "@/components/CategoryPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Beauty — Shop the Edit",
  description: "Skincare and makeup reviewed for ingredient lists, texture, and real-world performance.",
  path: "/beauty",
});

export default function Page() {
  return <CategoryPageContent categorySlug="beauty" />;
}
