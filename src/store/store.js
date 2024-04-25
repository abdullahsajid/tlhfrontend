import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../features/Signup/signupSlice";
import loginSlice from "../features/Login/loginSlice";
import candidateProfileSlice from "../features/CandidateProfile/candidateProfileSlice";
import getCpSlice from "../features/getProfile/getCpSlice";
import addCsSlice from "../features/getProfile/candidateSkills/addCsSlice";
import addClSlice from "../features/getProfile/candidateLinks/addClSlice";
import getOpSlice from "../features/getProfile/getOpSlice";
import organizationProfileSlice from "../features/organizationProfile/organizationProfileSlice";
import addOlSlice from "../features/getProfile/orgLinks/addOrgLSlice";
import updateProfileSlice from "../features/CandidateProfile/updateProfile/updateProfileSlice";
import updateOpSlice from "../features/organizationProfile/updateOrgProfile/updateOpSlice";
import ProfilesSlice from "../features/CandidateProfile/getProfiles/profilesSlice";
import getCandCommentSlice from "../features/Comments/candidateComment/getComments/getCommentSlice";
import getPostCandidateLikeSlice from "../features/candidatePost/CPostLike/getPostLikeSlice";
import loginCandidatePostSlice from "../features/candidatePost/getAuthPost/loginUserPostSlice";
import getResumeContact from "src/features/Resume/ResumeContact/ResContactSlice";
import getResSkillSlice from "src/features/Resume/ResumeSkill/ResSkillSlice";
import AssessmentSlice from "src/features/skillAssessment/AssessmentSlice";
import { resSkillApi } from "src/features/Resume/ResumeSkill/ResSkillApis";
import { interestApi } from "src/features/Resume/ResumeInterests/interestApis";
import { langApi } from "src/features/Resume/ResumeLanguage/langApis";
import { ResHeaderApi } from "src/features/Resume/ResumeHeader/ResHeaderApis";
import { contactApi } from "src/features/Resume/ResumeContact/ContactApis";
import { ResExpApi } from "src/features/Resume/ResumeExp/ResExpApis";
import { ResEduApi } from "src/features/Resume/ResumeEdu/ResEduApis";
import { resumeProjApi } from "src/features/Resume/ResumePerProj/ResProjApis";
import { ResCertApi } from "src/features/Resume/ResumeCertificate/ResCertApis";
import { templateApi } from "src/features/Resume/SelectTemplate/templateApis";
import { getRes } from "src/features/Resume/getResume/getRes";
import { skillAssessmentApi } from "src/features/skillAssessment/AssessmentApis";
import { getProjectsApis } from "src/features/Projects/getProjectsApis";

const loginUser = localStorage.getItem("loginUser")
  ? JSON.parse(localStorage.getItem("loginUser"))
  : null;

// const signUpUser = localStorage.getItem('signupUser') ?
// JSON.parse(localStorage.getItem('signupUser')) : null

const initialState = {
  login: { loginUser },
  // signup:{signUpUser}
};
export const store = configureStore({
  reducer: {
    signup: signupSlice,
    login: loginSlice,
    candidateProfile: candidateProfileSlice,
    getCandidateProfile: getCpSlice,
    addCandidateSkill: addCsSlice,
    addCandidateLink: addClSlice,
    getOrgProfile: getOpSlice,
    organizationProfile: organizationProfileSlice,
    addOrgLink: addOlSlice,
    update: updateProfileSlice,
    update: updateOpSlice,
    userProfiles: ProfilesSlice,
    getComments: getCandCommentSlice,
    getLike: getPostCandidateLikeSlice,
    post: loginCandidatePostSlice,
    getResContact: getResumeContact,
    getResSkill: getResSkillSlice,
    assessment: AssessmentSlice,
    [resSkillApi.reducerPath]: resSkillApi.reducer,
    [interestApi.reducerPath]: interestApi.reducer,
    [langApi.reducerPath]: langApi.reducer,
    [ResHeaderApi.reducerPath]: ResHeaderApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [ResExpApi.reducerPath]: ResExpApi.reducer,
    [ResEduApi.reducerPath]: ResEduApi.reducer,
    [resumeProjApi.reducerPath]: resumeProjApi.reducer,
    [ResCertApi.reducerPath]: ResCertApi.reducer,
    [templateApi.reducerPath]: templateApi.reducer,
    [getRes.reducerPath]: getRes.reducer,
    [skillAssessmentApi.reducerPath] : skillAssessmentApi.reducer,
    [getProjectsApis.reducerPath]: getProjectsApis.reducer,
  },
  middleware: (middle) => [...middle(),
     resSkillApi.middleware, interestApi.middleware, langApi.middleware, ResHeaderApi.middleware, contactApi.middleware,
      ResExpApi.middleware, ResEduApi.middleware, resumeProjApi.middleware, ResCertApi.middleware, templateApi.middleware,
      getRes.middleware, skillAssessmentApi.middleware,getProjectsApis.middleware
  ],
  preloadedState: initialState,
});

