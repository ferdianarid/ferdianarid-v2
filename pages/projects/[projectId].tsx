import { Fragment } from "react"
import PagesLayout from "@layouts/PagesLayout"
import { Meta } from "@modules/Meta"
import { NextPage } from "next"

const ProjectDetail: NextPage = () => {
    return (
        <Fragment>
            <Meta title="Detail Project" />
            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed text-neutral-10">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-48">

                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export async function getStaticPaths() {
    const result = await fetch("/api/experience").then((res) => res.json())
    const paths = result.map((item: any) => ({
        projectId: item.id
    }))

    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps() {
    // const result = await fetch("")
}

export default ProjectDetail