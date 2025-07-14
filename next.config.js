/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Handle www redirects to prevent duplicate content
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.logonova.rs',
          },
        ],
        destination: 'https://logonova.rs/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 