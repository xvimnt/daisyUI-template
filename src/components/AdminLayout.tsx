import { ReactElement } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface propsType {
    children: ReactElement
}
export const AdminLayout = (props: propsType) => {
    const { children } = props
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
