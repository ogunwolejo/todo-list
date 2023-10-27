import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryActionPayload, IApp, ICategory, ITodo, TodoActionPayload } from "../interface/i.app";


const initialState:IApp = {
    category:[],
    todos:[],
    categorizedTodo:0
}


const AppSlice = createSlice({
    initialState,
    name:"app",
    reducers:{
        addTodos:(state, action:PayloadAction<TodoActionPayload>) => {
            const todo:ITodo = action.payload.payload
            const newTodo = [...state.todos, todo]
            const countCategorizedTodos = newTodo.filter((el:any) => el.category?.length > 0 || el.category != null) 
            return {
                ...state,
                todos:newTodo,
                categorizedTodo:countCategorizedTodos.length
            }
        },
        addCategories:(state, action:PayloadAction<CategoryActionPayload>) => {
            const newCat:ICategory = action.payload.payload
            return {
                ...state,
                category: [...state.category, newCat]
            }
        },
        saveTodosLocally:(state) => {
            // where we triger a fux to save our entire data
            localStorage.setItem("Todos", JSON.stringify(state.todos))
            localStorage.setItem("category", JSON.stringify(state.category))
        }
    },
})

export const {addCategories, addTodos, saveTodosLocally} = AppSlice.actions
export const AppSliceReducer = AppSlice.reducer


