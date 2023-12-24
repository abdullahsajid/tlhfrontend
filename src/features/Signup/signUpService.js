import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk('user/signUp',async ({email,password,name},{rejectWithValue}) => {
    try{
        const userRes = await axios.post(`http://localhost:8000/candidate/signup`,{email,password,name},{
            Headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true
        })
    
        return await userRes.data
    }catch(error){
        return rejectWithValue(error.userRes.data)
    }
})

