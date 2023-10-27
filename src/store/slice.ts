import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryActionPayload, IApp, ICategory, ILocalCategory, ILocalNumber, ILocalTodos, ITodo, TodoActionPayload } from "../interface/i.app";


const initialState:IApp = {
    category:[],
    todos:[],
    //categorizedTodo:0,
    savedData:0
}


const AppSlice = createSlice({
    initialState,
    name:"app",
    reducers:{
        addTodos:(state, action:PayloadAction<TodoActionPayload>) => {
            const todo:ITodo = action.payload.payload
            const newTodo = [...state.todos, todo]
            //const countCategorizedTodos:Array<any> = state.todos.filter((el:any) => !el.category || (el.category && el.category?.length > 0))
            //console.log("@@@@@@@@@@", countCategorizedTodos)
            return {
                ...state,
                todos:newTodo,
                //categorizedTodo:countCategorizedTodos.length
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
            return {
                ...state,
                savedData:state.category.length + state.todos.length
            }
        },
        addCategoriesFromLocalStorage: (state, action:PayloadAction<ILocalCategory>) => {
            return {
                ...state,
                category:action.payload.payload
            }
        },
        addTodosFromLocalStorage: (state, action:PayloadAction<ILocalTodos>) => {
            return {
                ...state,
                todos:action.payload.payload
            }
        },
        totalDataLocally: (state, action:PayloadAction<ILocalNumber>) => {
            return {
                ...state,
                savedData: action.payload.payload
            }    
        }
    },
})

export const {addCategories, addTodos, saveTodosLocally, addCategoriesFromLocalStorage, addTodosFromLocalStorage, totalDataLocally} = AppSlice.actions
export const AppSliceReducer = AppSlice.reducer


