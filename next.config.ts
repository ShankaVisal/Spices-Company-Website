import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
            {
        protocol: 'https',
        hostname: 'wtxtchqioofzyrzulhoz.supabase.co',
        port: '',
        pathname: '/**', // Allow all image paths
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**', // Allow all image paths
      },
      {
        protocol: 'https',
        hostname: 'images.alphacoders.com',
        port: '',
        pathname: '/**', // Allow all image paths
      },
      {
        protocol: 'https',
        hostname: 'images6.alphacoders.com',
        port: '',
        pathname: '/**', // Allow all image paths
      },
      {
        protocol: 'https',
        hostname: 'picfiles.alphacoders.com',
        port: '',
        pathname: '/**', // Allow all image paths
      },
    ],
  },
};

export default nextConfig;
