import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const getCandidatePostLike = createAsyncThunk('user/getCandidatePostLike',async ({id},{rejectWithValue}) => {
    try{
        const token = cookie.get('tlhtoken')
        const userRes = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/getlikes/${id}`,
            {
                headers:{
                    "Content-Type":'application/json',
                    Authorization: `Bearer ${token}`
                },
                credentials: "include",
                withCredentials: true
            }
        )

        return await userRes.data
    }catch(error){
        return rejectWithValue(error.userRes.data)
    }
})

export const usersLikes = createApi({
    reducerPath:'userlikes',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    tagTypes:['userPostLikes'],
    endpoints:(builder) => ({
        getUserLike:builder.query({
            query:({id}) => {
                const token = cookie.get("tlhtoken");
                return {
                    url:`/getlikes/${id}`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
            providesTags:['userPostLikes']
        }),
        postUserLike:builder.mutation({
            query:({id}) => {
                const token = cookie.get("tlhtoken");
                return {
                    url:`/postLike/${id}`,
                    method:'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                }
            },
            invalidatesTags:['userPostLikes']
        }),
    })
})

export const {useGetUserLikeQuery,usePostUserLikeMutation} = usersLikes
