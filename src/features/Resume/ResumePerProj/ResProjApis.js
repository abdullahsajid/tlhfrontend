import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const resumeProjApi = createApi({
    reducerPath:'resumeProj',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    tagTypes:['resumeProj'],
    endpoints:(builder)=>({
        getResProj:builder.query({
            query:()=>{
                const token = cookie.get('token')
                return{
                    url:`candidate/getproj`,
                    method:'GET',
                    headers:{
                        Authorization:`Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            },
            providesTags:['resumeProj']
        }),
        postResProj:builder.mutation({
            query:(data)=>{
                const token = cookie.get('token')
                return{
                    url:`candidate/resumePersonalProj`,
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
            invalidatesTags:['resumeProj']
        }),
        updateResProj:builder.mutation({
            query:(data)=>{
                const token = cookie.get('token')
                return{
                    url:`candidate/updateProj/${data.id}`,
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
            invalidatesTags:['resumeProj']
        }),
        deleteResProj:builder.mutation({
            query:(data)=>{
                const token = cookie.get('token')
                return{
                    url:`candidate/deleteProj/${data.id}`,
                    method:'DELETE',
                    headers:{
                        Authorization:`Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            },
            invalidatesTags:['resumeProj']
        })
    })
})

export const {useGetResProjQuery,usePostResProjMutation,useUpdateResProjMutation,useDeleteResProjMutation} = resumeProjApi
