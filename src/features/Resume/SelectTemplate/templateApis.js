import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const templateApi = createApi({
  reducerPath: "template",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_LOCAL_URL}` }),
  tagTypes: ["template"],
  endpoints: (builder) => ({
    postTemplate: builder.mutation({
      query: (data) => {
        const token = cookie.get("tlhtoken");
        return {
          url: `/setTemplates`,
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
      invalidatesTags: ["template"],
    }),
    updateTemplate: builder.mutation({
      query: (data) => {
        const token = cookie.get('tlhtoken')
        return {
          url: `/updateTemplate`,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          credentials: 'include',
          body: data
        }
      },
      invalidatesTags:['template']
    }),
    getTemplate:builder.query({
      query:({name}) => {
          return {
              url:`/myResume/${name}`,
              method:'GET',
              headers:{
                  'Content-Type':'application/json'
              },
              withCredentials:true,
              credentials:'include'
          }
      },
      providesTags:['template']
    })
  }),
});

export const { usePostTemplateMutation,useUpdateTemplateMutation,useGetTemplateQuery } = templateApi;
