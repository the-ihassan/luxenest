import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the LuxeNest website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <span className="eyebrow mt-6 block text-gold-dark">Legal</span>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Terms &amp; Conditions</h1>
      <p className="mt-3 text-sm text-stone">Last updated: January 1, 2026</p>

      <div className="prose mt-10 flex max-w-3xl flex-col gap-6 text-charcoal/85">
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of luxenest.com
          (the &ldquo;Site&rdquo;), operated by LuxeNest Media Ltd. By accessing or using the
          Site, you agree to be bound by these Terms.
        </p>

        <h2 className="font-display text-2xl text-ink">1. Use of the Site</h2>
        <p>
          You may use the Site for lawful, personal, non-commercial purposes only. You agree not
          to misuse the Site, interfere with its normal operation, or attempt to access it using a
          method other than the interface we provide.
        </p>

        <h2 className="font-display text-2xl text-ink">2. Editorial Content &amp; Product Information</h2>
        <p>
          Content on the Site, including buying guides, reviews, and comparisons, reflects our
          editorial opinions at the time of publication. Prices, availability, and product
          specifications are subject to change by the retailer and may not always be reflected in
          real time on our Site. Always confirm current pricing and details on the retailer&rsquo;s
          website before purchasing.
        </p>

        <h2 className="font-display text-2xl text-ink">3. Affiliate Relationships</h2>
        <p>
          LuxeNest participates in affiliate marketing programs and may earn a commission from
          qualifying purchases made through links on the Site, at no additional cost to you. See
          our Affiliate Disclosure for details.
        </p>

        <h2 className="font-display text-2xl text-ink">4. Intellectual Property</h2>
        <p>
          All original content on the Site, including text, graphics, logos, and layout, is the
          property of LuxeNest Media Ltd. or its licensors and is protected by applicable
          intellectual property laws. You may not reproduce, distribute, or create derivative works
          without our prior written consent.
        </p>

        <h2 className="font-display text-2xl text-ink">5. Third-Party Links</h2>
        <p>
          The Site contains links to third-party retailer websites. We do not control and are not
          responsible for the content, products, or practices of those sites. Your use of any
          third-party site is at your own risk and subject to that site&rsquo;s own terms.
        </p>

        <h2 className="font-display text-2xl text-ink">6. Disclaimer of Warranties</h2>
        <p>
          The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind,
          express or implied. We do not guarantee that product recommendations will meet your
          specific needs or that the Site will be error-free or uninterrupted.
        </p>

        <h2 className="font-display text-2xl text-ink">7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, LuxeNest Media Ltd. shall not be liable for any
          indirect, incidental, or consequential damages arising from your use of the Site or
          reliance on its content, including purchases made through affiliate links.
        </p>

        <h2 className="font-display text-2xl text-ink">8. Changes to These Terms</h2>
        <p>
          We may revise these Terms at any time. Continued use of the Site after changes are
          posted constitutes acceptance of the revised Terms.
        </p>

        <h2 className="font-display text-2xl text-ink">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Commonwealth of Massachusetts, USA, without
          regard to conflict-of-law principles.
        </p>

        <h2 className="font-display text-2xl text-ink">10. Contact</h2>
        <p>Questions about these Terms can be sent to legal@luxenest.com.</p>
      </div>
    </section>
  );
}
