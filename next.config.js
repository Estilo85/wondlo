/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Important for Cloudflare
  trailingSlash: true,
};

module.exports = nextConfig;