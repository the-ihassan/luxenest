# LuxeNest — Premium Affiliate Shopping & Style Journal

A production-ready affiliate marketing website built with Next.js 14 (App Router), React 18, and Tailwind CSS. LuxeNest is a shopping-magazine-style site covering fashion, handbags, jewelry, beauty, home decor, and gift ideas, targeting shoppers in the US, UK, Canada, and Australia.

## Stack

- **Next.js 14** (App Router, static generation)
- **React 18** + **TypeScript**
- **Tailwind CSS** with a custom luxury design system (black / white / beige / gold)
- Fonts: **Fraunces** (display serif) + **Inter** (body), loaded via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/                    Next.js App Router pages
  page.tsx              Homepage
  bags/ jewelry/ fashion/ home-decor/ beauty/   Category pages
  blog/                 Blog listing
  blog/[slug]/          Dynamic article template (comparison table, reviews, FAQ)
  about/ contact/       Company pages
  privacy-policy/ terms/ affiliate-disclosure/  Legal pages
  sitemap.ts            Auto-generated sitemap.xml
  robots.ts             Auto-generated robots.txt
  layout.tsx            Root layout, fonts, global schema
  globals.css           Design tokens & utility classes
components/             Reusable UI components (cards, tables, FAQ, header/footer, etc.)
lib/
  data.ts               Product & article content (swap for a CMS/API later)
  seo.ts                Metadata + Open Graph helper
```

## Content Management

All product and article data lives in `lib/data.ts`. To add a product, append to the `products` array; to add a buying guide, append to the `articles` array and reference product slugs — the article page, comparison table, and reviews render automatically.

## SEO Features

- Per-page metadata via `generateMetadata` / `buildMetadata`
- Open Graph + Twitter Card tags
- JSON-LD schema: Organization, WebSite, CollectionPage (category pages), Article + FAQPage (blog articles)
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML, descriptive alt text, accessible focus states

## Deployment

### GitHub Pages
This project now supports static export for GitHub Pages. Push the repository to GitHub, then enable GitHub Actions as the Pages source in the repository Settings > Pages.

The workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) will build and publish the site automatically from the main branch.

Before the first deployment, update the GitHub Pages URL in the workflow file to your actual repository URL.

### Vercel
Import the repo at vercel.com/new — the `vercel.json` config is already set. No environment variables are required for the base template.

### Netlify
Connect the repo — `netlify.toml` installs the official `@netlify/plugin-nextjs` plugin automatically.

## Replacing Placeholder Content

- Swap Unsplash image URLs in `lib/data.ts` with your own licensed product photography.
- Replace affiliate URLs (`https://example.com/go/...`) with your real tracked affiliate links.
- Update `SITE_URL` in `lib/seo.ts` to your live domain.
- Add real `logo.png` and `og-image.jpg` files to `/public`.
