/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'blog.koin.com.br',
      'scontent.fssz1-1.fna.fbcdn.net',
    ],
  },
}

module.exports = nextConfig
