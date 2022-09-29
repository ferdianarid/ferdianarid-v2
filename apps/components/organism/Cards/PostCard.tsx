import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaStar } from "react-icons/fa"
import { IPostCard } from "@interfaces/index"

const PostCard: React.FC<IPostCard> = ({ imagePath, postId, title, description, category }) => {
    return (
        <React.Fragment>
            <div className="w-full p-4">
                <div className="h-40 relative">
                    <Image src={imagePath} alt="cover post" layout="fill" className="w-full object-cover object-center rounded-2xl shadow-md" />

                    <div className="flex absolute top-4 left-4 items-baseline">
                        <span className="bg-teal-100 text-primary-main uppercase text-xs px-4 py-2 inline-block rounded-full font-gilroy-bold tracking-wide">
                            {category}
                        </span>
                    </div>

                    <div className="flex absolute top-4 right-4 items-baseline">
                        <span className="bg-teal-100 flex items-center text-primary-main uppercase text-xs px-4 py-2 rounded-full font-gilroy-bold tracking-wide">
                            <FaStar size={16} className="mr-1 text-semantic-warning-main" /> 5.0
                        </span>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-auto -mt-6 justify-center">
                    <div className="flex flex-col items-start justify-between z-20">
                        <div className="bg-white p-5 rounded-2xl shadow-lg">
                            <h4 className="text-xl font-gilroy-bold leading-tight">{title}</h4>

                            <div className="mt-1 mb-4">
                                <span className="text-gray-600 text-sm leading-[1.1]">{description}</span>
                            </div>
                            <Link href={`/posts/${postId}`}>
                                <button className="button-primary-sm">Read Post</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default PostCard