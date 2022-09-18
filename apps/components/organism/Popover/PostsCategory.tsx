import React, { Fragment } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Popover, Transition } from "@headlessui/react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const PostsCategory = ({ textColors }: any) => {
    const CategoryList = [
        { id: 1, title: "Web Development", pathUrl: "/web-development" },
        { id: 2, title: "Product Design", pathUrl: "/product-design" }
    ]
    return (
        <React.Fragment>
            <Popover className="">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className="flex items-center focus:outline-none text-headline-7 text-primary-border font-normal"
                        >
                            {/* eslint-disable-next-line quotes */}
                            <motion.a href="/category" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .6 }} className={`${textColors} flex items-center gap-x-2 font-gilroy-medium text-sm hover:cursor-pointer`}>
                                Category
                                {open ? <FaChevronUp /> : <FaChevronDown />}
                            </motion.a>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-50 mt-3 w-fit max-w-sm transform px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-2 bg-white p-2 grid-cols-1">
                                        {CategoryList.map((item) => (
                                            <Link key={item.id} href={item.pathUrl}>
                                                <a
                                                    className="text-primary-main font-gilroy-medium text-sm hover:cursor-pointer  rounded-md py-2 px-3 transition duration-150 ease-in-out hover:bg-secondary-surface focus:outline-none"
                                                >
                                                    {item.title}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </React.Fragment>
    )
}

export default PostsCategory