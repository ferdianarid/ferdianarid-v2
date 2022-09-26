import NavbarAuth from "@components/NavbarAuth"
import { Fragment } from "react"

const AuthLayout = ({ children }: any) => {
    return (
        <Fragment>
            <NavbarAuth />
            {children}
        </Fragment>
    )
}

export default AuthLayout