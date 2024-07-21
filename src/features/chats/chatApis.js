import {  createApi,fetchBaseQuery  } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const chatApi = createApi({
    reducerPath:'chatapi',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    tagTypes:['chats'],
    endpoints:(builder)=> ({
        createChats:builder.mutation({
            query:(data)=> {
                const token = cookie.get("tlhtoken");
                return {
                    url:'/createChats',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include',
                    body: data,
                }
            },
            invalidatesTags:['chats']
        }),
        createMessages:builder.mutation({
            query:(data)=> {
                const token = cookie.get("tlhtoken");
                return {
                    url:'/createMessages',
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
        retrieveChats:builder.query({
            query:()=> {
                const token = cookie.get("tlhtoken");
                return {
                    url:'/retrieveChats',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include'
                }
            },
            providesTags:['chats']
        }),
        fetchAllMessages:builder.query({
            query:(id)=> {
                const token = cookie.get("tlhtoken");
                return {
                    url:`/fetchAllMessages/${id}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include'
                }
            }
        }),
    })
})

export const {useCreateChatsMutation,useCreateMessagesMutation,useRetrieveChatsQuery,useFetchAllMessagesQuery} = chatApi
