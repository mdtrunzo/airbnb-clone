/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['1000logos.net', 'links.papareact.com'],
  },
}

module.exports = nextConfig
