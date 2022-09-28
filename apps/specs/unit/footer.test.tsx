import { render, screen } from "@testing-library/react"
import Footer from "@components/organism/Footer"

test("Footer heading must be rendered in a page", () => {
    render(<Footer />)
    const footerHead = screen.getByTestId("footerHeading")
    expect(footerHead).toBeInTheDocument()
})

test("Footer subheading must be rendered in a page", () => {
    render(<Footer />)
    const textSubheading = "Frontend Developer based in Jombang. Focus developing micro interaction in the Frontend of Website. And also integrating with backend or CMS"
    const footerSubheading = screen.getByText(textSubheading)
    expect(footerSubheading).toBeInTheDocument()
})