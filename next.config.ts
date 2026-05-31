import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "sprout24.com" },
      { protocol: "https", hostname: "projectgurukul.org" },
      { protocol: "https", hostname: "spherewms.com" },
      { protocol: "https", hostname: "www.codewithrandom.com" },
    ],
  },
};

export default nextConfig;
