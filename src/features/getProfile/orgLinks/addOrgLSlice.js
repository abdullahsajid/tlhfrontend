import { createSlice } from "@reduxjs/toolkit";
import { addOrgSocialLinks } from "./addOrgLService";

const initialState = {
    addOL:[],
    loading:false,
    error:null
}

export const addOlSlice = createSlice({
    name:'addOrgLink',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            addOrgSocialLinks.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            addOrgSocialLinks.fulfilled,(state,action)=>{
                state.loading = false
                state.addOL = action.payload
            }
        )
        .addCase(
            addOrgSocialLinks.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default addOlSlice.reducer



