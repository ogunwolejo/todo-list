import { FC } from "react";
import Sidebar from "../component/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "../common/header/header";

const Layout:FC = () => {
    return (
        <div className="flex">
            <div className="flex-grow">
                <div className="flex-1">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout