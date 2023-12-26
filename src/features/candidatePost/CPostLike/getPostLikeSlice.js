import { createSlice } from "@reduxjs/toolkit";
import { getCandidatePostLike } from "./getPostLikeService";

const initialState = {
    getPostLike:[],
    loading:false,
    error:null
}

export const getPostCandidateLikeSlice = createSlice({
    name:'getLike',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getCandidatePostLike.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            getCandidatePostLike.fulfilled,(state,action)=>{
                state.loading = false
                state.getPostLike = action.payload
            }
        )
        .addCase(
            getCandidatePostLike.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default getPostCandidateLikeSlice.reducer