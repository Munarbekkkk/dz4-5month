import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    count:0
}

const counterReducer = createSlice({
    name:"counterReducerSlice",
    initialState,
    reducers:{
        increment: (state) => {
            state.count += 1
        },
        decrement:(state) => {
            state.count -= 1
        },
        incrementTen:(state) => {
            state.count += 10
        }
        ,
        decrementTen:(state) => {
            state.count -= 10
        },
        reset:(state) => {
            state.count = 0
        }
    }
})
export const {increment, decrement,incrementTen,decrementTen,reset} = counterReducer.actions
export default counterReducer.reducer