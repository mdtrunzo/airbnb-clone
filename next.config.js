/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['1000logos.net', 'links.papareact.com', 'cdn4.iconfinder.com'],
  },
  env: {
    mapBox_key: 'pk.eyJ1IjoibXRydW56byIsImEiOiJjbDliNWhvc3IxZHpjM3ZtdmJhMnQxczQ1In0.ugMRdRwqKB7oBnIpt7VeaA'
  }
}

module.exports = nextConfig
