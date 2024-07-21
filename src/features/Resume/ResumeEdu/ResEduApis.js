import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const ResEduApi = createApi({
    reducerPath:'resEduApi',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    tagTypes:['resEduApi'],
    endpoints:(builder)=>({
        getResEdu:builder.query({
            query:()=>{
                const token = cookie.get("tlhtoken");
                return{
                    url:`/getEdu`,
                    method:'GET',
                    headers:{
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            },
            providesTags:['resEduApi']
        }),
        postResEdu:builder.mutation({
            query:(data)=>{
                const token = cookie.get("tlhtoken");
                return{
                    url:`/resumeEdu`,
                    method:'POST',
                    headers:{
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include',
                    body:data
                }
            },
            invalidatesTags:['resEduApi']
        }),
        updateResEdu:builder.mutation({
            query:(data)=>{
                const token = cookie.get("tlhtoken");
                return{
                    url:`/updateEdu/${data.id}`,
                    method:'PUT',
                    headers:{
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include',
                    body:data
                }
            },
            invalidatesTags:['resEduApi']
        }),
        deleteResEdu:builder.mutation({
            query:(data)=>{
                const token = cookie.get("tlhtoken");
                return{
                    url:`/deleteEdu/${data.id}`,
                    method:'DELETE',
                    headers:{
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include',
                    body:data
                }
            },
            invalidatesTags:['resEduApi']
        })
    })
})

export const {useGetResEduQuery,usePostResEduMutation,useUpdateResEduMutation,useDeleteResEduMutation} = ResEduApi

