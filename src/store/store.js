import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../features/Signup/signupSlice";
import loginSlice from "../features/Login/loginSlice";
import candidateProfileSlice from '../features/CandidateProfile/candidateProfileSlice'
import getCpSlice from "../features/getProfile/getCpSlice";
import addCsSlice from "../features/getProfile/candidateSkills/addCsSlice";
import addClSlice from "../features/getProfile/candidateLinks/addClSlice";
import getOpSlice from "../features/getProfile/getOpSlice";
import organizationProfileSlice from '../features/organizationProfile/organizationProfileSlice'
import addOlSlice from "../features/getProfile/orgLinks/addOrgLSlice";
import updateProfileSlice from "../features/CandidateProfile/updateProfile/updateProfileSlice";
import updateOpSlice from "../features/organizationProfile/updateOrgProfile/updateOpSlice";
import ProfilesSlice from "../features/CandidateProfile/getProfiles/profilesSlice";
import getCandCommentSlice  from "../features/Comments/candidateComment/getComments/getCommentSlice";
import getPostCandidateLikeSlice  from "../features/candidatePost/CPostLike/getPostLikeSlice";
import loginCandidatePostSlice  from "../features/candidatePost/getAuthPost/loginUserPostSlice";
import getResHeaderSlice from "src/features/Resume/ResumeHeader/ResHeaderSlice";
import getResumeContact from "src/features/Resume/ResumeContact/ResContactSlice";
import getResExpSlice from "src/features/Resume/ResumeExp/ResExpSlice";
import getResEduSlice  from "src/features/Resume/ResumeEdu/ResEduGetSlice";
import getResPersonalProjSlice from "src/features/Resume/ResumePerProj/ResPerlProjSlice";
const loginUser = localStorage.getItem('loginUser') ?
        JSON.parse(localStorage.getItem('loginUser')) : null

// const signUpUser = localStorage.getItem('signupUser') ?
// JSON.parse(localStorage.getItem('signupUser')) : null

const initialState = {
    login:{loginUser},
    // signup:{signUpUser}
}
export const store = configureStore({
    reducer:{
        signup:signupSlice,
        login:loginSlice,
        candidateProfile:candidateProfileSlice,
        getCandidateProfile:getCpSlice,
        addCandidateSkill:addCsSlice,
        addCandidateLink:addClSlice,
        getOrgProfile:getOpSlice,
        organizationProfile:organizationProfileSlice,
        addOrgLink:addOlSlice,
        update:updateProfileSlice,
        update:updateOpSlice,
        userProfiles:ProfilesSlice,
        getComments:getCandCommentSlice,
        getLike:getPostCandidateLikeSlice,
        post:loginCandidatePostSlice,
        getResHeader:getResHeaderSlice,
        getResContact:getResumeContact,
        getResExp:getResExpSlice,
        getResEdu:getResEduSlice,
        getResProj:getResPersonalProjSlice
    },
    preloadedState:initialState
})

