import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    togglePanel: false,
    updateJobPostPanel: false,
    jobPanelToggle:false,
    orgPostToggle:false,
    paymentToggle:false,
    sidebarToggle:false,
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
        setJobPanel: (state,action) => {
            state.jobPanelToggle = action.payload
        },
        setOrgPostToggle: (state,action) => {
            state.orgPostToggle = action.payload
        },
        setUpdateJobPostPanel: (state,action) => {
            state.updateJobPostPanel = action.payload
        },
        setJobPostedData: (state,action) => {
            state.jobPostDetails = action.payload
        },
        setPaymentToggle : (state,action) => {
            state.paymentToggle = action.payload
        },
        setSideBarToggle: (state,action) => {
            state.sidebarToggle = action.payload
        }
    }
})

export default assessmentSlice.reducer
export const 
{setToggleItem,
setRes,
setUpdateJobPostPanel,
setJobPostedData,
setJobPanel,
setOrgPostToggle,
setPaymentToggle,
setSideBarToggle} = assessmentSlice.actions