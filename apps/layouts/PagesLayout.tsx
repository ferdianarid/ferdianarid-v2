import Navbar from "@components/Navbar"
import {Fragment} from "react"

const PagesLayout = ({children}: any) => {
  return (
    <Fragment>
        <Navbar />
        {children}
    </Fragment>
  )
}

export default PagesLayout