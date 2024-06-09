import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const addOrgSocialLinks = createAsyncThunk('user/addOrgSocial',async ({socialName,link,data},{rejectWithValue}) => {
    
    try{
        const token = cookie.get('token')
        if(data?.id){ 
            const userRes = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/organization/socialLinks/${data?.id}`,{name:socialName,link},
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
        }else{
            alert("something went wrong try another time!")
            console.log("something went wrong try another time!")
            return 
        }
    }catch(error){
        return rejectWithValue(error.userRes.data)
    }
})



