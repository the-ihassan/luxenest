import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "LuxeNest's privacy policy covering data collection, cookies, and how reader information is used.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <span className="eyebrow mt-6 block text-gold-dark">Legal</span>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-stone">Last updated: January 1, 2026</p>

      <div className="prose mt-10 flex max-w-3xl flex-col gap-6 text-charcoal/85">
        <p>
          LuxeNest Media Ltd. (&ldquo;LuxeNest,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects
          your privacy. This policy explains what information we collect when you visit
          luxenest.com, how we use it, and the choices you have.
        </p>

        <h2 className="font-display text-2xl text-ink">1. Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name and email address when
          you subscribe to our newsletter or contact us. We also collect usage data automatically
          through cookies and analytics tools, including pages visited, time on site, referring
          URLs, browser type, and approximate location.
        </p>

        <h2 className="font-display text-2xl text-ink">2. Cookies &amp; Tracking</h2>
        <p>
          We use cookies and similar technologies to remember preferences, measure site
          performance, and support affiliate link tracking so we can attribute purchases made
          through our links. You can disable cookies through your browser settings, though some
          site features may not function correctly as a result.
        </p>

        <h2 className="font-display text-2xl text-ink">3. Affiliate Links</h2>
        <p>
          When you click an affiliate link on LuxeNest, our retail partners may set their own
          cookies to track the referral. We do not control, and are not responsible for, the
          privacy practices of third-party retailers. Please review their respective privacy
          policies before making a purchase.
        </p>

        <h2 className="font-display text-2xl text-ink">4. How We Use Information</h2>
        <p>
          We use collected information to operate and improve the site, send newsletters to
          subscribers who opt in, respond to inquiries, and understand aggregate reader interests.
          We do not sell your personal information to third parties.
        </p>

        <h2 className="font-display text-2xl text-ink">5. Data Retention &amp; Security</h2>
        <p>
          We retain personal data only as long as necessary for the purposes described in this
          policy and apply reasonable technical safeguards to protect it. No method of
          transmission or storage is completely secure.
        </p>

        <h2 className="font-display text-2xl text-ink">6. Your Rights</h2>
        <p>
          Depending on your location (including under the UK GDPR, EU GDPR, and applicable US
          state privacy laws), you may have the right to access, correct, delete, or export your
          personal data, or to opt out of certain processing. To exercise these rights, contact us
          at privacy@luxenest.com.
        </p>

        <h2 className="font-display text-2xl text-ink">7. Children&rsquo;s Privacy</h2>
        <p>
          LuxeNest is not directed at children under 13, and we do not knowingly collect personal
          information from children.
        </p>

        <h2 className="font-display text-2xl text-ink">8. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. Material changes will be reflected by updating
          the &ldquo;Last updated&rdquo; date above.
        </p>

        <h2 className="font-display text-2xl text-ink">9. Contact Us</h2>
        <p>
          Questions about this policy can be sent to privacy@luxenest.com or by mail to LuxeNest
          Media Ltd., 228 Beacon Street, Suite 4, Boston, MA 02116, USA.
        </p>
      </div>
    </section>
  );
}
