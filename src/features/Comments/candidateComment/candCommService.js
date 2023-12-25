import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const commentCandidate = createAsyncThunk('user/candidateComment',async ({id,comment},{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        
        const userRes = await axios.post(`http://localhost:8000/candidate/postComment/${id}`,{comment},
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

