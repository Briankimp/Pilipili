import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.pinterest.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[name].css",
          chunkFilename: "static/css/[name].css",
        })
      );
    }
    return config;
  },
};

export default nextConfig;
