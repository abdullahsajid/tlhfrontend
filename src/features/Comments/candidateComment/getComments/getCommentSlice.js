import { createSlice } from "@reduxjs/toolkit";
import { getCommentCandidate } from "./getCommentService";
import { summonAllComments } from "./getCommentService";
const initialState = {
    getComments:[],
    allComments:[],
    loading:false,
    error:null
}

export const getCandCommentSlice = createSlice({
    name:'getComments',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getCommentCandidate.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            getCommentCandidate.fulfilled,(state,action)=>{
                state.getComments = false
                state.getComments = action.payload
            }
        )
        .addCase(
            getCommentCandidate.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        ).addCase(
            summonAllComments.pending,(state)=>{
                state.loading = true
            }
        ).addCase(
            summonAllComments.fulfilled,(state,action) => {
                state.getComments = false
                state.allComments = action.payload
            }
        ).addCase(
            summonAllComments.rejected,(state,action) => {
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default getCandCommentSlice.reducer