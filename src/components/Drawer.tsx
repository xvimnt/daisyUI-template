import { Banner } from "./Banner";
import Footer from "./Footer";
import { Menu } from "./Menu";
import Navbar from "./Navbar";

export default function Drawer() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                <Banner />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <Menu />
            </div>
        </div>
    )
}