import { Fragment } from "react"
import { ParagraphText } from "@components/atoms/Text"
import Feedback from "@components/atoms/Field/Feedback"

const Footer = () => {
    return (
        <Fragment>
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-24 py-24 bg-neutral-20 dark:bg-primary-pressed">
                <div className="grid grid-cols-2 gap-y-10 md:grid-cols-5 md:gap-5">
                    <div className="col-span-2">
                        <h1 data-testid="footerHeading" className="font-gilroy-bold text-3xl text-primary-pressed dark:text-neutral-10">Portfolio.</h1>
                        <ParagraphText className="mt-5" data-test-id="footerSubheading">Frontend Developer based in Jombang. Focus developing micro interaction in the Frontend of Website. And also integrating with backend or CMS</ParagraphText>
                        <ParagraphText className="mt-10">&copy;2022 Ferdian Ahmad R</ParagraphText>
                    </div>
                    <div className="">
                        <h1 className="font-gilroy-bold text-xl text-primary-pressed dark:text-neutral-10">Discover</h1>
                        <div className="grid gap-y-4 mt-5">
                            <ParagraphText>Services</ParagraphText>
                            <ParagraphText>Projects</ParagraphText>
                            <ParagraphText>Experience</ParagraphText>
                            <ParagraphText>Post Category</ParagraphText>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-gilroy-bold text-xl text-primary-pressed dark:text-neutral-10">Social Media</h1>
                        <div className="grid gap-y-4 mt-5">
                            <ParagraphText>Github</ParagraphText>
                            <ParagraphText>LinkedIn</ParagraphText>
                            <ParagraphText>Facebook</ParagraphText>
                            <ParagraphText>Instagram</ParagraphText>
                        </div>
                    </div>
                    <Feedback />
                </div>
            </div>
        </Fragment>
    )
}

export default Footer