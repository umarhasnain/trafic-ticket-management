/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
       {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // <-- Add this
      }
      ,
      {
        protocol: "https",
        hostname: "images.pexels.com", // <-- add this line
      },
    ],
  },
};

export default nextConfig;

