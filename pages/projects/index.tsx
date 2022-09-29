import { Fragment, useRef } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import PagesLayout from "@layouts/PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"
import { AllProject } from "apps/data/recentProject"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import { FaSearch } from "react-icons/fa"
import id from "@locales/id"
import en from "@locales/en"
import { Meta } from "@modules/Meta"

const Projects: NextPage = () => {
    const queryRefs = useRef<HTMLInputElement>(null)

    const router = useRouter()
    const { locale } = router

    const lang = locale === "id" ? id : en

    const queryHandler = () => {
        if (queryRefs.current !== null) {
            const queryKey = queryRefs.current.value
            return queryKey
        }
    }
    return (
        <Fragment>
            <Meta title="Projects" />
            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
                    <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
                            <div className="">
                                <PageText isLight>{lang.headerProject}</PageText>
                                <ParagraphText>{lang.subheaderProject}</ParagraphText>
                            </div>
                            <div className="flex items-center">
                                <input ref={queryRefs} className="bg-slate-100 dark:bg-primary-hover text-heading-6 py-2 px-4 rounded-l-lg text-neutral-10 focus:outline-none focus:border-2 focus:border-semantic-warning-main" type="text" placeholder={lang.searchbarProject} name="query" id="query" />
                                <button onClick={queryHandler} className="py-3 text-heading-6 text-neutral-10 px-4 rounded-r-lg bg-slate-100 dark:bg-primary-hover"><FaSearch className="text-neutral-40 dark:text-neutral-10" size={21} /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-12 md:gap-8 mt-8">
                            {AllProject.map((item: any) => (
                                <ProjectCard liveBadge isLight key={item.id} id={item.id} fileImage={item.fileImage} title={item.title} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export default Projects