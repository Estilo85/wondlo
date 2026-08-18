/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Skip API routes during static generation
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;