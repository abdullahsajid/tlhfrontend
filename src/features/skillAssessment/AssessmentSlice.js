import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    togglePanel: false,
    updateJobPostPanel: false,
    jobPostDetails: [],
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
        },
        setUpdateJobPostPanel: (state,action) => {
            state.updateJobPostPanel = action.payload
        },
        setJobPostedData: (state,action) => {
            state.jobPostDetails = action.payload
        }
    }
})

export default assessmentSlice.reducer
export const {setToggleItem,setRes,setUpdateJobPostPanel,setJobPostedData} = assessmentSlice.actions