import fs from "fs"
import * as path from "path"
import { Fragment, useRef } from "react"
import { NextPage } from "next/types"
import matter from "gray-matter"
import { FaSearch } from "react-icons/fa"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import PostCard from "@components/organism/Cards/PostCard"
import { PageText, ParagraphText } from "@components/atoms/Text"

const Posts: NextPage = ({ posts }: any) => {
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
            <Meta title="Posts" />
            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
                    <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
                            <div className="">
                                <PageText isLight>All Posts.</PageText>
                                <ParagraphText>this is a post that you can read anytime</ParagraphText>
                            </div>
                            <div className="flex items-center">
                                <input ref={queryRefs} className="bg-slate-100 dark:bg-primary-hover text-heading-6 py-2 px-4 rounded-l-lg text-neutral-10 focus:outline-none focus:border-2 focus:border-semantic-warning-main" type="text" placeholder="Search Post" name="query" id="query" />
                                <button onClick={queryHandler} className="py-3 text-heading-6 text-neutral-10 px-4 rounded-r-lg bg-slate-100 dark:bg-primary-hover"><FaSearch className="text-neutral-40 dark:text-neutral-10" size={21} /></button>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-3">
                            {posts.map((post: any, idx: number) => (
                                <PostCard key={idx} imagePath={post.frontMatter.imageUrl} postId={post.postId} title={post.frontMatter.title} description={post.frontMatter.description} category={post.frontMatter.category} />
                            ))}
                        </div>
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