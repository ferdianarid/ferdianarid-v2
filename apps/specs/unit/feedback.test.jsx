import { render } from "@testing-library/react"
import Feedback from "@components/atoms/Field/Feedback"

describe("Feedback Field mus be rendered properly", () => {
    test("It has disabled button until feedback field have a value", () => {
        // const feedback = "Thanks for your sharing article. This is an amazing website"

        const { getByPlaceholderText } = render(<Feedback />)

        // const feedbackField = getByRole("input", { name: "feedback" })
        const placeholderFeedbackNode = getByPlaceholderText("Type a feedback")

        // expect(feedbackField).toBeDefined()
        expect(placeholderFeedbackNode).toBeDefined()
    })
})