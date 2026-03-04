import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ]
  // },
  ...(process.env.IS_NATIVE && {
    output: "export",
    images: { unoptimized: true },
  })
};

export default nextConfig;
