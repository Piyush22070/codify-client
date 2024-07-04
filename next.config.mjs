/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['assets.example.com', 'res.cloudinary.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dcyxn1qo5/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  