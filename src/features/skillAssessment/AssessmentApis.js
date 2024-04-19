import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const skillAssessmentApi = createApi({
  reducerPath: "skillAssessmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["SkillAssessment"],
  endpoints: (builder) => ({
    createAssessment: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: "organization/createSkillType",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: data,
        };
      },
    }),
    createQuestion: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: "organization/createQuestion",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: data,
        };
      },
    }),
    retrieveSkillType: builder.query({
      query: () => {
        const token = cookie.get("token");
        return {
          url: "organization/getSkillType",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
    }),
    retrieveMcqs: builder.query({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `organization/getmcqs/${data.id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
    }),
    calculateResult: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: "organization/calculateScore",
          method: "POST",
          headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: data
        };
      },
      invalidatesTags: ["SkillAssessment"],
    }),
    getBadges: builder.query({
      query : () => {
        const token = cookie.get("token")
        return {
          url: 'organization/getBadge',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        }
      },
      providesTags: ["SkillAssessment"]
    })
  }),
});

export const {
  useCreateAssessmentMutation,
  useCreateQuestionMutation,
  useRetrieveSkillTypeQuery,
  useRetrieveMcqsQuery,
  useCalculateResultMutation,
  useGetBadgesQuery
} = skillAssessmentApi;
