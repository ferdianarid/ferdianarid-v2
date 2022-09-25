import { Fragment } from "react"
import Head from "next/head"
import PagesLayout from "@layouts/PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"

const Experience = () => {
    return (
        <Fragment>
            <Head>
                <title>Experience - Ferdian</title>
                <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content="Ferdian portfolio" />
                <meta name="keywords" content="Ferdian Portfolio Frontend" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <PagesLayout>
                <div className="w-full bg-primary-pressed py-10 px-6 md:px-24">
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
                        <div className="">
                            <PageText isLight>Experience.</PageText>
                            <ParagraphText>this is a project that you can view and learn anytime</ParagraphText>
                        </div>
                    </div>
                    <div className="w-full">

                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export default Experience