import { createSlice } from "@reduxjs/toolkit";
import { getCandidateProfile } from "./getCpService";

const initialState = {
    getCp:[],
    loading:false,
    error:null
}

export const getCpSlice = createSlice({
    name:'getCandidateProfile',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getCandidateProfile.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            getCandidateProfile.fulfilled,(state,action)=>{
                state.loading = false
                state.getCp = action.payload
            }
        )
        .addCase(
            getCandidateProfile.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default getCpSlice.reducer