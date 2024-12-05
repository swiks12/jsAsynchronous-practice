import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        // global variables are these jun chai malai page to page chaine vayera aaile lai yati matra rakheko chu
        id:null,
        name:"Swiks",
        isLoggedIn:false
    },
    // reducers are action performers jasle thyo slice ma vako values aathawa the global variables ma changes lyauna help garxa
    reducers:{
        updateId:(state,action)=>{
            // hami some particular slice ko bhitra nai vako kaaran le hamile state pachi slice ko name tokirakhnu pardaina
            state.id=action.payload
        },
        updateName:(state,action)=>{
            state.name=action.payload
        },
        updateLoggedStatus:(state)=>{
            state.isLoggedIn=true
        }
    }
})

export const {updateId,updateName,updateLoggedStatus}=userSlice.actions;

// this export is to let the store know about the reducers
export default userSlice.reducer;