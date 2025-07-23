import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  srcDir: "src", // ✅ this is all you need to make /src/app/page.tsx work
};

export default nextConfig;
