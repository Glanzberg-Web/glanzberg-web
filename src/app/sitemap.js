export default function sitemap() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000")).replace(/\/$/, "");
  const paths = ["/", "/work", "/services", "/pricing", "/about", "/contact", "/privacy"];
  return paths.map((path) => ({ url: base + path, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.6 }));
}
