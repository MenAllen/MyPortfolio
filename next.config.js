/** @type {import('next').NextConfig} */
/* experimental is used due to errors with Link with <a> child */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
}

module.exports = nextConfig
