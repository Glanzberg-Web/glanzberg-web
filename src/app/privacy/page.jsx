import Link from "next/link";
import { Eyebrow } from "@/components/Shared";

export const metadata = {
  title: "Privacy Information",
  description: "How Glanzberg Web handles information submitted through our contact form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section legal-page">
      <div className="shell legal-shell">
        <Eyebrow>THE DETAILS</Eyebrow>
        <h1>Privacy information.</h1>
        <p className="legal-updated">Last updated: October 11, 2026</p>
        <p>When you use our inquiry form, we collect the information you choose to provide, such as your name, email address, business name, and project description.</p>
        <h2>What the information is used for</h2>
        <p>We use inquiry details to review and respond to your request, discuss potential services, and follow up about a project you contacted us about.</p>
        <h2>How messages are sent</h2>
        <p>Inquiry submissions are transmitted to our server and sent to our business inbox using Resend, a third-party email delivery provider. Information is therefore processed by that provider as needed to deliver the message.</p>
        <h2>Analytics and cookies</h2>
        <p>This website does not include a custom analytics or advertising tracker by default. Our hosting provider may process standard technical request data needed to operate and secure the service. If tracking tools are added in the future, this notice should be updated.</p>
        <h2>Contact about your information</h2>
        <p>If you want to ask about information you provided, please use the <Link href="/contact">contact page</Link>. This notice is a starting-point description and should be reviewed against the business’s final operating practices before launch.</p>
      </div>
    </section>
  );
}
