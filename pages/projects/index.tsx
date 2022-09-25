import { Fragment, useRef } from "react"
import Head from "next/head"
import PagesLayout from "@layouts/PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"
import { AllProject } from "apps/data/recentProject"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import { FaSearch } from "react-icons/fa"

const Projects = () => {
    const queryRefs = useRef<HTMLInputElement>(null)

    const queryHandler = () => {
        if (queryRefs.current !== null) {
            const queryKey = queryRefs.current.value
            return queryKey
        }
    }
    return (
        <Fragment>
            <Head>
                <title>Projects - Ferdian</title>
                <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content="Ferdian portfolio" />
                <meta name="keywords" content="Ferdian Portfolio Frontend" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <PagesLayout>
                <div className="w-full bg-primary-pressed py-10 px-6 md:px-24">
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
                        <div className="">
                            <PageText isLight>All Project.</PageText>
                            <ParagraphText>This is a project that you can view and learn anytime</ParagraphText>
                        </div>
                        <div className="flex items-center">
                            <input ref={queryRefs} className="bg-primary-hover text-heading-6 py-2 px-4 rounded-l-lg text-neutral-10 focus:outline-none focus:border-2 focus:border-semantic-warning-main" type="text" placeholder="Search Project" name="query" id="query" />
                            <button onClick={queryHandler} className="py-3 text-heading-6 text-neutral-10 px-4 rounded-r-lg bg-primary-hover"><FaSearch size={21} /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-12 md:gap-8 mt-8">
                        {AllProject.map((item: any) => (
                            <ProjectCard liveBadge isLight key={item.id} id={item.id} fileImage={item.fileImage} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export default Projects