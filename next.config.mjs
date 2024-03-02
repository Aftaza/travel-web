/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "serve.aftaza.my.id"
            }
        ]
    }
};

export default nextConfig;
