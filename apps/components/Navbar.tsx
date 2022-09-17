import { useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import PostsCategory from "./Popover/PostsCategory"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full bg-primary-main">
      {/* eslint-disable-next-line quotes */}
      <div className={`py-[18px] tablet:block desktop:block relative z-40 tablet:z-auto desktop:z-auto px-6 tablet:px-10 tablet:bg-primary-main desktop:bg-primary-main desktop:px-[120px] max-w-[1440px] mx-auto ${isOpen ? "bg-neutral-10" : ""}`}>
        {/* eslint-disable-next-line quotes */}
        <div className={`w-full flex items-center tablet:border-none desktop:border-none justify-between ${isOpen ? "border-b border-neutral-30" : ""}`}>
          <Link href="/">
            <motion.div className="hover:cursor-pointer" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.2 }}>
              <h1 className="font-bold text-lg text-white">Logo</h1>
            </motion.div>
          </Link>
          <div className="ml-auto flex items-center space-between">
            <div className="hidden md:block">
              <div className="ml-16 flex items-center space-x-10 relative z-20">
                <Link href="/why">
                  <motion.a initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4 }} className=" text-white font-gilroy-medium text-text-m hover:cursor-pointer">
                  Navigation
                  </motion.a>
                </Link>
                <PostsCategory textColors="text-neutral-10" />
                <Link href="/jobs">
                  <motion.a href="/jobs" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className="text-white font-gilroy-medium text-text-m hover:cursor-pointer">
                  Navigation
                  </motion.a>
                </Link>
                <Link href="/">
                  <motion.button initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} className="text-primary-main font-gilroy-bold bg-secondary-main rounded-lg py-[15.5px] px-5 text-text-s hover:cursor-pointer flex items-center">
                  Navigation <span className="ml-2"><FaArrowRight size={16} /></span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:w-fit md:space-x-4 justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-headline-7 inline-flex md:hidden items-center justify-center p-2 rounded-md text-white focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen
                ? (
                  <svg width="24" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 1.9999C0.799805 1.11625 1.51615 0.399902 2.3998 0.399902H21.5998C22.4835 0.399902 23.1998 1.11625 23.1998 1.9999C23.1998 2.88356 22.4835 3.5999 21.5998 3.5999H2.3998C1.51615 3.5999 0.799805 2.88356 0.799805 1.9999Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 9.9999C0.799805 9.11625 1.51615 8.3999 2.3998 8.3999H11.9998C12.8835 8.3999 13.5998 9.11625 13.5998 9.9999C13.5998 10.8836 12.8835 11.5999 11.9998 11.5999H2.3998C1.51615 11.5999 0.799805 10.8836 0.799805 9.9999Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 17.9999C0.799805 17.1162 1.51615 16.3999 2.3998 16.3999H21.5998C22.4835 16.3999 23.1998 17.1162 23.1998 17.9999C23.1998 18.8836 22.4835 19.5999 21.5998 19.5999H2.3998C1.51615 19.5999 0.799805 18.8836 0.799805 17.9999Z" fill="white" />
                  </svg>
                )
                : (
                  <svg className="mb-5" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.868532 0.868532C1.49337 0.243693 2.50643 0.243693 3.13127 0.868532L9.9999 7.73716L16.8685 0.868532C17.4934 0.243693 18.5064 0.243693 19.1313 0.868532C19.7561 1.49337 19.7561 2.50643 19.1313 3.13127L12.2626 9.9999L19.1313 16.8685C19.7561 17.4934 19.7561 18.5064 19.1313 19.1313C18.5064 19.7561 17.4934 19.7561 16.8685 19.1313L9.9999 12.2626L3.13127 19.1313C2.50643 19.7561 1.49337 19.7561 0.868532 19.1313C0.243693 18.5064 0.243693 17.4934 0.868532 16.8685L7.73716 9.9999L0.868532 3.13127C0.243693 2.50643 0.243693 1.49337 0.868532 0.868532Z" fill="#001D6E" />
                  </svg>

                )}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref: any) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="py-2 flex flex-col mt-4 mb-7">
                <Link href="/why">
                  <motion.a initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4 }} className="hover:bg-secondary-hover text-primary-main py-[22.5px] px-4 font-gilroy-medium text-text-m hover:cursor-pointer">
                  Navigation
                  </motion.a>
                </Link>
                <PostsCategory textColors=" hover:bg-secondary-hover text-primary-main py-[22.5px] px-4 font-gilroy-medium text-text-m hover:cursor-pointer" />
                <Link href="/jobs">
                  <motion.a href="/jobs" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7 }} className="hover:bg-secondary-hover text-primary-main py-[22.5px] px-4 font-gilroy-medium text-text-m hover:cursor-pointer">
                  Navigation
                  </motion.a>
                </Link>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <Link href="https://calendly.com/halisoft">
                  <motion.button initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className=" text-neutral-10 font-gilroy-bold bg-primary-main rounded-lg py-[15.5px] px-5 text-text-s hover:cursor-pointer flex justify-center items-center">
                  Navigation <span className="ml-2"><FaArrowRight size={16} /></span>
                  </motion.button>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  )
}

export default Navbar