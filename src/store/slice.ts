import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryActionPayload, IApp, ICategory, ITodo, TodoActionPayload } from "../interface/i.app";


const initialState:IApp = {
    category:[],
    todos:[]
}


const AppSlice = createSlice({
    initialState,
    name:"app",
    reducers:{
        addTodos:(state, action:PayloadAction<TodoActionPayload>) => {
            const todo:ITodo = action.payload.payload
            console.log("====>", todo)
            return {
                ...state,
                todos:[...state.todos, todo]
            }
        },
        addCategories:(state, action:PayloadAction<CategoryActionPayload>) => {
            const newCat:ICategory = action.payload.payload
            return {
                ...state,
                category: [...state.category, newCat]
            }
        },

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

export const {addCategories, addTodos, editCategories, editTodos, searchCategories, searchTodo} = AppSlice.actions
export const AppSliceReducer = AppSlice.reducer


