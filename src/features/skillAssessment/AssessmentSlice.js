import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    togglePanel: false,
    resultRes:[]
}

export const assessmentSlice = createSlice({
    name: 'assessment',
    initialState,
    reducers:{
        setToggleItem : (state,action) => {
            state.togglePanel = action.payload
        },
        setRes: (state,action) => {
            state.resultRes = action.payload
        }
    }
})

export default assessmentSlice.reducer
export const {setToggleItem,setRes} = assessmentSlice.actions