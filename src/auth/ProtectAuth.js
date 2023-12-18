import React from 'react'
import Cookies from 'universal-cookie'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const cookie = new Cookies()
const Auth = ({children}) => {
    const {loginUser} = useSelector((state)=> state.login)
    // const {signUpUser} = useSelector((state) => state.signup)
    if(loginUser){
      return (loginUser?.token) ? children : <Navigate to={'/'}/>
    }
  
    return <Navigate to={'/'}/>

}

export default Auth
