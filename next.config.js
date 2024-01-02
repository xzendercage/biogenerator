/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/xzendercage/biogenerator",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/xzendercage/biogenerator",
        permanent: false,
      },
    ];
  },
};
