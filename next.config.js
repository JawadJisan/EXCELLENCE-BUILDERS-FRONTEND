// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["i.ibb.co"],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
