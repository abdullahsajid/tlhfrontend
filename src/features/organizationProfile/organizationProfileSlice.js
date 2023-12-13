import { createSlice } from "@reduxjs/toolkit";
import { organizationProfile } from "./organizationProfileService";

const initialState = {
    organizationProfile:[],
    loading:false,
    error:null
}

export const organizationProfileSlice = createSlice({
    name:'organizationProfile',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            organizationProfile.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            organizationProfile.fulfilled,(state,action)=>{
                state.loading = false
                state.organizationProfile = action.payload
            }
        )
        .addCase(
            organizationProfile.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default organizationProfileSlice.reducer



