import { createSlice } from "@reduxjs/toolkit";
import { candidatePost } from "./postService";

const initialState = {
    Cpost:[],
    loading:false,
    error:null
}

export const candidatePostSlice = createSlice({
    name:'post',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            candidatePost.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            candidatePost.fulfilled,(state,action)=>{
                state.loading = false
                state.Cpost = action.payload
            }
        )
        .addCase(
            candidatePost.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default candidatePostSlice.reducer