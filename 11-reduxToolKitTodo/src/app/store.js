import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import authReducer from '../features/auth/authSlic'


export const store = configureStore({
    reducer : {
        todo : todoReducer,
        auth : authReducer
        

    } 
})