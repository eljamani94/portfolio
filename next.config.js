// Next.js configuration file
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  //basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
