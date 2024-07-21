import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const ResCertApi = createApi({
  reducerPath: "resCertApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_LOCAL_URL}` }),
  tagTypes: ["resCertApi"],
  endpoints: (builder) => ({
    getResCert: builder.query({
      query: () => {
        const token = cookie.get("tlhtoken");
        return {
          url: `/getCert`,
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
        const token = cookie.get("tlhtoken");
        return {
          url: `/resumeCert`,
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
        const token = cookie.get("tlhtoken");
        return {
          url: `/updateCert/${data.id}`,
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
        const token = cookie.get("tlhtoken");
        return {
          url: `/deleteCert/${id}`,
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
