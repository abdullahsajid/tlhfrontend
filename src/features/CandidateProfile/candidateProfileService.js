import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const candidateProfile = createAsyncThunk('user/candidateProfile',async ({name,bio,about,education,banner,avatar,experience},{rejectWithValue}) => {
    try{
        const token = cookie.get('tlhtoken')
        // console.log("payload",{name,bio,about,education,banner,avatar,experience})
        // console.log("Token",token)
        const userRes = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/createProfile`,{name,bio,about,education,banner,avatar,experience},
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

