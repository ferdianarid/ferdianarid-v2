import { auth } from "@firebase/firebaseConfig"
import { SetStateAction, useState } from "react"
import toast from "react-hot-toast"

const useLogout = () => {
    const [ error, setError ] = useState<SetStateAction<any>>(null)
    const [ signOutLoading, setSignOutLoading ] = useState<SetStateAction<boolean>>(false)

    const SignOutAction = () => {
        setError(null)
        setSignOutLoading(true)
        try {
            auth.signOut().then(() => {
                toast.success("Successfully Logout")
            }).catch((error) => toast.error(error))

            setSignOutLoading(false)
        } catch (error: any) {
            console.log(error)
            console.log(error.code)

            setError(error.message)
            toast.error(error.message)
            setSignOutLoading(false)
        }
    }

    return { SignOutAction, error, signOutLoading }
}

export default useLogout