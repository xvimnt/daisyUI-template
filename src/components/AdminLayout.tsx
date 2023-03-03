import { Auth } from "aws-amplify"
import { ReactElement, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface propsType {
    children: ReactElement
}
export const AdminLayout = (props: propsType) => {
    const { children } = props
    const navigate = useNavigate()

    useEffect(() => {
        Auth.currentUserInfo().then(data => {
        // If user is disabled or is not verified
            if (!data.attributes || !data.attributes.email_verified) {
                return Auth.signOut()
            }
        }).catch(() => {
            navigate('/')
        })
    }, [])

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
