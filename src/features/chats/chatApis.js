import {  createApi,fetchBaseQuery  } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const chatApi = createApi({
    reducerPath:'chatapi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    tagTypes:['chats'],
    endpoints:(builder)=> ({
        createChats:builder.mutation({
            query:(data)=> {
                const token = cookie.get("token");
                return {
                    url:'candidate/createChats',
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
                const token = cookie.get("token");
                return {
                    url:'candidate/createMessages',
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
                const token = cookie.get("token");
                return {
                    url:'candidate/retrieveChats',
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
                const token = cookie.get("token");
                return {
                    url:`candidate/fetchAllMessages/${id}`,
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
