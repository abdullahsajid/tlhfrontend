import { createSlice } from "@reduxjs/toolkit";
import { loginUserPost } from "./loginUserPostService";

const initialState = {
    loginUserPost:[],
    loading:false,
    error:null
}

export const loginCandidatePostSlice = createSlice({
    name:'loginUserPost',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            loginUserPost.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            loginUserPost.fulfilled,(state,action)=>{
                state.loading = false
                state.loginUserPost = action.payload
            }
        )
        .addCase(
            loginUserPost.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default loginCandidatePostSlice.reducer