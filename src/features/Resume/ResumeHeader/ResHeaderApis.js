import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const ResHeaderApi = createApi({
    reducerPath:'ResHeader',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    tagTypes:['ResHeader'],
    endpoints:(builder)=>({
        getResHeader:builder.query({
            query:()=>{
                const token = cookie.get('tlhtoken')
                return{
                    url:`/getResume`,
                    method:'GET',
                    headers:{
                        Authorization:`Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            },
            providesTags:['ResHeader']
        }),
        postResHeader:builder.mutation({
            query:(data)=>{
                const token = cookie.get('tlhtoken')
                return{
                    url:`/resumes`,
                    method:'POST',
                    headers:{
                        Authorization:`Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include',
                    body:data
                }
            },
            invalidatesTags:['ResHeader']
        }),
        updateResHeader:builder.mutation({
            query:(data)=>{
                const token = cookie.get('tlhtoken')
                return{
                    url:`/updateResume`,
                    method:'PUT',
                    headers:{
                        Authorization:`Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include',
                    body:data
                }
            },
            invalidatesTags:['ResHeader']
        })
    })
})

export const {useGetResHeaderQuery,usePostResHeaderMutation,useUpdateResHeaderMutation} = ResHeaderApi;