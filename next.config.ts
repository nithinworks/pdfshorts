import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  // Remove swcMinify: true,
  output: "standalone",
};

export default nextConfig;
