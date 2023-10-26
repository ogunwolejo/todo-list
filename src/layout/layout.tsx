import { FC } from "react";
import Sidebar from "../common/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "../common/header/header";

const Layout:FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout