import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Autorise Next.js à charger des images depuis Sanity
  },
  trailingSlash: false, // Désactive les slashs de fin d'URL
};

export default nextConfig;
