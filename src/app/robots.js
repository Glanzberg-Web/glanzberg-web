export default function robots() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000")).replace(/\/$/, "");
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: base + "/sitemap.xml" };
}
