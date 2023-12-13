import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../features/Signup/signupSlice";
import loginSlice from "../features/Login/loginSlice";
import candidateProfileSlice from '../features/CandidateProfile/candidateProfileSlice'
export const store = configureStore({
    reducer:{
        signup:signupSlice,
        login:loginSlice,
        candidateProfile:candidateProfileSlice
    }
})
