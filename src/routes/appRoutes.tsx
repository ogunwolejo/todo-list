import { FC, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Dashboard from "../pages/dashboard";
import TodoList from "../pages/todo.list";
import Categories from "../pages/categories";


const AppRoutes:FC = () => {
    // checking to see if the application has data on its local storage and then retrieving it into the application store
    useEffect(() => {}, [])
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