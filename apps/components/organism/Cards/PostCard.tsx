import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IPostCard {
    imagePath: string
    postId: string
    title: string
    description: string
    category: string
}

const PostCard: React.FC<IPostCard> = ({ imagePath, postId, title, description, category }) => {
    return (
        <React.Fragment>
            <div className="w-full relative">
                <div className="h-[120px]">
                    <Image src={imagePath} alt="cover post" layout="fill" className="w-full object-cover object-center rounded-2xl shadow-md" />
                </div>

                <div className="flex absolute top-4 left-4 items-baseline">
                    <span className="bg-teal-100 text-teal-800 text-xs px-4 py-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        {category}
                    </span>
                </div>

                <div className="relative flex flex-col items-start justify-between bottom-4 px-4 mt-20">
                    <div className="bg-white p-5 rounded-2xl shadow-lg">
                        <h4 className="text-xl font-gilroy-bold leading-tight truncate">{title}</h4>

                        <div className="mt-1 mb-4">
                            <span className="text-gray-600 text-sm leading-[1.1]">{description}</span>
                        </div>
                        <Link href={`/posts/${postId}`}>
                            <button className="button-primary-sm">Read Post</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default PostCard