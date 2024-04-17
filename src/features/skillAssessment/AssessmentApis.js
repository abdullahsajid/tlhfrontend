import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const skillAssessmentApi = createApi({
  reducerPath: "skillAssessmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    createAssessment: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
            url: "organization/createSkillType",
            method: "POST",
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type':'application/json'
            },
            withCredentials:true,
            credentials:'include',
            body:data
      }},
    }),
    createQuestion: builder.mutation({
        query: (data) => {
            const token = cookie.get("token")
            return {
                url:'organization/createQuestion',
                method:'POST',
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type':'application/json'
                },
                withCredentials:true,
                credentials:'include',
                body:data
            }
        }
    })
  }),
});

export const {useCreateAssessmentMutation,useCreateQuestionMutation} = skillAssessmentApi