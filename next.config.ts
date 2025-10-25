import type { NextConfig } from 'next'
import './envConfig'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.API_URL!.replace('https://', ''),
      },
    ],
  },
}

export default nextConfig
