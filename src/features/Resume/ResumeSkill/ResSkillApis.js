import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const resSkillApi = createApi({
  reducerPath: "ResSkill",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["ResSkill"],
  endpoints: (builder) => ({
    getResSkill: builder.query({
      query: () => {
        const token = cookie.get("token");
        return {
          url: `candidate/getSkill`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
      providesTags: ["ResSkill"],
    }),
    createSkill: builder.mutation({
      query: (data) => {
        const token = cookie.get("token")
        return {
          url: `candidate/resumeSkill`,
          method:"POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: data
        }
      },
      invalidatesTags: ["ResSkill"]
    }),
    updateSkills:builder.mutation({
      query: (data) => {
        const token = cookie.get("token")
        return{
          url: "candidate/updateSkill",
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: data
        }
      },
      invalidatesTags: ["ResSkill"]
    })
  }),
});

export const {useGetResSkillQuery,useCreateSkillMutation,useUpdateSkillsMutation} = resSkillApi;

