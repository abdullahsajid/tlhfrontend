import React, { useEffect, useState} from 'react'
import {GripHorizontal,Cog,BadgePlus,LogOut } from "lucide-react" 
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/logout'
const cookie = new Cookies()
const Navbar = ({handler,showOption,showBar}) => {
    const token = cookie.get('token')
    const [isAuth,setAuth] = useState(false)
    const dispatch = useDispatch()
    const {loginUser} = useSelector((state)=> state.login)
    const logoutHandler = async () => {
        await dispatch(logout())
        cookie.remove()
        setAuth(false)
    }

    useEffect(()=>{
        (loginUser) ? setAuth(true) : setAuth(false)
    },[loginUser])


  return (
    <div className='p-3 border-solid border-b-2 border-slate-300 bg-white transition-all'>
        <div className='max-w-[90rem] mx-auto flex justify-between items-center transition-all'>
            <div className='flex gap-1 justify-center items-center'>
                <span className='flex justify-center items-center custom-bg-lg to-blue-500 text-white p-[3px] rounded-[0.20rem] font-bold shadow-md'>Tech</span>
                <span className='font-semibold'>LinkHub</span>
            </div>
            <div className='w-[35rem]'>
                <input type="text" className='w-full rounded-md p-1 border-2 border-slate-300 shadow' />
            </div>
            <div>
                {isAuth ? <div className='flex flex-col transition-all'>
                    <div className='flex cursor-pointer w-full hover:border hover:border-solid hover:border-[#f6f6f7] hover:bg-[#f6f6f7] rounded-md px-1 py-0 transition-all'
                    onClick={() => showBar()}>
                        <GripHorizontal  />
                    </div>
                    {showOption && (
                        <div className='relative w-max transition-all'>
                            <div className='absolute -left-5 top-20 custom-position-center w-max bg-[#f6f6f7]
                             px-3 py-1 rounded-md shadow-md z-50 flex flex-col'>
                                <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                border-solid border-b-2 border-slate-300 rounded-md hover:bg-white transition-all' onClick={()=>handler(0)}>
                                    <div><Cog size={18}/></div> 
                                    <div>Edit profile</div>
                                </div>
                                <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                border-solid border-b-2 border-slate-300 rounded-md hover:bg-white transition-all' onClick={()=>handler(1)}>  
                                    <div><BadgePlus  size={18}/></div> 
                                    <div>Edit organization</div>
                                </div>
                                <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 rounded-md hover:bg-white transition-all'
                                onClick={logoutHandler}>
                                    <div><LogOut  size={18}/></div> 
                                    <div>Log out</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                : <div className='flex gap-2'>
                        <button className='border-2 border-slate-300 p-1 rounded-[0.20rem] font-semibold shadow text-sm' onClick={()=>handler(2)}>Join Now</button>
                        <button className='flex justify-center items-center custom-bg-lg to-blue-500 shadow-md p-1 rounded-[0.20rem] text-white font-bold text-sm' onClick={()=>handler(3)}>SignIn</button>
                    </div> }

            </div>
        </div>
    </div>
  )
}   

export default Navbar

