import { ParagraphText } from "@components/atoms/Text"
import PagesLayout from "@layouts/PagesLayout"
import { NextPage } from "next"
import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

type Props = {
    statusCode?: number
}

const NotFound: NextPage<Props> = ({ statusCode = 404 }) => {
    return (
        <Fragment>
            <Head>
                <title>Page Not Found - Ferdian</title>
                <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content="Ferdian portfolio" />
                <meta name="keywords" content="Ferdian Portfolio Frontend" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <PagesLayout>
                <div className="w-full py-20 text-center px-6 md:px-24 bg-neutral-10 dark:bg-primary-pressed">
                    <div className="relative w-[250px] h-[200px] md:w-[530px] md:h-[400px] mx-auto">
                        <Image src="/images/pages/notfound.png" layout="fill" alt="notfound" />
                    </div>
                    <p className="text-center font-gilroy-medium mt-4 md:mt-12 text-neutral-10 text-sm">Error {statusCode}</p>
                    <h1 className="font-gilroy-bold text-5xl mt-2 text-center text-primary-pressed dark:text-neutral-10">Page Not Found</h1>
                    <ParagraphText isLight className="md:max-w-md mt-5 text-center mx-auto">Oops page you request is not found. Dont worry, you can go back to homepage</ParagraphText>
                    <Link href="/">
                        <button className="px-5 mt-5 py-3 rounded-lg bg-semantic-warning-main font-gilroy-bold text-neutral-10 text-sm">Back to Homepage</button>
                    </Link>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export default NotFound