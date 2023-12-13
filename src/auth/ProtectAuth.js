import React from 'react'
import Cookies from 'universal-cookie'
import { Outlet } from 'react-router-dom'
const cookie = new Cookies()
const Auth = () => {
    const token = cookie.get('token')
  return (
    <div>
        {token ? <Outlet/> : "" }
    </div>
  )
}

export default Auth
