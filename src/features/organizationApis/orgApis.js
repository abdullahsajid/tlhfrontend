import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const orgApis = createApi({
    reducerPath:'orgapis',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    tagTypes:['orgLike','comments','orgPost','orgJob'],
    endpoints:(builder) => ({
        createJob:builder.mutation({
            query:(data) => {
                const token = cookie.get('token')
                return {
                    url:`organization/createJob/${data.id}`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                    body:data.job
                }
            },
            invalidatesTags:['orgJob']
        }),
        createOrgPost:builder.mutation({
            query:(data) => {
                const token = cookie.get('token')
                return{
                    url:`organization/orgPost/${data.id}`,
                    method:'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                    body:data.contentVal
                }
            },
            invalidatesTags:['orgPost']
        }),
        summonOrgPost:builder.query({
            query: ({id}) => {
                const token = cookie.get('token')
                return {
                    url:`organization/getPost/${id}`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
            providesTags:['orgPost']
        }),
        summonCommentById:builder.query({
            query: ({id}) => {
                const token = cookie.get('token')
                return {
                    url: `organization/getCommentByid/${id}`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
            providesTags:['comments']
        }),
        summonLikeById:builder.query({
            query: ({id}) => {
                const token = cookie.get('token')
                return {
                    url: `organization/getLikeByid/${id}`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
            providesTags:['orgLike']
        }),
        postLikeById:builder.mutation({
            query: ({id}) => {
                const token = cookie.get('token')
                return {
                    url: `organization/postLike/${id}`,
                    method:'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
            invalidatesTags:['orgLike']
        }),
        retrievePostByid:builder.query({
            query: ({id}) => {
                const token = cookie.get('token')
                return {
                    url: `organization/getPostByid/${id}`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
        }),
        summonOrgProfile:builder.query({
            query: () => {
                const token = cookie.get('token')
                return {
                    url: `organization/getallProfile`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            }
        }),
        postComment:builder.mutation({
            query: ({id,comment}) => {
                const token = cookie.get('token')
                return {
                    url: `organization/postComment/${id}`,
                    method:'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                    body:{comment:comment}
                }
            },
            invalidatesTags:['comments']
        }),
        getJobs:builder.query({
            query: ({id}) => {
                const token = cookie.get('token')
                return {
                    url: `organization/getJob/${id}`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
            providesTags:['orgJob']
        })
    })
})

export const 
{useCreateJobMutation,
useCreateOrgPostMutation,
useSummonOrgPostQuery,
useSummonCommentByIdQuery,
useSummonLikeByIdQuery,
usePostLikeByIdMutation,
useRetrievePostByidQuery,
useSummonOrgProfileQuery,
usePostCommentMutation,
useGetJobsQuery
} = orgApis