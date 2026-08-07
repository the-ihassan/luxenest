import CategoryPageContent from "@/components/CategoryPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home Decor — Shop the Edit",
  description: "Home decor and textiles reviewed for material honesty, finish quality, and everyday livability.",
  path: "/home-decor",
});

export default function Page() {
  return <CategoryPageContent categorySlug="home-decor" />;
}
