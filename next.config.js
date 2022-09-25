/** @type {import('next').NextConfig} */
const createMDX = require("@next/mdx")

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
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

module.exports = withMDX(nextConfig)