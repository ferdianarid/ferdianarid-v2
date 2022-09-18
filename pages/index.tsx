import { HeadingText, ParagraphText } from "@components/atoms/Text"
import Stats from "@components/moleculs/Stats"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import PagesLayout from "@layouts/PagesLayout"
import { RecentProject } from "apps/data/recentProject"
import { statistics } from "apps/data/statistics"
import type { NextPage } from "next"
import Image from "next/image"
import { Fragment } from "react"

const Home: NextPage = () => {
  return (
    <Fragment>
      <PagesLayout>
        <div className="w-full bg-primary-pressed px-6 md:px-24 pt-14 md:pt-28 md:pb-48 pb-48 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            {/* <p className="text-md text-neutral-10 w-fit font-gilroy-bold bg-semantic-warning-main py-2 px-4 rounded-lg bg-opacity-30">Engineering</p> */}
            <HeadingText isLight className="my-7">Hi! I'm <span className="py-1 px-5 rounded-lg bg-primary-hover font-gilroy-bold bg-opacity-50">Ferdian</span></HeadingText>
            <ParagraphText isLight>Frontend Developer based in Jombang. Focus developing micro interaction in the Frontend of Website. And also integrating with backend or CMS</ParagraphText>
            <div className="mt-10 md:mt-20 flex items-center space-x-3">
            <button className="py-3 px-8 md:py-4 md:px-10 bg-semantic-warning-main  transition-colors text-neutral-10 rounded-full font-gilroy-bold text-heading-6">Lets chat me</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-28 md:mt-0 pl-0 md:pl-16">
            <div className="w-full border-8 border-neutral-10 h-full bg-semantic-warning-main relative rounded-3xl flex items-center justify-center pt-20 md:pt-5">
              <Image src="/images/ferdian.png" className="z-10" width={340} height={420} alt="ferdian" />
              <div className="absolute -top-16 right-0 h-40 w-64 ">
              </div>
              <div className="absolute left-2 rounded-xl bottom-12 h-fit z-20 w-fit bg-neutral-10 shadow-lg p-5">
<h1 className="font-gilroy-bold text-xl text-primary-main">Ferdian Ahmad R</h1>
<h1 className="font-gilroy-normal text-sm text-primary-main">Freelance Frontend</h1>
              </div>
              <div className="absolute right-4 -top-12 md:-right-16 rounded-xl md:top-16 h-fit z-20 w-fit bg-neutral-10 shadow-lg p-5">
              <Image src="/images/framer-logo.png" width={80} height={70} alt="react" />
              </div>
              <div className="absolute left-5 rounded-xl -top-14 h-fit z-20 w-fit bg-neutral-10 shadow-lg p-5 flex items-center justify-center">
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
        <HeadingText>About my background.</HeadingText>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-1/2 flex flex-col space-y-3">
          <ParagraphText>Since high school I have learned the basics of website programming, even though I majored in computer and network engineering at that time. but I'm curious about the website, there I decided to explore more about HTML CSS JS</ParagraphText>
          <ParagraphText>and when i graduated from Vocational High School, i tried to continue to pursue that field, i tried to find a university that has a focus on information technology</ParagraphText>
          </div>
        </div>

        <div className="w-full bg-neutral-10 px-6 md:px-24 py-10 md:py-16 flex justify-between flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image src="/images/chair.jpg" className="rounded-3xl" width={480} height={550} alt="chair" objectFit="cover" />
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <HeadingText>First Journey Experience.</HeadingText>
        <ParagraphText className="mt-5">First time focusing on the frontend world because of the interest in making a website that looks neat, interactive and good in terms of visuals.</ParagraphText>
        <ParagraphText className="mt-5">The first time I became a frontend was when there was a national event called 1000 digital startups, where I participated from the initial phase of seminars, workshops, hacksprints and bootcamps. There I was taught to form a team consisting of at least 3 stakeholders such as hustler (business), hipster (design) and hacker (engineer). I was handling it as a ui ux designer and also a frontend. There I learned a lot and I think that's where my journey begins</ParagraphText>
          </div>
        </div>

        <div className="w-full bg-primary-pressed px-6 mt-16 md:mt-0 md:px-24 py-24 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
        <HeadingText isLight className="text-center md:text-left">My Favourite Technology.</HeadingText>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 grid grid-cols-4 gap-5 items-center">
            <div className="">
<Image src="/images/react-logo.png" width={170} height={150} alt="react" />
            </div>
            <div className="">
<Image src="/images/tailwindcss.png" width={170} height={90} alt="react" />
            </div>
            <div className="">
<Image src="/images/framer-logo.png" width={170} height={150} alt="react" />
            </div>
            <div className="">
              <Image src="/images/typescript.png" width={170} height={150} alt="react" />
            </div>
          </div>
        </div>
        <div className="w-full px-6 md:px-24 py-24">
        <HeadingText className="text-center md:text-left">My Recent Project.</HeadingText>
        <ParagraphText className="text-center mt-5">This is my recent project three month ago</ParagraphText>
        <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-12 md:gap-8 mt-8">
          {RecentProject.map((item: any) => (
            <ProjectCard key={item.id} id={item.id} fileImage={item.fileImage} title={item.title} description={item.description} />
          ))}
        </div>
        </div>
      </PagesLayout>
    </Fragment>
  )
}

export default Home
