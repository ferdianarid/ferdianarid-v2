import { HeadingText, ParagraphText } from "@components/atoms/Text"
import Stats from "@components/moleculs/Stats"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import PagesLayout from "@layouts/PagesLayout"
import { RecentProject } from "apps/data/recentProject"
import { statistics } from "apps/data/statistics"
import type { NextPage } from "next"
import { Fragment } from "react"

const Home: NextPage = () => {
  return (
    <Fragment>
      <PagesLayout>
        <div className="w-full bg-primary-pressed px-24 pt-32 pb-48 flex justify-between">
          <div className="w-1/2">
            <p className="text-md text-primary-main w-fit font-gilroy-bold bg-semantic-warning-main py-2 px-4">Engineering</p>
            <HeadingText isLight className="my-7">Hi! I'm <span className="py-1 px-5 rounded-lg bg-primary-hover bg-opacity-50">Ferdian</span></HeadingText>
            <ParagraphText isLight>Frontend Developer based in Jombang. Focus developing micro interaction in the Frontend of Website. And also integrating with backend or CMS</ParagraphText>
            <div className="mt-10 flex items-center space-x-3">
            <button className="py-3 px-10 bg-primary-pressed border hover:text-primary-main hover:border-primary-main border-neutral-10 transition-colors hover:bg-neutral-10 text-neutral-10 font-bold text-heading-5">Email Me</button>
            <button className="py-3 px-10 transition-colors  text-neutral-10  font-bold text-heading-5">Projects</button>
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <div className="w-full h-full bg-neutral-10 relative">
              <div className="absolute -top-10 -right-10 h-20 w-72 bg-semantic-warning-main"></div>
              <div className="absolute -left-10 bottom-20 h-fit w-fit bg-neutral-10 shadow-lg p-5">
<h1 className="font-gilroy-bold text-xl text-primary-main">Ferdian Ahmad R</h1>
<h1 className="font-gilroy-normal text-sm text-primary-main">Freelance Frontend</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white grid grid-cols-4 gap-8 py-10 px-24 -mt-16 shadow-xl max-w-[85%] relative z-20 shadow-slate-200 mx-auto">
        {statistics.map((item: any) => (
                <Stats key={item.id} count={item.count} title={item.title} />
              ))}
        </div>

        <div className="w-full bg-neutral-10 px-24 py-24 flex justify-between">
          <div className="w-1/2">
        <h1 className="font-extrabold text-7xl text-primary-pressed">My Awesome Portfolio.</h1>
          </div>
          <div className="w-1/2 flex flex-col space-y-3">
          <ParagraphText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati perferendis dolor rem incidunt? Alias perspiciatis, facilis tempore voluptatibus magni unde! Maxime, earum? Dignissimos, quia. Veniam totam esse nobis!</ParagraphText>
          <ParagraphText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati perferendis dolor rem incidunt? Alias perspiciatis, facilis tempore voluptatibus magni unde! Maxime, earum? Dignissimos, quia. Veniam totam esse nobis!</ParagraphText>
          </div>
        </div>

        <div className="w-full bg-primary-pressed px-24 py-24 flex justify-between">
          <div className="w-1/2">
        <h1 className="font-extrabold text-7xl text-neutral-10">My Awesome Portfolio.</h1>
          </div>
          <div className="w-1/2 flex flex-col space-y-3">
          <ParagraphText isLight>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati perferendis dolor rem incidunt? Alias perspiciatis, facilis tempore voluptatibus magni unde! Maxime, earum? Dignissimos, quia. Veniam totam esse nobis!</ParagraphText>
          <ParagraphText isLight>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati perferendis dolor rem incidunt? Alias perspiciatis, facilis tempore voluptatibus magni unde! Maxime, earum? Dignissimos, quia. Veniam totam esse nobis!</ParagraphText>
          </div>
        </div>
        <div className="w-full px-24 py-24">
        <h1 className="font-extrabold text-7xl text-primary-main text-center">My Recent Project.</h1>
        <ParagraphText className="text-center mt-5">This is my recent project three month ago</ParagraphText>
        <div className="grid grid-cols-3 h-full gap-8 mt-8">
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
