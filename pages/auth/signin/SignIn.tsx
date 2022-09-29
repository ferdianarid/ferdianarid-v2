import { NextPage } from "next"
import * as Yup from "yup"
import { Fragment, SetStateAction, useState } from "react"
import Link from "next/link"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/router"
import { FaGithub, FaGoogle } from "react-icons/fa"
import toast from "react-hot-toast"
import AuthLayout from "@layouts/AuthLayout"
import { Form, Formik, Field, ErrorMessage } from "formik"
import { Meta } from "@modules/Meta"
import { auth } from "@firebase/firebaseConfig"
import { useGithubOAuth, useGoogleOAuth } from "@hooks/useLogin"
import { ErrorText } from "@components/atoms/Text"

const SignIn: NextPage = () => {
    const router = useRouter()

    const { SignInWithGithub, isGithubLoading } = useGithubOAuth()
    const { SignInWithGoogle, isGoogleLoading } = useGoogleOAuth()

    const [ isLoginLoading, setIsLoading ] = useState<SetStateAction<boolean>>(false)

    const initialValues = { email: "", password: "" }

    const schemaValidations = Yup.object({
        email: Yup.string()
            .email("Invalid Email Address")
            .required("Field Email Required"),
        password: Yup.string()
            .min(8, "Password must be more than 8 character")
            .required("Field Password Required")
    })

    const SignIn = async (values: any) => {
        setIsLoading(true)
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, values.email, values.password)
            const user = userCredentials.user

            console.log(user)
            setIsLoading(false)

            toast.success("Successfully Sign in")
            setTimeout(() => {
                router.push("/account")
            }, 3000)
        } catch (error: any) {
            console.log(error)
            setIsLoading(false)

            toast.error("Failed Sign in")
            router.reload()
        }
    }
    return (
        <Fragment>
            <Meta title="Sign In Account" />
            <AuthLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
                    <div className="max-w-[1440px] mx-auto text-neutral-10 px-6 md:px-24 flex pb-10 flex-col md:flex-row justify-between md:justify-between md:space-x-16 items-center">
                        <div className="w-full md:w-1/2 mt-3 mx-auto px-10 py-10 rounded-3xl border border-neutral-30 dark:border-primary-hover">
                            <h1 className="text-2xl font-gilroy-bold text-primary-pressed dark:text-neutral-10 text-center">Sign In to your Account</h1>
                            <h1 className="text-sm mt-2 font-gilroy-normal text-primary-pressed dark:text-neutral-10 text-center">Lets sign in first to access all features</h1>
                            <Formik initialValues={initialValues} validationSchema={schemaValidations} onSubmit={SignIn}>
                                <Form>
                                    <div className="mt-4">
                                        <label className="text-sm font-gilroy-medium text-primary-pressed dark:text-neutral-10">Email Address <span className="text-semantic-danger-main">*</span></label>
                                        <Field className="text-md bg-slate-100 dark:bg-primary-hover text-primary-pressed dark:text-neutral-10 dark:focus:bg-primary-pressed focus:bg-neutral-10 border-none mt-2 py-3 px-4 rounded-lg w-full focus:outline-none focus:border-2 focus:outline-semantic-warning-main" type="email" name="email" id="email" placeholder="Email Address" />
                                        <ErrorMessage name="email" component={ErrorText} />
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-sm font-gilroy-medium text-primary-pressed dark:text-neutral-10">Password <span className="text-semantic-danger-main">*</span></p>
                                        <Field className="text-md text-primary-pressed dark:text-neutral-10 bg-slate-100 dark:bg-primary-hover dark:focus:bg-primary-pressed focus:bg-neutral-10 border-none mt-2 py-3 px-4 rounded-lg w-full focus:outline-none focus:border-2 focus:outline-semantic-warning-main" type="password" name="password" id="password" placeholder="Password" />
                                        <ErrorMessage name="password" component={ErrorText} />
                                    </div>

                                    <div className="mt-8">
                                        <button className="py-3 font-gilroy-bold px-4 rounded-lg w-full bg-semantic-warning-main">
                                            {isLoginLoading ? "Authenticate ..." : "Sign In"}
                                        </button>
                                    </div>
                                </Form>
                            </Formik>

                            <p className="text-sm mt-4 font-gilroy-normal text-primary-pressed dark:text-neutral-10 text-center">Or sign in using</p>

                            <div className="w-full flex flex-col md:flex-row items-center justify-between md:space-x-2 md:space-y-0 space-y-3 mt-4">
                                <button onClick={SignInWithGoogle} className="py-3 font-gilroy-bold px-4 text-primary-pressed dark:text-neutral-10 rounded-lg w-full text-sm flex items-center justify-center gap-x-3 border border-primary-hover">
                                    <FaGoogle size={24} />
                                    {isGoogleLoading ? "Authenticate ..." : "Sign In with Google"}</button>

                                <button onClick={SignInWithGithub} className="py-3 font-gilroy-bold px-4 text-primary-pressed dark:text-neutral-10 rounded-lg w-full text-sm flex items-center justify-center gap-x-3 border border-primary-hover">
                                    <FaGithub size={24} />
                                    {isGithubLoading ? "Authenticate ..." : "Sign In with Github"}</button>
                            </div>

                            <p className="text-sm mt-4 font-gilroy-normal text-primary-pressed dark:text-neutral-10 text-center">Not registered yet ?
                                <Link href="/auth/signup">
                                    <span className="font-gilroy-bold text-blue-500 ml-2 hover:cursor-pointer">Sign Up Account</span>
                                </Link>
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full mt-5 md:mt-0 login">
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </Fragment>
    )
}

export default SignIn