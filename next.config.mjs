/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'prod.spline.design'], // Add your domains here
    },
    experimental: {
        esmExternals: false,  // Disable ESM externals
    }
};

export default nextConfig;
