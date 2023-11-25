/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.wpbeginner.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
