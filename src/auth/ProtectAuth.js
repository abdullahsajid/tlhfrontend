import React, { Children } from 'react'
import Cookies from 'universal-cookie'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
const cookie = new Cookies()
const Auth = () => {
    const {loginUser} = useSelector((state)=> state.login)

    if(loginUser){
      return loginUser.token ? <Outlet/> : <Navigate to={'/'}/>
    }
    return <Navigate to={'/'}/>
}

export default Auth
