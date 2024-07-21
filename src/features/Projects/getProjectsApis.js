import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const getProjectsApis = createApi({
    reducerPath:'projectsApis',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    tagTypes:['Projects'],
    endpoints:(builder) => ({
        createProject:builder.mutation({
            query: (data) => {
                const token = cookie.get("tlhtoken");
                return {
                    url: 'organization/createProject',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include',
                    body: data,
                }
            }
        }),
        updateProject:builder.mutation({
            query: (data) => {
                const token = cookie.get('tlhtoken')
                return {
                    url: `organization/updateProject/${data.id}`,
                    method:'PUT',
                    headers:{
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include',
                    body: data,
                }
            },
            invalidatesTags:['Projects']
        }),
        deleteProject:builder.mutation({
            query: (data) => {
                const token = cookie.get('tlhtoken')
                return {
                    url : `organization/deleteProject/${data.id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials:true,
                    credentials: 'include',
                }
            },
            invalidatesTags:['Projects']
        }),
        summonAllProjects:builder.query({
            query: () => {
                const token = cookie.get('tlhtoken')
                return {
                    url : 'organization/summonAllProjects',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            }
        }),
        summonAllProjectsByUser:builder.query({
            query: () => {
                const token = cookie.get('tlhtoken')
                return {
                    url : 'organization/summonAllProjectsByUser',
                    method : 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            },
            providesTags:['Projects']
        }),
        summonProjectById:builder.query({
            query: (id) => {
                const token = cookie.get('tlhtoken')
                return {
                    url : `organization/summonProjectById/${id}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            },
            providesTags:['Projects']
        }),
        summonProfile:builder.query({
            query: (id) => {
                const token = cookie.get('tlhtoken')
                return {
                    url : `/getProfileById/${id}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            }
        }),
    })
})

export const 
{useCreateProjectMutation,
useUpdateProjectMutation,
useDeleteProjectMutation,
useSummonAllProjectsQuery,
useSummonProjectByIdQuery,
useSummonAllProjectsByUserQuery,
useSummonProfileQuery} = getProjectsApis