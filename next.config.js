/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const basePath = process.env.BASE_PATH || (repoName ? `/${repoName}` : "");

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
