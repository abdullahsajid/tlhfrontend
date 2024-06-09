import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const addCandidateLinks = createAsyncThunk('user/addLinks',async ({link,socialName},{rejectWithValue}) => {
    try{
        const token = cookie.get('token') 
        const userRes = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/addSocialLinks`,{link,socialName},
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

