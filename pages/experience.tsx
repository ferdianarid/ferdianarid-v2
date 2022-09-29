import { Fragment } from "react"
import { NextPage } from "next/types"
import { useRouter } from "next/router"
import PagesLayout from "@layouts/PagesLayout"
import { DataExperience } from "@data/experience"
import { PageText, ParagraphText } from "@components/atoms/Text"
import ExperienceCard from "@components/organism/Cards/ExperienceCard"
import id from "@locales/id"
import en from "@locales/en"
import { Meta } from "@modules/Meta"

const Experience: NextPage = () => {
    const router = useRouter()
    const { locale } = router

    const lang = locale === "id" ? id : en
    return (
        <Fragment>
            <Meta title="Experience" />
            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
                    <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
                            <div className="">
                                <PageText isLight>{lang.headerExperience}</PageText>
                                <ParagraphText>{lang.subheaderExperience}</ParagraphText>
                            </div>
                        </div>
                        <div className="w-full">
                            {DataExperience.map((experience: any) => (
                                <ExperienceCard
                                    key={experience.id}
                                    position={experience.position}
                                    image={experience.image}
                                    startDate={experience.startDate}
                                    endDate={experience.endDate}
                                    company={experience.company}
                                    duration={experience.duration}
                                    workStatus={experience.workStatus}
                                    location={experience.location}
                                    description={experience.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export default Experience