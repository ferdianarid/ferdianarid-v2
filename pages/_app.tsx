import type { AppProps, NextWebVitalsMetric } from "next/app"
import { useRouter } from "next/router"
import Script from "next/script"
import { Fragment, useEffect } from "react"
import { Toaster } from "react-hot-toast"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import "@styles/globals.css"

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
      <Script
        type="text/javascript" id="hs-script-loader" async defer src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_CHAT_CREDENTIALS}.js`}
      />
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </Fragment>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp