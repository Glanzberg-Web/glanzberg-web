const configuredPath = process.env.NEXT_PUBLIC_BASE_PATH || "/glanzberg-web";
const basePath = configuredPath === "/" ? "" : configuredPath.replace(/\/$/, "");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
