import { FC } from "react";
import Sidebar from "../common/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const Layout:FC = () => {
    return (
        <div className="flex flex-col">
            <Sidebar />
            <main className="flex-1 p-4">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout