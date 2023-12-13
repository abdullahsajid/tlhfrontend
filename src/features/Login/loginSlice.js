import { createSlice } from "@reduxjs/toolkit";
import { login } from "./loginService";

const initialState = {
    loginUser:[],
    loading:false,
    error:null,
    isAuth:false
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            login.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            login.fulfilled,(state,action)=>{
                state.loading = false
                state.loginUser = action.payload
                state.isAuth = true
            }
        )
        .addCase(
            login.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
                state.isAuth = false
            }
        )
    }
})

export default loginSlice.reducer

