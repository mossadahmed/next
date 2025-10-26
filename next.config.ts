/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'cdn.shopify.com',
      'images.unsplash.com',
      'fakestoreapi.com' // ← أضف النطاق هنا فقط
    ],
  },

  env: {
    NEXT_PUBLIC_API_URL: "https://your-api.example.com",
  },

  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
