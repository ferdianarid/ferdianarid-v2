import { Fragment } from 'react'
import { ParagraphText } from '@components/atoms/Text'

const Footer = () => {
    return (
        <Fragment>
            <div className="w-full px-6 md:px-24 py-24 bg-primary-pressed">
                <div className="grid grid-cols-2 gap-y-10 md:grid-cols-5 md:gap-5">
                    <div className="col-span-2">
                        <h1 className="font-gilroy-bold text-3xl text-neutral-10">Portfolio.</h1>
                        <ParagraphText className="mt-5">Frontend Developer based in Jombang. Focus developing micro interaction in the Frontend of Website. And also integrating with backend or CMS</ParagraphText>
                        <ParagraphText className="mt-10">&copy;2022 Ferdian Ahmad R</ParagraphText>
                    </div>
                    <div className="">
                        <h1 className="font-gilroy-bold text-xl text-neutral-10">Discover</h1>
                        <div className="grid gap-y-4 mt-5">
                            <ParagraphText>Services</ParagraphText>
                            <ParagraphText>Projects</ParagraphText>
                            <ParagraphText>Experience</ParagraphText>
                            <ParagraphText>Post Category</ParagraphText>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-gilroy-bold text-xl text-neutral-10">Social Media</h1>
                        <div className="grid gap-y-4 mt-5">
                            <ParagraphText>Github</ParagraphText>
                            <ParagraphText>LinkedIn</ParagraphText>
                            <ParagraphText>Facebook</ParagraphText>
                            <ParagraphText>Instagram</ParagraphText>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-gilroy-bold text-xl text-neutral-10">Feedback</h1>
                        <div className="mt-5">
                            <ParagraphText>Give me a feedback for make this web more better</ParagraphText>
                            <input type="text" name="feedback" id="feedback" placeholder="Type a feedback" className="mt-4 rounded-lg text-md focus:outline-semantic-warning-main border-none py-2 px-4" />
                            <button className="py-2 px-4 rounded-lg bg-semantic-warning-main text-neutral-10 text-md mt-3 font-gilroy-semibold">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer