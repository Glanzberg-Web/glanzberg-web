const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://glanzberg-web.github.io/glanzberg-web").replace(/\/$/, "");

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: siteUrl + "/sitemap.xml",
  };
}
