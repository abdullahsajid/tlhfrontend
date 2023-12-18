import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const getCandidateProfile = createAsyncThunk('user/candidateProfile',async (_,{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        
        const userRes = await axios.get(`http://localhost:8000/candidate/getProfile`,
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

