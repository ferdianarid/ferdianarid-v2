import React, { Fragment, useRef } from "react"
import { ParagraphText } from "../Text"

const Feedback: React.FC = () => {
    const feedFieldReff = useRef<HTMLInputElement>(null)

    const feedbackHandler = (feed: any) => {
        if (feedFieldReff.current !== null) {
            console.log(feed)
        }
    }
    return (
        <Fragment>
            <div className="">
                <h1 className="font-gilroy-bold text-xl text-primary-pressed dark:text-neutral-10">Feedback</h1>
                <div className="mt-5">
                    <ParagraphText>Give me a feedback for make this web more better</ParagraphText>
                    <input type="text" name="feedback" id="feedback" ref={feedFieldReff} placeholder="Type a feedback" className="mt-4 rounded-lg text-md focus:outline-semantic-warning-main border-none py-2 px-4 w-full" />
                    <button id="submitButton" onClick={feedbackHandler} className="py-2 px-4 rounded-lg bg-semantic-warning-main text-neutral-10 text-md mt-3 font-gilroy-semibold">Submit Feedback</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Feedback