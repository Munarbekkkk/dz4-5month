import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterReducer.js";
const store = configureStore({
    reducer:{
        counterReducer
    }
})
export default store