import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@turant/shared-types', '@turant/shared-validation', '@turant/ui'],
};

export default nextConfig;
