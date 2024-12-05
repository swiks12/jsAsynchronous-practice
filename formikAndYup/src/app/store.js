import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../features/userSlice"

const store=configureStore({
    reducer:{
        // letting the store know about its 
        // this is the official name of the slice from we we can access the global varibales
        user:userSlice
    },
})

export default store;