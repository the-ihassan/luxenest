import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

const legalLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10">
                <Image src="/logo.png" alt="LuxeNest logo" width={44} height={44} className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-2xl">LuxeNest</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              A shopping and style journal covering fashion, handbags, jewelry, beauty, and home
              decor for readers across the US, UK, Canada, and Australia.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">Shop</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="link-underline text-sm text-cream/80">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">Journal</h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link href="/blog" className="link-underline text-sm text-cream/80">
                  All Buying Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/best-designer-style-handbags-under-100" className="link-underline text-sm text-cream/80">
                  Handbags Under $100
                </Link>
              </li>
              <li>
                <Link href="/blog/best-jewelry-trends-2026" className="link-underline text-sm text-cream/80">
                  Jewelry Trends 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/luxury-gifts-that-look-expensive" className="link-underline text-sm text-cream/80">
                  Luxury-Look Gifts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">Company</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-sm text-cream/80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-14 opacity-40" />

        <div className="mt-6 flex flex-col gap-4 text-xs text-stone md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} LuxeNest. All rights reserved.</p>
          <p className="max-w-2xl">
            LuxeNest is a participant in various affiliate advertising programs. As an affiliate,
            we may earn a commission on qualifying purchases made through links on this site, at
            no additional cost to you. See our{" "}
            <Link href="/affiliate-disclosure" className="link-underline text-gold-light">
              Affiliate Disclosure
            </Link>{" "}
            for details.
          </p>
        </div>
      </div>
    </footer>
  );
}
