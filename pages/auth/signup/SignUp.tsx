import { Fragment, SetStateAction, useState } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"
import AuthLayout from "@layouts/AuthLayout"
import Link from "next/link"
import { NextPage } from "next"
import toast from "react-hot-toast"
import { useRouter } from "next/router"
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Meta } from "@modules/Meta"
import { auth } from "@firebase/firebaseConfig"
import { useGithubOAuth, useGoogleOAuth } from "@hooks/useLogin"
import { ErrorText } from "@components/atoms/Text"

const SignUp: NextPage = () => {
    const router = useRouter()

    const { SignInWithGithub, isGithubLoading } = useGithubOAuth()
    const { SignInWithGoogle, isGoogleLoading } = useGoogleOAuth()

    const [ isRegisterLoading, setIsLoading ] = useState<SetStateAction<boolean>>(false)

    const initialValues = { email: "", password: "", confirmPassword: "" }

    const schemaValidations = Yup.object({
        email: Yup.string()
            .email("Invalid Email Address")
            .required("Field Email Required"),
        password: Yup.string()
            .min(8, "Password must be more than 8 character")
            .required("Field Password Required"),
        confirmPassword: Yup.string()
            .min(8, "Password must be more than 8 character")
            .oneOf([ Yup.ref("password"), null ], "Password Confirmation must match with Password")
            .required("Field Confirm Password Required"),
    })

    const SignUp = async (values: any) => {
        setIsLoading(true)

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password)
            const user = userCredentials.user

            console.log(user)
            setIsLoading(false)

            toast.success("Register Account Successfully")
            setTimeout(() => {
                router.push("/auth/signin")
            }, 2000)
        } catch (error: any) {
            console.log(error)
            setIsLoading(false)

            toast.error("Register Account Failed")
            router.reload()
        }
    }
    return (
        <Fragment>
            <Meta title="Create New Account" />
            <AuthLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
                    <div className="max-w-[1440px] mx-auto text-primary-pressed dark:text-neutral-10 px-6 md:px-24 flex pb-10 flex-col md:flex-row justify-between md:justify-between md:space-x-16 items-center">
                        <div className="w-full md:w-1/2 mt-3 mx-auto px-10 py-10 rounded-3xl border border-neutral-30 dark:border-primary-hover">
                            <h1 className="text-2xl font-gilroy-semibold text-primary-pressed dark:text-neutral-10 text-center">Create your Account</h1>
                            <h1 className="text-sm mt-2 font-gilroy-normal text-primary-pressed dark:text-neutral-10 text-center">Lets create account first to access all features</h1>
                            <Formik initialValues={initialValues} validationSchema={schemaValidations} onSubmit={SignUp}>
                                <Form>
                                    <div className="mt-4">
                                        <p className="text-sm font-gilroy-medium text-primary-pressed dark:text-neutral-10">Email Address <span className="text-semantic-danger-main">*</span></p>
                                        <Field className="text-md text-primary-pressed dark:text-neutral-10 bg-slate-100 dark:bg-primary-hover dark:focus:bg-primary-pressed focus:bg-neutral-10 border-none mt-2 py-3 px-4 rounded-lg w-full focus:outline-none focus:border-2 focus:outline-semantic-warning-main" type="email" name="email" id="email" placeholder="Email Address" />
                                        <ErrorMessage name="email" component={ErrorText} />
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-sm font-gilroy-medium text-primary-pressed dark:text-neutral-10">Password <span className="text-semantic-danger-main">*</span></p>
                                        <Field className="text-md text-primary-pressed dark:text-neutral-10 bg-slate-100 dark:bg-primary-hover dark:focus:bg-primary-pressed focus:bg-neutral-10 border-none mt-2 py-3 px-4 rounded-lg w-full focus:outline-none focus:border-2 focus:outline-semantic-warning-main" type="password" name="password" id="password" placeholder="Password" />
                                        <ErrorMessage name="password" component={ErrorText} />
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-sm font-gilroy-medium text-primary-pressed dark:text-neutral-10">Confirmation Password <span className="text-semantic-danger-main">*</span></p>
                                        <Field className="text-md text-primary-pressed dark:text-neutral-10 bg-slate-100 dark:bg-primary-hover dark:focus:bg-primary-pressed focus:bg-neutral-10 border-none mt-2 py-3 px-4 rounded-lg w-full focus:outline-none focus:border-2 focus:outline-semantic-warning-main" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmation Password" />
                                        <ErrorMessage name="confirmPassword" component={ErrorText} />
                                    </div>

                                    <div className="mt-8">
                                        <button type="submit" className="py-3 text-neutral-10 font-gilroy-bold px-4 rounded-lg w-full bg-semantic-warning-main">
                                            {isRegisterLoading ? "Creating Account ..." : "Sign Up"}
                                        </button>
                                    </div>
                                </Form>
                            </Formik>

                            <p className="text-sm mt-4 font-gilroy-normal text-primary-pressed dark:text-neutral-10 text-center">Or sign up using</p>

                            <div className="w-full flex flex-col md:flex-row items-center justify-between md:space-x-2 space-y-3 md:space-y-0 mt-4">
                                <button onClick={SignInWithGoogle} className="py-3 font-gilroy-bold px-4 rounded-lg w-full text-sm flex items-center justify-center gap-x-3 border border-primary-hover">
                                    <FaGoogle size={24} />
                                    {isGoogleLoading ? "Authenticate ..." : "Sign Up with Google"}</button>

                                <button onClick={SignInWithGithub} className="py-3 font-gilroy-bold px-4 rounded-lg w-full text-sm flex items-center justify-center gap-x-3 border border-primary-hover">
                                    <FaGithub size={24} />
                                    {isGithubLoading ? "Authenticate ..." : "Sign Up with Github"}</button>
                            </div>

                            <p className="text-sm mt-4 font-gilroy-normal text-primary-pressed dark:text-neutral-10 text-center">Already have account ?
                                <Link href="/auth/signin">
                                    <span className="font-gilroy-bold ml-2 text-blue-500 hover:cursor-pointer">Sign In Account</span>
                                </Link>
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full mt-5 md:mt-0 register">
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </Fragment>
    )
}

export default SignUp