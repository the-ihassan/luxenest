import type { MetadataRoute } from "next";
import { categories, articles } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${SITE_URL}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
