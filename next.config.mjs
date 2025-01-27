/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.morgan.edu',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'www.shutterstock.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
};

export default nextConfig;
