import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./signUpService";
const initialState = {
    signUpUser:[],
    loading:false,
    error:null
}

export const signUpSlice = createSlice({
    name:'signup',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            signUp.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            signUp.fulfilled,(state,action)=>{
                state.loading = false
                state.signUpUser = action.payload
            }
        )
        .addCase(
            signUp.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default signUpSlice.reducer