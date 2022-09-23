import { Fragment } from 'react'
import Head from 'next/head'
import PagesLayout from '@layouts/PagesLayout'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import PostCard from '@components/organism/Cards/PostCard'

const Posts = ({ posts }: any) => {
    console.log(posts)
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
                    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
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
    const files = fs.readdirSync(path.join('apps', 'data', 'posts'))

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('apps', 'data', 'posts', filename))

        const { data: frontMatter } = matter(markdownWithMeta)

        const postId = filename.split('.')[0]

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