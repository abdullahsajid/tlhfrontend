import React, { useEffect, useState } from 'react'
import { GripHorizontal, Cog, BadgePlus, LogOut, NotepadTextDashed,HandCoins,DatabaseZap,Menu,X } from "lucide-react"
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/logout'
import { Link, useNavigate } from 'react-router-dom'
import { setUpdateJobPostPanel,setJobPostedData,setPaymentToggle,setSideBarToggle} from 'src/features/skillAssessment/AssessmentSlice'
import { useSearchResultQuery } from 'src/features/Search/searchApis'
import { Input } from 'src/components/ui/input'
import axios from 'axios'

const cookie = new Cookies()

const Navbar = ({ handler, showOption, showBar }) => {
    const token = cookie.get('token')
    const navigation = useNavigate()
    const [isAuth, setAuth] = useState(false)
    const dispatch = useDispatch()
    const { loginUser } = useSelector((state) => state.login)
    const sidebartoggle = useSelector((state) => state.assessment.sidebarToggle)
    const [search,setSearch] = useState('')
    const [searchPayload,setSearchPayload] = useState([])
    const logoutHandler = async () => {
        await dispatch(logout())
        cookie.remove()
        setAuth(false)
        navigation('/')
    }

    
        
    const handlerSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const fetchSearchData = async () => {
        const token = cookie.get('token')
        const res = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/search?q=${search}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setSearchPayload(res?.data?.data)
    }

    const handlerProfileNavigator = (id,name,val) => {
        if(val === 'profile'){
            navigation(`/profile/${name}/${id}`)
            setSearch('')
        }else if(val === 'org_profile'){
            navigation(`/organization/${name}/${id}`)
            setSearch('')
        }
    }

    const handlerAllProfileView = (search) => {
        navigation(`/searchfeed/${search}`)
        setSearch('')
    }

    useEffect(() => {
        if(search !== ''){
            fetchSearchData()
        }
    },[search])

    // console.log(search);
    // console.log("payload",searchPayload);
    useEffect(() => {
        (loginUser) ? setAuth(true) : setAuth(false)
    }, [loginUser])



    return (
        <div className='p-3 px-5 max-sm:px-3 border-solid border-2 border-[#383838] bg-slate-900 hover:bg-slate-900/90 max-w-[90rem] mx-auto max-sm:w-[375px] rounded-[32px] transition-all'
            style={{boxShadow:'inset 0 -1px 0 0 #333'}}
        >
            <div className='flex justify-between items-center transition-all max-sm:gap-3'>
                    <div className='hidden max-sm:flex mr-3'>
                        {sidebartoggle ? <X color='#fff' onClick={() => dispatch(setSideBarToggle(false))}/> : <Menu color='#fff' onClick={() => dispatch(setSideBarToggle(true))}/>} 
                    </div>
                <Link to={`${(loginUser?.data?.name === 'admin007') ? '/admin' : '/home'}`} className='flex gap-1 justify-center items-center max-sm:text-[14px] relative'>
                    <span className='flex justify-center items-center bg-[#f7f7f7] to-blue-500 text-[#000] p-[3px] rounded-[0.20rem] font-bold shadow-md'>Tech</span>
                    <span className='font-semibold text-[#fff]'>LinkHub</span>
                    <span className='text-[#333] px-1 text-[12px] font-bold absolute left-28 max-sm:left-24 -top-1.5 ml-1 z-[9999] bg-[#fff] rounded'>Beta</span>
                </Link>
                <div className='w-[35rem] relative transition-all max-sm:hidden'>
                    <Input type="text" 
                        className='w-full rounded-md px-2 py-1.5 border-2 bd_color bg-slate-900/90 hover:bg_cust 
                            shadow text-[#fff] focus:border-[#383838] focus:outline-none transition-all' 
                            placeholder='Search here...'
                            value={search}
                            onChange={handlerSearch}
                            onKeyPress={(e) => {
                                if(e.key === 'Enter'){
                                    e.preventDefault()
                                    handlerAllProfileView(search)
                                }
                            }}
                    />
                    <div className={`bg-[#fff] w-full h-max absolute top-10 rounded-b-md shadow border-2 border-[#D0D0D0] p-3 transition-all d-none  ${search !== '' && "flex flex-col"}`}>
                        {searchPayload.length == 0 ? <div className='flex items-center justify-center text-sm font-bold'>Not Found</div> : searchPayload?.map((item,index) => (
                            <div className='flex items-center gap-2 hover:bg-[#eeeded] p-1 rounded-md transition-all cursor-pointer'key={index} onClick={() => handlerProfileNavigator(item?.id,item?.org_name,item?.source_table)}>
                                <div className='flex'>
                                    <img src={`${item?.avatar_url}`} className='w-[35px] h-[35px] object-cover rounded-full' style={{maxWidth:"none"}} />
                                </div>
                                <div className='flex flex-col'>
                                    <div>{item?.org_name}</div>
                                    <div className='text-xs searchTitleOver w-full' style={{textOverflow: 'ellipsis'}}>
                                        {item?.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {isAuth &&
                    <div className='flex flex-col transition-all'>
                        {/* <div className='border border-[#676768] rounded-md px-1 py-1 transition-all'>
                            <MessageCircleMore className='text-[#fff]'/>
                        </div> */}
                        <div className='flex cursor-pointer w-full hover:border hover:border-solid hover:border-[#676768] rounded-md px-1 py-0 transition-all'
                            onClick={() => showBar()}>
                            <GripHorizontal className='text-[#fff]' />
                        </div>
                        {showOption && (
                            <div className='relative w-max transition-all'>
                                <div className={`absolute -left-5 max-sm:-left-12 ${(loginUser?.data?.name === 'admin007') ? "top-12" : "top-36"} custom-position-center w-max bg-[#FFF]
                                    px-3 py-1 rounded-md shadow-md z-50 flex flex-col transition-all`}>
                                    {(loginUser?.data?.name === 'admin007') ? '' :
                                        <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => handler(0)}>
                                            <div><Cog size={18} /></div>
                                            <div>Edit profile</div>
                                        </div>}
                                    {(loginUser?.data?.name === 'admin007') ? '' : <div className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => handler(1)}>
                                        <div><BadgePlus size={18} /></div>
                                        <div>Edit organization</div>
                                    </div>}
                                    {(loginUser?.data?.name === 'admin007') ? '' :
                                        <Link to={'/edit/resume'} className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => showBar()}>
                                            <div><NotepadTextDashed size={18} /></div>
                                            <div>my resume</div>
                                        </Link>}
                                    {(loginUser?.data?.name === 'admin007') ? '' :
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
                                            <div>Create Project</div>
                                        </Link>}
                                    {(loginUser?.data?.name === 'admin007') ? '' :
                                        <Link to={'/postedjobs'} className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => showBar()}>
                                            <div><DatabaseZap size={18} /></div>
                                            <div>posted job</div>
                                        </Link>}
                                    {(loginUser?.data?.name === 'admin007') ? '' :
                                        <Link to={'#'} className='cursor-pointer py-1 px-1 flex flex-row justify-start items-center gap-x-1 
                                        border-solid border-b-2 border-slate-300 rounded-md hover:bg-[#F2F2F2] transition-all' onClick={() => {
                                            dispatch(setPaymentToggle(true))
                                            showBar()
                                        }}>
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
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Navbar

