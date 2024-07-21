import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const ResumeContactService = createAsyncThunk('user/reusumeContact',async ({contact_address,contact_email,contact_phone},{rejectWithValue}) => {
    try{
        const token = cookie.get('tlhtoken')
        
        const userRes = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/resumeContact`,{contact_address,contact_email,contact_phone},
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
