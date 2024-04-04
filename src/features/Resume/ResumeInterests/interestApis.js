import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const interestApi = createApi({
  reducerPath: "interest",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["interest"],
  endpoints: (builder) => ({
    getInterest: builder.query({
      query: () => {
        const token = cookie.get("token");
        return {
          url: `candidate/getInterest`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
      providesTags: ["interest"],
    }),
    postInterest: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `candidate/resumeInterest`,
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
      invalidatesTags: ["interest"],
    }),
    updateInterest: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `candidate/updateInterest`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: ["interest"],
    }),
  }),
});

export const {
  useGetInterestQuery,
  usePostInterestMutation,
  useUpdateInterestMutation,
} = interestApi;
