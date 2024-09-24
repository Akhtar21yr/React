import {createSlice,nanoid} from '@reduxjs/toolkit'


const intialState = [{
    id : 1,
    name : 'akhtar',
    'age' : 21
}]

const  authSlice = createSlice({
    name : 'auth',
    initialState: intialState,
    reducers : {
        addUser : (state,action)=> {
            console.log({payload: action.payload})
            state.push({ id : nanoid(), name : action.payload })
        },
        removeUser : (state , action) => { 
            state = state.filter(state.id !==action.payload)
        }
    }
})

export const {addUser , removeUser} = authSlice.actions

export default authSlice.reducer



