/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://next-watch-coral.vercel.app/",
      },
    ],
  },
};
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Rejection:", reason);
});

export default nextConfig;
