import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const getProjectsApis = createApi({
    reducerPath:'projectsApis',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    endpoints:(builder) => ({
        createProject:builder.mutation({
            query: (data) => {
                const token = cookie.get("token");
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
                const token = cookie.get('token')
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
            }
        }),
        deleteProject:builder.mutation({
            query: (data) => {
                const token = cookie.get('token')
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
            }
        }),
        summonAllProjects:builder.query({
            query: () => {
                const token = cookie.get('token')
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
        summonProjectById:builder.query({
            query: (id) => {
                const token = cookie.get('token')
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
            }
        })
    })
})

export const 
{useCreateProjectMutation,
useUpdateProjectMutation,
useDeleteProjectMutation,
useSummonAllProjectsQuery,
useSummonProjectByIdQuery} = getProjectsApis