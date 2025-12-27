/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'blogger.googleusercontent.com',
      'images.unsplash.com',
      'hyken.com'
    ],
    unoptimized: true, // Importante para imagens externas no Vercel
  },
}

module.exports = nextConfig