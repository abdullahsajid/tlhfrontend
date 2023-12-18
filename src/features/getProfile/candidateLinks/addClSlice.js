import { createSlice } from "@reduxjs/toolkit";
import { addCandidateLinks } from "./addClService";

const initialState = {
    addCl:[],
    loading:false,
    error:null
}

export const addClSlice = createSlice({
    name:'addCandidateLink',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            addCandidateLinks.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            addCandidateLinks.fulfilled,(state,action)=>{
                state.loading = false
                state.addCl = action.payload
            }
        )
        .addCase(
            addCandidateLinks.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default addClSlice.reducer
