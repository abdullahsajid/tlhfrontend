import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const logout = createAsyncThunk('user/login',async (_,{rejectWithValue}) => {
    try{
        const userRes = await axios.get(`http://localhost:8000/candidate/logout`,
            {
                headers:{
                    "Content-Type":'application/json',
                    // Authorization: `Bearer ${token}`
                },
                credentials: "include",
                withCredentials: true
            })
            localStorage.removeItem('loginUser')
        return await userRes
    }catch(error){
        return rejectWithValue(error.userRes.data)
    }
})
