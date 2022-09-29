import { Fragment, SetStateAction, useState, useEffect } from "react"
import Image from "next/image"
import { NextPage } from "next/types"
import { useRouter } from "next/router"
import { Meta } from "@modules/Meta"
import useLogout from "@hooks/useLogout"
import { auth } from "@firebase/firebaseConfig"
import PagesLayout from "@layouts/PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"
import id from "@locales/id"
import en from "@locales/en"

const Account: NextPage = () => {
    const router = useRouter()
    const { locale } = router

    const lang = locale === "id" ? id : en

    const [ userInfo, setUserInfo ] = useState<SetStateAction<any>>({})
    const [ currentUser, setCurrentUser ] = useState<SetStateAction<any>>("")

    useEffect(() => {
        GetUserInformation()
        GetCurrentUserSignedIn()
    })

    const GetCurrentUserSignedIn = () => {
        try {
            const user = auth.currentUser
            if (user) {
                if (user != null) {
                    setCurrentUser(user.email)
                }
            }

            console.log(user)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const GetUserInformation = () => {
        try {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    setUserInfo(user)
                }
            })
        } catch (error: any) {
            console.log(`${error.code} ${error.message}`)
        }
    }

    const { SignOutAction, signOutLoading } = useLogout()

    return (
        <Fragment>
            <Meta title="Account" />
            <PagesLayout>
                <div className="w-full bg-primary-pressed">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-24 pt-14 md:py-14 md:pb-48">
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
                            <div className="">
                                <PageText isLight>{lang.headerAccount}</PageText>
                                <ParagraphText>{lang.subheaderAccount}</ParagraphText>
                            </div>
                        </div>
                        {!userInfo || userInfo === null || currentUser === null ? (
                            <h1 className="font-gilroy-bold text-2xl text-neutral-10">No one user is signed in</h1>
                        ) : (
                            <Fragment>
                                {/* Profile */}
                                <div className="w-full">
                                    <div className="flex flex-col md:flex-row md:space-x-20">
                                        <div className="relative w-[220px] h-[220px]">
                                            <Image src={userInfo.photoURL} className="rounded-full" layout="fill" alt="photo" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                            <div className="col-span-2">
                                                <div className="flex flex-col space-y-1">
                                                    <p className="font-gilroy-medium text-neutral-40">Nickname</p>
                                                    <h1 className="font-gilroy-bold text-neutral-10 text-xl">{userInfo.displayName}</h1>
                                                </div>

                                                <div className="flex flex-col space-y-1 mt-6">
                                                    <div className="flex items-center space-x-2">
                                                        <p className="font-gilroy-medium text-neutral-40">Email</p>
                                                        <p className="text-xs py-1 px-2 rounded-full bg-semantic-warning-main text-primary-pressed font-gilroy-bold">verified</p>
                                                    </div>
                                                    <h1 className="font-gilroy-bold text-neutral-10 text-xl">{userInfo.email}</h1>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="flex flex-col space-y-1">
                                                    <p className="font-gilroy-medium text-neutral-40">Registered at</p>
                                                    <h1 className="font-gilroy-bold text-neutral-10 text-xl">{userInfo.metadata?.creationTime}</h1>
                                                </div>

                                                <div className="flex flex-col space-y-1 mt-6">
                                                    <p className="font-gilroy-medium text-neutral-40">Last signed in</p>
                                                    <h1 className="font-gilroy-bold text-neutral-10 text-xl">{userInfo.metadata?.lastSignInTime}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={SignOutAction} className="px-5 mt-10 py-3 rounded-lg bg-semantic-danger-main hover:bg-semantic-danger-pressed font-gilroy-bold text-md text-neutral-10 w-fit">{signOutLoading ? "Signing Out ... " : "Sign Out"}</button>
                                </div>

                            </Fragment>
                        )}
                    </div>
                </div>
            </PagesLayout >
        </Fragment>
    )
}

export default Account