import type { Metadata } from "next";

export const SITE_NAME = "LuxeNest";
export const SITE_URL = "https://www.luxenest.com";
export const SITE_DESCRIPTION =
  "LuxeNest is a premium shopping guide for fashion, handbags, jewelry, beauty, and home decor — curated edits and honest reviews for shoppers in the US, UK, Canada, and Australia.";

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/og-image.jpg`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
