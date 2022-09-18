import type { AppProps } from "next/app"
import { Fragment, useEffect } from "react"
import NProgress from "nprogress"
import { useRouter } from "next/router"
import "@styles/globals.css"
import React from "react"
// import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // NProgress.configure({ trickleRate: 0.02, trickleSpeed: 800 })
  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Current path route: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router])
  return (
    <Fragment>
        {/* <Script
            type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/22700017.js"
        /> */}
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp