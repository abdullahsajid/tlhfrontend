import { createSlice } from "@reduxjs/toolkit";
import { getAllProfiles } from "./UsersProfileService";

const initialState = {
    profiles:[],
    loading:false,
    error:null
}

export const ProfilesSlice = createSlice({
    name:'userProfiles',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getAllProfiles.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            getAllProfiles.fulfilled,(state,action)=>{
                state.loading = false
                state.profiles = action.payload
            }
        )
        .addCase(
            getAllProfiles.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default ProfilesSlice.reducer