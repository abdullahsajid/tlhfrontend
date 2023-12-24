import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const candidatePost = createAsyncThunk('user/candidatePost',async ({content,url},{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        const userRes = await axios.post(`http://localhost:8000/candidate/candidatePost`,{content,url},
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

