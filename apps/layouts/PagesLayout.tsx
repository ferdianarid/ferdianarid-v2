import { Fragment } from "react"
import Footer from "@components/organism/Footer"
import Navbar from "@components/organism/Navbar"

const PagesLayout = ({ children }: any) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}

export default PagesLayout