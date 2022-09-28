import { render } from "@testing-library/react"
import Stats from "@components/moleculs/Stats"

describe("Stats Card must be rendered properly", () => {
    test("It render the count and title property", () => {
        const props = {
            count: 222,
            title: "Product"
        }
        const { getByText } = render(<Stats {...props} />)
        const countNode = getByText(props.count)
        const titleNode = getByText(props.title)

        expect(countNode).toBeDefined()
        expect(titleNode).toBeDefined()
    })
})

describe("Stats Card must be render proper with dynamic data", () => {
    test("It render the array of count and title property", () => {
        const statsList = {
            id: 3, count: 55, title: "Daily Active Users"
        }

        const { getByText } = render(<Stats count={statsList.count} title={statsList.title} />)

        expect(getByText(55)).toBeDefined()
    })
})