/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'build-next-static',
  swcMinify: true,
  reactStrictMode: true,
  env: {
    app_name: 'XXX',
  },
};

module.exports = nextConfig;
