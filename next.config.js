const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com', 'sakeohyxietmvdzfvzjq.supabase.co'],
    // Para GitHub Pages, usar loader otimizado
    ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES && {
      loader: 'custom',
      loaderFile: './image-loader.js'
    })
  },
  i18n,
  // Configuração para GitHub Pages
  ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES && {
    output: 'export',
    trailingSlash: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
      unoptimized: true
    }
  })
}

module.exports = nextConfig
