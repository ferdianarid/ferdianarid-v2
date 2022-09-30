/** @type {import('next').NextConfig} */
const createMDX = require("@next/mdx")
    // const isProduction = process.env.NODE_ENV === "production"

const nextConfig = {
    reactStrictMode: true,
    env: {
        serviceBackend: "http://localhost:8800", // example config port Backend
    },
    // assetPrefix: isProduction ? "" : "http://localhost:3000",
    i18n: {
        locales: ["id", "en", "fr", "de", "au", "uk"],
        defaultLocale: "en",
    },
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: ["tailwindui.com", "lh3.googleusercontent.com", "imdb-api.com", "m.media-amazon.com", "i.gr-assets.com", "s0.bukalapak.com", "placeimg.com", "pragprog.com", "ui-avatars.com", "flagcdn.com", "cdn-images-1.medium.com"],
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

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require("@sentry/nextjs")

const moduleExports = {
    // Your existing module.exports

    sentry: {
        // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
        // for client-side builds. (This will be the default starting in
        // `@sentry/nextjs` version 8.0.0.) See
        // https://webpack.js.org/configuration/devtool/ and
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
        // for more information.
        hideSourceMaps: true,

        // This option will automatically provide performance monitoring for Next.js
        // data-fetching methods and API routes, making the manual wrapping of API
        // routes via `withSentry` redundant.
        autoInstrumentServerFunctions: true,
    },
}

const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
module.exports = withMDX(nextConfig)