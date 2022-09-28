import { render } from "@testing-library/react"
import Switcher from "@components/atoms/Button/Switcher"

test("Switcher button must be rendered in document", () => {
    const { getByTestId } = render(<Switcher />)
    expect(getByTestId("switcher")).toBeInTheDocument()
})