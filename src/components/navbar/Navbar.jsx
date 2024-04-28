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
              items: [{ name: "Business Coaching Session", price: 500, quantity: 1 }],
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
        <div className='p-3 px-5 border-solid border-b-2 border-slate-300 bg-[#FFF] max-w-[90rem] mx-auto rounded-[32px] transition-all'>
            <div className='flex justify-between items-center transition-all'>
                <Link to={`${(loginUser.data.name === 'admin007') ? '/admin' : '/home'}`} className='flex gap-1 justify-center items-center'>
                    <span className='flex justify-center items-center custom-bg-lg to-blue-500 text-white p-[3px] rounded-[0.20rem] font-bold shadow-md'>Tech</span>
                    <span className='font-semibold'>LinkHub</span>
                </Link>
                <div className='w-[35rem]'>
                    <input type="text" className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]' />
                </div>
                <div>
                    {isAuth ? <div className='flex flex-col transition-all'>
                        <div className='flex cursor-pointer w-full hover:border hover:border-solid hover:border-[#f6f6f7] hover:bg-[#F2F2F2] rounded-md px-1 py-0 transition-all'
                            onClick={() => showBar()}>
                            <GripHorizontal />
                        </div>
                        {showOption && (
                            <div className='relative w-max transition-all'>
                                <div className={`absolute -left-5 ${(loginUser.data.name === 'admin007') ? "top-12" : "top-32"} custom-position-center w-max bg-[#FFF]
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
                                            <div>stripe test</div>
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

