/** @type {import('next').NextConfig} */
const createMDX = require("@next/mdx")
const isProduction = process.env.NODE_ENV === "production"

const nextConfig = {
    reactStrictMode: true,
    env: {
        serviceBackend: "http://localhost:8800", // example config port Backend
    },
    assetPrefix: isProduction ? "" : "http://localhost:3000",
    i18n: {
        locales: ["id-ID"],
        defaultLocale: "id-ID",
    },
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: ["tailwindui.com", "imdb-api.com", "m.media-amazon.com", "i.gr-assets.com", "s0.bukalapak.com", "placeimg.com", "pragprog.com", "ui-avatars.com", "flagcdn.com", "cdn-images-1.medium.com"],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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