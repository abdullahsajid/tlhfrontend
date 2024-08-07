import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_LOCAL_URL}` }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => {
        const token = cookie.get('tlhtoken')
        return{
            url: "/getContact",
            method: "GET",
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            withCredentials:true,
            credentials:'include'
        }
      },
      providesTags: ["Contact"],
    }),
    postContact: builder.mutation({
      query: (data) => {
        const token = cookie.get('tlhtoken')
        return{
            url: "/resumeContact",
            method: "POST",
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            withCredentials:true,
            credentials:'include',
            body:data
            
        }
      },
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: (data) => {
        const token = cookie.get('tlhtoken')
        return {
            url: "/updateContact",
            method: "PUT",
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            withCredentials:true,
            credentials:'include',
            body:data
        }
      },
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactQuery,
  usePostContactMutation,
  useUpdateContactMutation,
} = contactApi;
