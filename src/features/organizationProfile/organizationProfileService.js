import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const organizationProfile = createAsyncThunk('user/organizationProfile',async({name,industry,Email,weblink,location,Bio,banner,avatar},{rejectWithValue}) => {
    try{
        const token = cookie.get('token')
        console.log("payload",{name,industry,Email,weblink,location,Bio,banner,avatar})
        console.log("Token",token)
        const userRes = await axios.post(`http://localhost:8000/organization/createOrgProfile`,{name,industry,Email,weblink,location,Bio,banner,avatar},
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


