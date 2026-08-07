import CategoryPageContent from "@/components/CategoryPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Handbags — Shop the Edit",
  description: "Shop LuxeNest's reviewed edit of handbags, totes, and crossbody bags — chosen for construction quality and everyday practicality.",
  path: "/bags",
});

export default function Page() {
  return <CategoryPageContent categorySlug="bags" />;
}
