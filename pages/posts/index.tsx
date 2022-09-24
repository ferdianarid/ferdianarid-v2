import { Fragment, useRef } from "react"
import Head from "next/head"
import PagesLayout from "@layouts/PagesLayout"
import fs from "fs"
import * as path from "path"
import matter from "gray-matter"
import PostCard from "@components/organism/Cards/PostCard"
import { PageText, ParagraphText } from "@components/atoms/Text"
import { FaSearch } from "react-icons/fa"

const Posts = ({ posts }: any) => {
    const queryRefs = useRef<HTMLInputElement>(null)

    const queryHandler = (items: any) => {
        if (queryRefs.current !== null) {
            const queryKey = queryRefs.current.value
            const result = items.filter((text: any) => text.frontMatter.title).includes(queryKey)
            return result
        }
    }
    return (
        <Fragment>
            <Head>
                <title>Posts - Ferdian</title>
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
                            <PageText isLight>All Posts.</PageText>
                            <ParagraphText>this is a post that you can read anytime</ParagraphText>
                        </div>
                        <div className="flex items-center">
                            <input ref={queryRefs} className="bg-primary-hover text-heading-6 py-2 px-4 rounded-l-lg text-neutral-10 focus:outline-none focus:border-2 focus:border-semantic-warning-main" type="text" placeholder="Search Post" name="query" id="query" />
                            <button onClick={queryHandler} className="py-3 text-heading-6 text-neutral-10 px-4 rounded-r-lg bg-primary-hover"><FaSearch size={21} /></button>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-3">
                        {posts.map((post: any, idx: number) => (
                            <PostCard key={idx} imagePath={post.frontMatter.imageUrl} postId={post.postId} title={post.frontMatter.title} description={post.frontMatter.description} category={post.frontMatter.category} />
                        ))}
                    </div>
                </div>
            </PagesLayout>
        </Fragment >
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("apps", "data", "posts"))

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join("apps", "data", "posts", filename))

        const { data: frontMatter } = matter(markdownWithMeta)

        const postId = filename.split(".")[0]

        return {
            frontMatter,
            postId
        }
    })

    return {
        props: {
            posts
        }
    }
}

export default Posts