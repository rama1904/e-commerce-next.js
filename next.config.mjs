/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'api-middleware-mcd.mcdonaldscupones.com',
          },
          {
            hostname: 'chevrolet.com.ar',
          },
        ],
      },
};

export default nextConfig;