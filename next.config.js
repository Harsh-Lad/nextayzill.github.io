/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['127.0.0.1','img.icons8.com'],
  },
}

module.exports = nextConfig
