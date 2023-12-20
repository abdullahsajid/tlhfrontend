import { createSlice } from "@reduxjs/toolkit";
import { updateOpService } from "./updateOpService";

const initialState = {
    updateOp:[],
    loading:false,
    error:null
}

export const updateOpSlice = createSlice({
    name:'update',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            updateOpService.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            updateOpService.fulfilled,(state,action)=>{
                state.loading = false
                state.updateOp = action.payload
            }
        )
        .addCase(
            updateOpService.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default updateOpSlice.reducer



