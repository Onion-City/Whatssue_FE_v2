/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["whatssue.s3.ap-northeast-2.amazonaws.com"],
    // remotePatterns: ["https://whatssue.s3.ap-northeast-2.amazonaws.com/*"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      // issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
