import { Banner } from "../components/Banner"
import { Menu } from "../components/Menu"
import Navbar from "../components/Navbar"
import { Stats } from "../components/Stats"

export const Home = () => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                <Banner />
                <div className="flex flex-col  mt-40 w-full">
                    <div>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <Menu />
            </div>
        </div>
    )
}
