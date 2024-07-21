import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()

export const login = createAsyncThunk('user/login',async ({email,password},{rejectWithValue}) => {
    try{
        const userRes = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/login`,{email,password},{
            Headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true
        })
        cookie.set("tlhtoken",userRes.data.token,{path:'/'})
        localStorage.setItem("loginUser",JSON.stringify(userRes.data))
        return await userRes.data
    }catch(error){
        return rejectWithValue(error.userRes.data)
    }
})


// ${process.env.REACT_APP_LOCAL_URL}
// http://localhost:8001