import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const getResumeContact = createAsyncThunk('user/getContact',async (_,{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        
        const userRes = await axios.get(`http://localhost:8000/candidate/getContact`,
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

