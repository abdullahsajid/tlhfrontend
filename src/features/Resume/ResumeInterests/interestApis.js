import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const interestApi = createApi({
  reducerPath: "interest",
  baseQuery: fetchBaseQuery({ baseUrl:`${process.env.REACT_APP_LOCAL_URL}` }),
  tagTypes: ["interest"],
  endpoints: (builder) => ({
    getInterest: builder.query({
      query: () => {
        const token = cookie.get("token");
        return {
          url: `/getInterest`,
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
          url: `/resumeInterest`,
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
          url: `/updateInterest`,
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
