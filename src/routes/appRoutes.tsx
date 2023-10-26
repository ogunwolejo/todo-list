import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Dashboard from "../pages/dashboard";


const AppRoutes:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes