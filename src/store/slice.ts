import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IApp } from "../interface/i.app";


const initialState:IApp = {
    category:[],
    todos:[]
}


const AppSlice = createSlice({
    initialState,
    name:"app",
    reducers:{
        addTodos:(state, action:PayloadAction) => {},
        addCategories:() => {},

        // editiing 
        editTodos:() => {},
        editCategories:() => {},
        
        // searching 
        searchTodo:() => {},
        searchCategories:() => {},

        //save locally
        saveCategoriesLocally:() => {},
        saveTodosLocally:() => {}
    },
})

const {addCategories, addTodos, editCategories, editTodos, searchCategories, searchTodo} = AppSlice.actions
export const AppSliceReducer = AppSlice.reducer


