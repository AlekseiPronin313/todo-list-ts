import { configureStore } from '@reduxjs/toolkit'
import todoSlise from "./todoSlise";

const store = configureStore({
    reducer: {
        todos: todoSlise
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
