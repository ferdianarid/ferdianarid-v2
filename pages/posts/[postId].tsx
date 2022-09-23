import { Fragment } from 'react'
import Head from 'next/head'
import PagesLayout from '@layouts/PagesLayout'
import fs from 'fs'
import * as path from 'path'
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@components/md/MDXComponents'
import Image from 'next/image'
import { ContentHeading } from '@components/atoms/Text'
import { FaCalendarDay } from 'react-icons/fa'

const PostDetail = ({ frontMatter, mdxSource }: any) => {
    const { title, author, role, category, imageUrl, createdAt } = frontMatter
    return (
        <Fragment>
            <Head>
                <title>Detail Post - Ferdian</title>
                <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content="Ferdian portfolio" />
                <meta name="keywords" content="Ferdian Portfolio Frontend" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <PagesLayout>
                <div className="w-full bg-primary-pressed text-neutral-10 px-6 md:px-48">
                    <div className="w-full mb-5 pt-10">
                        <Image src={imageUrl} className='rounded-2xl' objectFit='cover' width={1000} height={300} alt="cover" />
                    </div>
                    <h3 className="font-gilroy-bold text-sm md:text-md text-primary-pressed bg-semantic-warning-main py-2 px-4 w-fit rounded-xl">{category}</h3>
                    <ContentHeading isLight className="my-8">{title}</ContentHeading>
                    <div className="flex flex-col pt-4 md:flex-row items-start md:items-center justify-between mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-hover">
                                <Image src="/images/photo.png" className='rounded-2xl' objectFit='cover' width={72} height={72} alt="cover" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <h3 className="font-gilroy-bold text-lg text-neutral-10">{author}</h3>
                                <h3 className="font-gilroy-normal text-sm text-neutral-10">{role}</h3>
                            </div>
                        </div>
                        <h3 className="font-gilroy-normal flex items-center text-sm mt-5 md:mt-0 text-neutral-10">
                            <FaCalendarDay size={24} className="mr-2" />
                            Created at {createdAt}
                        </h3>
                    </div>
                    <MDXRemote {...mdxSource} components={MDXComponents} />
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join("apps", "data", "posts"))

    const paths = files?.map(filename => ({
        params: {
            postId: filename.replace(".mdx", "")
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: any) {
    const { postId } = context.params
    const markdownWithMeta = fs.readFileSync(path.join("apps", "data", "posts", postId + ".mdx"))

    const { data: frontMatter, content } = matter(markdownWithMeta)

    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            postId,
            mdxSource
        }
    }
}

export default PostDetail