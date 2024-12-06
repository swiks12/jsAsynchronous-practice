import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const userSlice=createSlice({
    name:'user',
    initialState:{

        // global variables are these jun chai malai page to page cha
            data:{
                id:null,
                name:"Swiks",
                isLoggedIn:false
        },
    },
    // reducers are action performers jasle thyo slice ma vako values aathawa the global variables ma changes lyauna help garxa
    reducers:{
        updateId:(state,{payload})=>{
            // hami some particular slice ko bhitra nai vako kaaran le hamile state pachi slice ko name tokirakhnu pardaina
            state.data={...state.data,id:payload}
        },
        updateName:(state,{payload})=>{
            state.data={...state.data,name:payload}

        },
        updateLoggedStatus:(state,{payload})=>{
            state.data={...state.data,isLoggedIn:payload}

            console.log(state.data)
        }
    }
})

export const {updateId,updateName,updateLoggedStatus}=userSlice.actions;

// this export is to let the store know about the reducers
export default userSlice.reducer;