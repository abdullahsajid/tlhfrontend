import React from 'react'
import Cookies from 'universal-cookie'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const cookie = new Cookies()
const Auth = ({children}) => {
  const navigate = useNavigate()
    // const {loginUser} = useSelector((state)=> state.login)
    // const {signUpUser} = useSelector((state) => state.signup)
    let token = cookie.get('token')
    if(token){
      return (token) ? children : navigate('/')
    }
  
    return navigate('/')

}

export default Auth
