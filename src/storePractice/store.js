import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice";

const store =configureStore({
    //reducer k andar saare slice ko key value Pair k form me in our case only single slice (userSlice) 
    reducer:{
        user:userSlice
    }
})
export default store//this will be used in main  parent component with provider of react-redux