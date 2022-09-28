import { Fragment } from "react"
import Footer from "@components/organism/Footer"
import Navbar from "@components/organism/Navbar"

const PagesLayout = ({ children }: any) => {
  return (
    <Fragment>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}

export default PagesLayout