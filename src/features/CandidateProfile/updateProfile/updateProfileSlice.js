import { createSlice } from "@reduxjs/toolkit";
import { updateProfileService } from "./updateProfileService";

const initialState = {
    updateProfile:[],
    loading:false,
    error:null
}

export const updateProfileSlice = createSlice({
    name:'update',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            updateProfileService.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            updateProfileService.fulfilled,(state,action)=>{
                state.loading = false
                state.updateProfile = action.payload
            }
        )
        .addCase(
            updateProfileService.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default updateProfileSlice.reducer