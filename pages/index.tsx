import PagesLayout from "@layouts/PagesLayout"
import type { NextPage } from "next"
import { Fragment } from "react"

const Home: NextPage = () => {
  return (
    <Fragment>
      <PagesLayout>
        <h1 className="text-5xl font-gilroy-bold text-center mt-4 text-primary-main">Hello World</h1>
      </PagesLayout>
    </Fragment>
  )
}

export default Home
