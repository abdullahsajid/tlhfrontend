import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const ResCertApi = createApi({
  reducerPath: "resCertApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["resCertApi"],
  endpoints: (builder) => ({
    getResCert: builder.query({
      query: () => {
        const token = cookie.get("token");
        return {
          url: `candidate/getCert`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
      providesTags: ["resCertApi"],
    }),
    postResCert: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `candidate/resumeCert`,
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
      invalidatesTags: ["resCertApi"],
    }),
    updateResCert: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `candidate/updateCert/${data.id}`,
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
      invalidatesTags: ["resCertApi"],
    }),
    deleteResCert: builder.mutation({
      query: (id) => {
        const token = cookie.get("token");
        return {
          url: `candidate/deleteCert/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
      invalidatesTags: ["resCertApi"],
    }),
  }),
});

export const {
  useGetResCertQuery,
  usePostResCertMutation,
  useUpdateResCertMutation,
  useDeleteResCertMutation,
} = ResCertApi;
