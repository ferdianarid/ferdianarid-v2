import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import Image from "next/image"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { LanguageList } from "apps/data/data"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import id from "locales/id"
import en from "locales/en"

const Language: React.FC = () => {
    const router = useRouter()
    const { locale } = router

    const lang = locale === "id" ? id : en

    const changeLanguage = (e: any) => {
        const locale = e.target.value
        router.push(router.pathname, router.asPath, { locale })
    }
    return (
        <React.Fragment>
            <Popover className="">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className="flex items-center focus:outline-none text-headline-7 text-neutral-10 font-gilroy-normal"
                        >
                            {/* eslint-disable-next-line quotes */}
                            <motion.a initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .6 }} className="flex items-center gap-x-2 rounded-lg py-3 font-gilroy-medium text-sm hover:cursor-pointer">
                                {lang.selectLang}
                                {open ? <FaChevronUp /> : <FaChevronDown />}
                            </motion.a>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-50"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-50"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute w-full z-20 mt-3 transform sm:px-0">
                                <div className="overflow-hidden w-fit rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-2 bg-white py-2 grid-cols-1">
                                        <select
                                            onChange={changeLanguage}
                                        >
                                            {LanguageList.map((item: any) => (
                                                <option
                                                    key={item.id}
                                                    value={item.value}
                                                    className="font-gilroy-medium text-primary-pressed text-sm hover:cursor-pointer py-3 px-3 transition duration-150 ease-in-out hover:bg-primary-hover focus:outline-none hover:text-neutral-10"
                                                >
                                                    <div className="flex items-center space-x-2 w-fit">
                                                        <div className="h-7 w-8">
                                                            <Image src={`/images/flags/${item.flags}.png`} height={28} width={32} alt={item.flags} />
                                                        </div>
                                                        <p className="text-sm font-gilroy-medium">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </React.Fragment >
    )
}

export default Language