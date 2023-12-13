import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const login = createAsyncThunk('user/login',async ({email,password},{rejectWithValue}) => {
    try{
        const userRes = await axios.post(`http://localhost:8000/candidate/login`,{email,password},{
            Headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true
        })
        cookie.set("token",userRes.data.token,{path:'/'})
        localStorage.setItem("loginUser",JSON.stringify(userRes.data))
        return await userRes.data
    }catch(error){
        return rejectWithValue(error.userRes.data)
    }
})
