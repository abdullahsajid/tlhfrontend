import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'
const cookie = new Cookies()
const initialState = {
    isAuth:false,
    loading:true
}
const token = cookie.get('token')
export const isAuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        isAuthReq:(state)=>{
            state.loading = true
        },
        isAuthSuccess:(state,action)=>{
            state.loading = false  
            if(token){
                state.isAuth = true
            }
        },
        isAuthReject:(state,action)=>{
            state.error = action.payload
        }
    }
})
export const {isAuthReq,isAuthSuccess,isAuthReject} = isAuthSlice.actions
export default isAuthSlice.reducer

