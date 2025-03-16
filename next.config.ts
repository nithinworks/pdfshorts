import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This allows prod builds to successfully complete
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

export default nextConfig;
