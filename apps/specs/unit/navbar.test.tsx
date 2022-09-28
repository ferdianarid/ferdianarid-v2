import { render } from "@testing-library/react"
import NavbarAuth from "@components/NavbarAuth"

test("Navbar Auth and Switcher must be rendered in page", () => {
    const { getByTestId } = render(<NavbarAuth />)
    expect(getByTestId("navbarAuth")).toBeInTheDocument()
})

test("Navbar Auth must be have dark class", () => {
    const { getByTestId } = render(<NavbarAuth />)
    expect(getByTestId("navbarbrand")).toHaveClass(
        "text-primary-pressed", "dark:text-neutral-10"
    )
})