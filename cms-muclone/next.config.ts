import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["mui-file-input"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
