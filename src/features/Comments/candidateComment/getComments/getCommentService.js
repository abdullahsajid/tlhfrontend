import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const userComment = createApi({
    reducerPath:'userComments',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    tagTypes:['usercomment'],
    endpoints:(builder) => ({
        postComments:builder.mutation({
            query:({id,comment}) => {
                const token = cookie.get("token");
                
                return {
                    url:`candidate/postComment/${id}`,
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
            invalidatesTags:['usercomment']
        }),
        getComments:builder.query({
            query:({id}) => {
                const token = cookie.get("token");
                return {
                    url:`candidate/getComments/${id}`,
                    method:'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include"
                }
            },
            providesTags:['usercomment']
        })
    })
})
export const {useGetCommentsQuery,usePostCommentsMutation} = userComment

export const getCommentCandidate = createAsyncThunk('user/getCandidateComment',async ({id},{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        
        const userRes = await axios.get(`http://localhost:8000/candidate/getComments/${id}`,
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


export const summonAllComments = createAsyncThunk('user/summonAllProject',async (_,{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        
        const userRes = await axios.get(`http://localhost:8000/candidate/getallcomments`,
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