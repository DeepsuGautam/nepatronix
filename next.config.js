/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    serverActions: {
      bodySizeLimit: "300mb",
    },
  },
};

module.exports = config;
