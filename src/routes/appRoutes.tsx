import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Dashboard from "../pages/dashboard";
import TodoList from "../pages/todo.list";
import Categories from "../pages/categories";


const AppRoutes:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="my-todo" element={<TodoList/>} />
                    <Route path="categories" element={<Categories/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes