import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

const navLinks = [
  ...categories.map((c) => ({ href: `/${c.slug}`, label: c.name })),
  { href: "/blog", label: "Journal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3 leading-none">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line bg-white shadow-sm">
            <Image src="/logo.png" alt="LuxeNest logo" width={44} height={44} priority className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl tracking-wide text-ink">LuxeNest</span>
            <span className="eyebrow mt-1 hidden text-[0.62rem] md:block">Shop &amp; Style Journal</span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-[0.82rem] font-medium uppercase tracking-widest text-charcoal hover:text-gold-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="hidden rounded-full border border-ink px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-cream md:inline-block"
          >
            Buying Guides
          </Link>
          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer rounded-full border border-ink p-2" aria-label="Open menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-lg border border-line bg-cream p-4 shadow-xl">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm uppercase tracking-wide text-charcoal">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
