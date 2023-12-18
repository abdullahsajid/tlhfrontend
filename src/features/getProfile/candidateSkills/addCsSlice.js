import { createSlice } from "@reduxjs/toolkit";
import { addCandidateSkills } from "./addCsService";

const initialState = {
    addCs:[],
    loading:false,
    error:null
}

export const addCsSlice = createSlice({
    name:'addCandidateSkill',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            addCandidateSkills.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            addCandidateSkills.fulfilled,(state,action)=>{
                state.loading = false
                state.addCs = action.payload
            }
        )
        .addCase(
            addCandidateSkills.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default addCsSlice.reducer