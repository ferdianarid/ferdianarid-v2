import Head from "next/head"
import { useRouter } from "next/router"

const defaultMeta = {
    url: "https://ferdianarid.com",
    title: "Ferdian Ahmad R",
    siteName: "ferdianarid.com",
    description: "Ferdian Ahmad R Portfolio Frontend",
    robots: "personal identification",
    type: "product",
}

interface MetaFunction {
    title: string
    siteName?: string
    description?: string
    url?: string
    type?: string
    robots?: string
}

export const Meta: React.FC<MetaFunction> = ({ title }) => {
    const router = useRouter()

    const meta: MetaFunction = {
        ...defaultMeta,
    }

    return (
        <Head>
            <title>{title} - Frontend Engineer</title>
            <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="description" content="Ferdian portfolio" />
            <meta name="keywords" content="Ferdian Portfolio Frontend" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`${meta.url}${router.asPath}`} />
            <link rel="canonical" href={`${meta.url}${router.asPath}`} />
            <meta name="robots" content={meta.robots} />
            {/* Open Graph */}
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content={meta.siteName} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            {/* <meta name="image" property="og:image" content={meta.image} /> */}
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ferdianarid" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            {/* <meta name="twitter:image" content={meta.image} /> */}
        </Head>
    )
}