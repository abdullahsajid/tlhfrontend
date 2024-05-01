import React, { useEffect, useState } from 'react'
import { GripHorizontal, Cog, BadgePlus, LogOut, NotepadTextDashed,HandCoins,DatabaseZap} from "lucide-react"
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/logout'
import { Link } from 'react-router-dom'
import { setUpdateJobPostPanel,setJobPostedData } from 'src/features/skillAssessment/AssessmentSlice'
const cookie = new Cookies()

const Navbar = ({ handler, showOption, showBar }) => {
    const token = cookie.get('token')
    const [isAuth, setAuth] = useState(false)
    const dispatch = useDispatch()
    const { loginUser } = useSelector((state) => state.login)

    const logoutHandler = async () => {
        await dispatch(logout())
        cookie.remove()
        setAuth(false)
    }

    const handlerStripe = (e) => {
        fetch("http://localhost:8000/candidate/create-checkout-session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: [{ name: "Apis integration", price: 500, quantity: 1 }],
            }),
          })
            .then((res) => {
              if (res.ok) return res.json();
              return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
              window.location = url;
            })
            .catch((e) => {
              console.error(e.error);
            });
    }
        

    useEffect(() => {
        (loginUser) ? setAuth(true) : setAuth(false)
    }, [loginUser])


    return (
        <div className='p-3 px-5 border-solid border-2 border-[#383838] bg-slate-900 hover:bg-slate-900/90 max-w-[90rem] mx-auto rounded-[32px] transition-all'
            style={{boxShadow:'inset 0 -1px 0 0 #333'}}
        >
            <div className='flex justify-between items-center transition-all'>
                <Link to={`${(loginUser.data.name === 'admin007') ? '/admin' : '/home'}`} className='flex gap-1 justify-center items-center'>
                    <span className='flex justify-center items-center bg-[#f7f7f7] to-blue-500 text-[#000] p-[3px] rounded-[0.20rem] font-bold shadow-md'>Tech</span>
                    <span className='font-semibold text-[#fff]'>LinkHub</span>
                </Link>
                <div className='w-[35rem]'>
                    <input type="text" 
                        className='w-full rounded-md px-2 py-1.5 border-2 bd_color bg-slate-900/90 hover:bg_cust 
                            shadow text-[#fff] focus:border-[#383838] focus:outline-none transition-all' 
                            placeholder='Search Jobs...'
                    />
                </div>
                <div>
                    {isAuth ? <div className='flex flex-col transition-all'>
                        <div className='flex cursor-pointer w-full hover:border hover:border-solid hover:border-[#676768] rounded-md px-1 py-0 transition-all'
                            onClick={() => showBar()}>
                            <GripHorizontal className='text-[#fff]' />
                        </div>
                        {showOption && (
                            <div className='relative w-max transition-all'>
                                <div className={`absolute -left-5 ${(loginUser.data.name === 'admin007') ? "top-12" : "top-36"} custom-position-center w-max bg-[#FFF]
                                    px-3 py-1 rounded-md shadow-md z-50 flex flex-col transition-all`}>
                                    {(loginUser.data.name === 'admin007') ? '' :
                                        <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => handler(0)}>
                                            <div><Cog size={18} /></div>
                                            <div>Edit profile</div>
                                        </div>}
                                    {(loginUser.data.name === 'admin007') ? '' : <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => handler(1)}>
                                        <div><BadgePlus size={18} /></div>
                                        <div>Edit organization</div>
                                    </div>}
                                    {(loginUser.data.name === 'admin007') ? '' :
                                        <Link to={'/edit/resume'} className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => showBar()}>
                                            <div><NotepadTextDashed size={18} /></div>
                                            <div>my resume</div>
                                        </Link>}
                                    {(loginUser.data.name === 'admin007') ? '' :
                                        <Link to={'#'} className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                            border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' 
                                            onClick={() => {
                                                    dispatch(setUpdateJobPostPanel(true));
                                                    dispatch(setJobPostedData(null))
                                                    showBar()
                                                }
                                            }
                                        >
                                            <div><HandCoins size={18} /></div>
                                            <div>Create job</div>
                                        </Link>}
                                    {(loginUser.data.name === 'admin007') ? '' :
                                        <Link to={'/postedjobs'} className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => showBar()}>
                                            <div><DatabaseZap size={18} /></div>
                                            <div>posted job</div>
                                        </Link>}
                                    {(loginUser.data.name === 'admin007') ? '' :
                                        <Link to={'#'} className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => handlerStripe()}>
                                            <div><DatabaseZap size={18} /></div>
                                            <div>Payment</div>
                                        </Link>}  
                                    <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 rounded-md hover:bg-[#F2F2F2] transition-all'
                                        onClick={logoutHandler}>
                                        <div><LogOut size={18} /></div>
                                        <div>Log out</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                        : <div className='flex gap-2'>
                            <button className='border-2 border-slate-300 p-1 rounded-[0.20rem] font-semibold shadow text-sm' onClick={() => handler(2)}>Join Now</button>
                            <button className='flex justify-center items-center custom-bg-lg to-blue-500 shadow-md p-1 rounded-[0.20rem] text-white font-bold text-sm' onClick={() => handler(3)}>SignIn</button>
                        </div>}

                </div>
            </div>
        </div>
    )
}

export default Navbar

