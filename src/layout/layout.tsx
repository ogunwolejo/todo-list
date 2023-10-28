import { FC } from "react";
import Sidebar from "../component/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "../common/header/header";

const Layout:FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-grow h-full">
                <div className="flex-1 h-full">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout