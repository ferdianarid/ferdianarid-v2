/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        serviceBackend: "http://localhost:8800", // example config port Backend
    },
    // example rewrites url when path is matching
    async rewrites() {
        return [{
            source: "/posts/",
            destination: "/posts?results-all"
        }, ]
    },
}

module.exports = nextConfig