import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://glanzberg-web.github.io/glanzberg-web";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/glanzberg-web";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl.replace(/\/$/, "") + "/"),
  title: {
    default: "Glanzberg Web | Websites built to mean business",
    template: "%s | Glanzberg Web",
  },
  description: "Thoughtful websites, practical redesigns, and website updates for businesses ready to make a stronger first impression.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Glanzberg Web",
    title: "Glanzberg Web | Websites built to mean business",
    description: "Websites that look the part and help customers take the next step.",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: `${basePath}/favicon.svg` },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Glanzberg Web",
    url: siteUrl,
    description: "Website design, redesign, and maintenance services.",
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
