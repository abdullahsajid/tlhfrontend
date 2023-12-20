import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const updateProfileService = createAsyncThunk('user/updateCandidatePro',async ({name,bio,about,education,banner,avatar,experience},{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        // console.log("payload",{name,bio,about,education,banner,avatar,experience})
        // console.log("Token",token)
        const userRes = await axios.put(`http://localhost:8000/candidate/updateProfile`,{name,bio,about,education,banner,avatar,experience},
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

