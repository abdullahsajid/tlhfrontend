import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../features/Signup/signupSlice";
import loginSlice from "../features/Login/loginSlice";
import candidateProfileSlice from '../features/CandidateProfile/candidateProfileSlice'

const loginUser = localStorage.getItem('loginUser') ?
        JSON.parse(localStorage.getItem('loginUser')) : null

const initialState = {
    login:{loginUser}
}
export const store = configureStore({
    reducer:{
        signup:signupSlice,
        login:loginSlice,
        candidateProfile:candidateProfileSlice
    },
    preloadedState:initialState
})
