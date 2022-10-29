// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// // module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
//   nextConfig
// };

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
  };
  return nextConfig;
};
