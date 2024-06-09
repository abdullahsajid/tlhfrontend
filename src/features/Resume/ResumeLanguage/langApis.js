import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const langApi = createApi({
  reducerPath: "langApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_LOCAL_URL}` }),
  tagTypes: ["Lang"],
  endpoints: (builder) => ({
    getLang: builder.query({
      query: () => {
        const token = cookie.get("token");
        return {
          url: `/getLang`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
      providesTags: ["Lang"],
    }),
    createLang: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `/resumeLang`,
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
      invalidatesTags: ["Lang"],
    }),
    updateLang: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: "/updateLang",
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
      invalidatesTags: ["Lang"],
    }),
  }),
});

export const { useGetLangQuery, useCreateLangMutation, useUpdateLangMutation } =
  langApi;
