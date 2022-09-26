import { SetStateAction, useState } from "react"
import { GithubAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "@firebase/firebaseConfig"

export const useGithubOAuth = () => {
    const [ error, setError ] = useState<SetStateAction<any>>(false)
    const [ isGithubLoading, setIsLoading ] = useState<SetStateAction<boolean>>(false)

    const GithubProvider = new GithubAuthProvider()

    const SignInWithGithub = async () => {
        setError(null)
        setIsLoading(true)

        try {
            const result = await signInWithPopup(auth, GithubProvider)
            if (!result) {
                throw new Error("Authentication Failed")
            }
            const user = result.user
            console.log(user)

            setIsLoading(false)
        } catch (error: any) {
            console.log(error)
            setError(error.message)
            setIsLoading(false)
        }
    }

    return { SignInWithGithub, error, isGithubLoading }
}

export const useGoogleOAuth = () => {
    const [ error, setError ] = useState<SetStateAction<any>>(false)
    const [ isGoogleLoading, setIsLoading ] = useState<SetStateAction<boolean>>(false)

    const GoogleProvider = new GoogleAuthProvider()

    const SignInWithGoogle = async () => {
        setError(null)
        setIsLoading(true)

        try {
            const result = await signInWithPopup(auth, GoogleProvider)
            if (!result) {
                throw new Error("Authentication Failed")
            }
            const user = result.user
            console.log(user)

            setIsLoading(false)
        } catch (error: any) {
            console.log(error)
            setError(error.message)
            setIsLoading(false)
        }
    }

    return { SignInWithGoogle, error, isGoogleLoading }
}