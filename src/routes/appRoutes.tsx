import { FC, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Dashboard from "../pages/dashboard";
import TodoList from "../pages/todo.list";
import Categories from "../pages/categories";
import { addCategoriesFromLocalStorage, addTodosFromLocalStorage, totalDataLocally } from "../store/slice";
import { DISPATCH_TYPES } from "../util/constant";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Loader from "../component/loader";


const AppRoutes:FC = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const [appLoading, setAppLoading] = useState<boolean>(true)
    // checking to see if the application has data on its local storage and then retrieving it into the application store
    const fetchData = () => {
        
        try {
            setAppLoading(true)
            const isTodoDataLocalStorage = localStorage.getItem("Todos")
            const isCategoryDataLocalStorage = localStorage.getItem("category")

            // if the  data is not falsy and the data length is greater than 0
            if(isTodoDataLocalStorage && isTodoDataLocalStorage.length > 0) {
                dispatch(addTodosFromLocalStorage({type:DISPATCH_TYPES.LOCAL_TODO, payload:JSON.parse(isTodoDataLocalStorage)}))
            }
            
            // if the  data is not falsy and the data length is greater than 0
            if(isCategoryDataLocalStorage && isCategoryDataLocalStorage.length > 0) {
                dispatch(addCategoriesFromLocalStorage({type:DISPATCH_TYPES.LOCAL_CATEGORY, payload:JSON.parse(isCategoryDataLocalStorage)}))
            }

            // the combined data count for both
            if(isCategoryDataLocalStorage && isTodoDataLocalStorage) {
                const total:number =  JSON.parse(isTodoDataLocalStorage).length + JSON.parse(isCategoryDataLocalStorage).length;
                dispatch(totalDataLocally({type:DISPATCH_TYPES.LOCAL_TOTAL_DATA, payload:total}))
            }

        } catch (error) {
            
        } finally {
            setAppLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <BrowserRouter>
            {
                appLoading ? (
                    <Loader/>
                ) : (
                    <Routes>
                        <Route element={<Layout/>}>
                            <Route index element={<Dashboard/>}/>
                            <Route path="my-todo" element={<TodoList/>} />
                            <Route path="categories" element={<Categories/>}/>
                        </Route>
                    </Routes>
                )
                
            }
        </BrowserRouter>
    )
}

export default AppRoutes