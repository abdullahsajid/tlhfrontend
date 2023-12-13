import { createSlice } from "@reduxjs/toolkit";
import { candidateProfile } from "./candidateProfileService";

const initialState = {
    candidateProfile:[],
    loading:false,
    error:null
}

export const candidateProfileSlice = createSlice({
    name:'candidateProfile',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            candidateProfile.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            candidateProfile.fulfilled,(state,action)=>{
                state.loading = false
                state.candidateProfile = action.payload
            }
        )
        .addCase(
            candidateProfile.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default candidateProfileSlice.reducer