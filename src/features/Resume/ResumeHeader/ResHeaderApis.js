import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const ResHeaderApi = createApi({
    reducerPath:'ResHeader',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    tagTypes:['ResHeader'],
    endpoints:(builder)=>({
        getResHeader:builder.query({
            query:()=>{
                const token = cookie.get('token')
                return{
                    url:`candidate/getResume`,
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
                const token = cookie.get('token')
                return{
                    url:`candidate/resumes`,
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
                const token = cookie.get('token')
                return{
                    url:`candidate/updateResume`,
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