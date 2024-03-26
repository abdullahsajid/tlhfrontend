import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const ResumeHeaderService = createAsyncThunk('user/reusumeHeader',async ({name,title,description,img},{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        
        const userRes = await axios.post(`http://localhost:8000/candidate/resumes`,{name,title,description,img},
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
