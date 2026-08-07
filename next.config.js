/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**" }
    ],
    formats: ["image/avif", "image/webp"]
  },
  compress: true,
};

module.exports = nextConfig;
