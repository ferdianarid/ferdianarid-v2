import { Fragment, SetStateAction, useState } from "react"
import Head from "next/head"
import { FaGithub, FaGoogle } from "react-icons/fa"
import AuthLayout from "@layouts/AuthLayout"
import Link from "next/link"
import { NextPage } from "next"
import toast from "react-hot-toast"
import { useRouter } from "next/router"
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { signInWithEmailAndPassword } from "firebase/auth"
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
            .min(3, "Password must be more than 3 character")
            .required("Field Password Required")
    })

    const SignIn = async (values: any) => {
        setIsLoading(true)
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, values.email, values.password)
            const user = userCredentials.user

            console.log(user)
            setIsLoading(false)

            toast.success("Login Success")
            setTimeout(() => {
                router.push("/")
            }, 2000)
        } catch (error: any) {
            console.log(error)
            setIsLoading(false)

            toast.error("User not found")
            router.push("/auth/login")
        }
    }
    return (
        <Fragment>
            <Head>
                <title>Sign In Account - Ferdian</title>
                <meta httpEquiv="X-UA-Compatible" content="IE-Edge, chrome" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content="Ferdian portfolio" />
                <meta name="keywords" content="Ferdian Portfolio Frontend" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <AuthLayout>
                <div className="w-full bg-primary-pressed text-neutral-10 px-6 md:px-24 flex pb-10 flex-col md:flex-row justify-between md:justify-between md:space-x-16 items-center">
                    <div className="w-full md:w-1/2 mt-3 mx-auto px-10 py-10 rounded-3xl border border-primary-hover">
                        <h1 className="text-2xl font-gilroy-semibold text-neutral-10 text-center">Sign In to your Account</h1>
                        <h1 className="text-sm mt-2 font-gilroy-normal text-neutral-10 text-center">Lets sign in first to access all features</h1>
                        <Formik initialValues={initialValues} validationSchema={schemaValidations} onSubmit={SignIn}>
                            <Form>
                                <div className="mt-4">
                                    <p className="text-sm font-gilroy-medium text-neutral-10">Email Address <span className="text-semantic-danger-main">*</span></p>
                                    <Field className="text-md bg-primary-hover focus:bg-primary-pressed border-none mt-2 py-3 px-4 rounded-lg w-full focus:outline-none focus:border-2 focus:outline-semantic-warning-main" type="email" name="email" id="email" placeholder="Email Address" />
                                    <ErrorMessage name="email" component={ErrorText} />
                                </div>

                                <div className="mt-4">
                                    <p className="text-sm font-gilroy-medium text-neutral-10">Password <span className="text-semantic-danger-main">*</span></p>
                                    <Field className="text-md bg-primary-hover focus:bg-primary-pressed border-none mt-2 py-3 px-4 rounded-lg w-full focus:outline-none focus:border-2 focus:outline-semantic-warning-main" type="password" name="password" id="password" placeholder="Password" />
                                    <ErrorMessage name="password" component={ErrorText} />
                                </div>

                                <div className="mt-8">
                                    <button className="py-3 font-gilroy-bold px-4 rounded-lg w-full bg-semantic-warning-main">
                                        {isLoginLoading ? "Authenticate ..." : "Sign In"}
                                    </button>
                                </div>
                            </Form>
                        </Formik>

                        <p className="text-sm mt-4 font-gilroy-normal text-neutral-10 text-center">Or sign in using</p>

                        <div className="w-full flex flex-col md:flex-row items-center justify-between md:space-x-2 md:space-y-0 space-y-3 mt-4">
                            <button onClick={SignInWithGoogle} className="py-3 font-gilroy-bold px-4 rounded-lg w-full text-sm flex items-center justify-center gap-x-3 border border-primary-hover">
                                <FaGoogle size={24} />
                                {isGoogleLoading ? "Authenticate ..." : "Sign In with Google"}</button>

                            <button onClick={SignInWithGithub} className="py-3 font-gilroy-bold px-4 rounded-lg w-full text-sm flex items-center justify-center gap-x-3 border border-primary-hover">
                                <FaGithub size={24} />
                                {isGithubLoading ? "Authenticate ..." : "Sign In with Github"}</button>
                        </div>

                        <p className="text-sm mt-4 font-gilroy-normal text-neutral-10 text-center">Not registered yet ?
                            <Link href="/auth/signup">
                                <span className="font-gilroy-bold text-blue-500 ml-2 hover:cursor-pointer">Sign Up Account</span>
                            </Link>
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full mt-5 md:mt-0 login">
                    </div>
                </div>
            </AuthLayout>
        </Fragment >
    )
}

export default SignIn