import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const ResumeEduService = createAsyncThunk('user/resumeEdu',async ({institution_name, program_name, description},{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        
        const userRes = await axios.post(`http://localhost:8000/candidate/resumeEdu`,{institution_name, program_name, description},
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
