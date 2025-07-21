/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fretboard',
  assetPrefix: '/fretboard/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
