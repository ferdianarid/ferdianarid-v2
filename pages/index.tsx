import { Fragment } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { statistics } from "apps/data/statistics"
import { RecentProject } from "apps/data/recentProject"
import PagesLayout from "@layouts/PagesLayout"
import Stats from "@components/moleculs/Stats"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import { HeadingText, ParagraphText } from "@components/atoms/Text"
import { TechList } from "apps/data/data"
import TechIcon from "@components/atoms/Images/TechIcon"
import { useRouter } from "next/router"
import en from "@locales/en"
import id from "@locales/id"

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router

  const lang = locale === "id" ? id : en
  return (
    <Fragment>
      <Head>
        <title>Ferdian - Frontend Engineer</title>
        <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Ferdian portfolio" />
        <meta name="keywords" content="Ferdian Portfolio Frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PagesLayout>
        <div className="w-full bg-neutral-10 dark:bg-primary-pressed px-6 md:px-24 pt-14 md:pt-28 md:pb-48 pb-48 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <p className="text-md text-neutral-10 w-fit font-gilroy-bold bg-primary-pressed dark:bg-primary-hover dark:bg-opacity-30 py-2 px-4 rounded-lg">{lang.badge}</p>
            <h1 className="my-7 text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-5xl md:text-6xl">{lang.greeting} <span className="text-transparent rounded-lg bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400 font-gilroy-bold bg-opacity-50">Ferdian</span></h1>
            <ParagraphText isLight>{lang.subgreeting}</ParagraphText>
            <div className="mt-10 md:mt-20 flex items-center space-x-3">
              <button className="button">{lang.email}</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-28 md:mt-0 pl-0 md:pl-16">
            <div className="w-full border-8 border-primary-pressed dark:border-neutral-10 h-full bg-gradient-to-r from-purple-600  to-yellow-400 relative rounded-3xl flex items-center justify-center pt-20 md:pt-5">
              <Image src="/images/ferdian.png" className="z-10" width={340} height={420} alt="ferdian" />
              <div className="absolute -top-16 right-0 h-40 w-64 ">
              </div>
              <div className="absolute left-2 rounded-xl bottom-12 h-fit z-20 w-fit bg-neutral-10 shadow-lg p-5">
                <h1 className="font-gilroy-bold text-xl text-primary-main">Ferdian Ahmad R</h1>
                <h1 className="font-gilroy-normal text-sm text-primary-main">Freelance Frontend</h1>
              </div>
              <div className="absolute right-4 -top-14 md:-right-10 rounded-xl md:top-16 h-fit z-20 w-fit bg-neutral-10 shadow-lg p-4">
                <Image src="/images/framer-logo.png" width={80} height={70} alt="react" />
              </div>
              <div className="absolute left-5 rounded-xl -top-14 h-fit z-10 w-fit bg-neutral-10 shadow-lg p-5 flex items-center justify-center">
                <Image src="/images/react-logo.png" width={80} height={70} alt="react" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 py-10 px-6 md:px-24 -mt-28 md:-mt-16 shadow-xl rounded-3xl max-w-[85%] relative z-20 shadow-slate-200 mx-auto">
          {statistics.map((item: any) => (
            <Stats key={item.id} count={item.count} title={item.title} />
          ))}
        </div>

        <div className="w-full bg-neutral-10 px-6 md:px-24 py-24 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <HeadingText>{lang.background}</HeadingText>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-1/2 flex flex-col space-y-3">
            <ParagraphText>{lang.descriptionBackground1}</ParagraphText>
            <ParagraphText>{lang.descriptionBackground2}</ParagraphText>
          </div>
        </div>

        <div className="w-full bg-neutral-10 px-6 md:px-24 py-10 md:py-16 flex justify-between flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image src="/images/chair.webp" className="rounded-3xl" width={480} height={550} alt="chair" objectFit="cover" />
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <HeadingText>{lang.journey}</HeadingText>
            <ParagraphText className="mt-5">{lang.descriptionJourney1}</ParagraphText>
            <ParagraphText className="mt-5">{lang.descriptionJourney2}</ParagraphText>
          </div>
        </div>

        <div className="w-full bg-neutral-20 dark:bg-primary-pressed px-6 mt-16 md:mt-0 md:px-24 py-24 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <HeadingText isLight className="text-center md:text-left">{lang.technology}</HeadingText>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 grid grid-cols-4 gap-5 items-center">
            {TechList.map((item: any) => (
              <TechIcon key={item.id} title={item.title} width={170} height={item.height} alt={item.title} />
            ))}
          </div>
        </div>
        <div className="w-full px-6 md:px-24 py-24">
          <HeadingText className="text-center">{lang.recentProject}</HeadingText>
          <ParagraphText className="text-center mt-5">{lang.descriptionRecentProject}</ParagraphText>
          <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-12 md:gap-6 mt-8">
            {RecentProject.map((item: any) => (
              <ProjectCard key={item.id} id={item.id} fileImage={item.fileImage} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
        <div className="w-full bg-neutral-20 dark:bg-primary-pressed md:h-[350px] md:-mt-[300px]"></div>
        <div className="w-full bg-neutral-10 h-[400px]"></div>
      </PagesLayout>
    </Fragment>
  )
}

export default Home
