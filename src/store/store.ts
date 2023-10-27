import { configureStore } from "@reduxjs/toolkit";
import { AppSliceReducer } from "./slice";

const store = configureStore({
    reducer:{
        "app":AppSliceReducer
    },
})

export default store