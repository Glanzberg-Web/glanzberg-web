export const dynamic = "force-static";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://glanzberg-web.github.io/glanzberg-web").replace(/\/$/, "");

export default function sitemap() {
  const paths = ["/", "/work/", "/services/", "/pricing/", "/about/", "/contact/", "/privacy/"];
  return paths.map((path) => ({
    url: siteUrl + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
