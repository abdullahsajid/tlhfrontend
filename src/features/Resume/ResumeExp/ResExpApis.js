import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const ResExpApi = createApi({
  reducerPath: "resExpApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["resExpApi"],
  endpoints: (builder) => ({
    getResExp: builder.query({
      query: () => {
        const token = cookie.get("token");
        return {
          url: `candidate/getExp`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        };
      },
      providesTags: ["resExpApi"],
    }),
    postResExp: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `candidate/resumeExp`,
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
      invalidatesTags: ["resExpApi"],
    }),
    updateResExp: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `candidate/updateExp/${data.id}`,
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
      invalidatesTags: ["resExpApi"],
    }),
    deleteResExp:builder.mutation({
        query:(data)=>{
            const token = cookie.get('token')
            return{
                url:`candidate/deleteExp/${data.id}`,
                method:'DELETE',
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                withCredentials: true,
                credentials: "include",
            }
        },
        invalidatesTags: ["resExpApi"],
    })
  }),
});

export const {useGetResExpQuery,usePostResExpMutation,useUpdateResExpMutation,useDeleteResExpMutation} = ResExpApi
