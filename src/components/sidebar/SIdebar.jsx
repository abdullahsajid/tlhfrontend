
import React, { useEffect, useState } from 'react'
import SidebarItems from './SidebarItems'
import { Home,Building2,Bell,ClipboardList  } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
const Sidebar = () => {
    const org = useSelector((state) => state.getOrgProfile.getOp)
    const {loginUser} = useSelector((state) => state.login)
    const [toggleUser,setToggleUser] = useState(false)
    const[active,setActive] = useState(0)
    const [sidebarData, setSidebarData] = useState([]);
    const {data} = useSelector((state) => state.candidateProfile.candidateProfile)
    const [fakeLoading,setFakeLoading] = useState(true)

    useEffect(() => {
      setTimeout(()=> {
        setFakeLoading(false)
      },2000)
    },[])

    useEffect(()=>{
        if(org.data && org.data.id && loginUser?.token){
            setSidebarData([
                {
                    id: 0,
                    label: "Home",
                    icon: Home,
                    endpoint: '/home'
                },
                {
                    id: 1,
                    label: "Jobs",
                    icon: ClipboardList,
                    endpoint: '/'
                },
                {
                    id: 2,
                    label: "Organization",
                    icon: Building2,
                    endpoint: '/organization_profile'
                },
                {
                    id: 3,
                    label: "Notifications",
                    icon: Bell,
                    endpoint: '/'
                }
            ]);
        }
        else if (loginUser?.token) {
            setSidebarData([
                {
                    id: 0,
                    label: "Home",
                    icon: Home,
                    endpoint: '/home'
                },
                {
                    id: 1,
                    label: "Jobs",
                    icon: ClipboardList,
                    endpoint: '/'
                },
                {
                    id: 3,
                    label: "Notifications",
                    icon: Bell,
                    endpoint: '/'
                }
            ]);
        } else {
            setSidebarData([
                {
                    id: 0,
                    label: "Home",
                    icon: Home,
                    endpoint: '/'
                },
                {
                    id: 1,
                    label: "Jobs",
                    icon: ClipboardList,
                    endpoint: '/'
                }
            ]);
        }
    },[loginUser,org.data])

    const handlerActive = (id) => {
        setActive(id)
    }
    
    useEffect(() => {
        loginUser?.token ? setToggleUser(true) : setToggleUser(false)
    },[loginUser,toggleUser])
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm '>
        <div className='flex justify-between flex-col w-full h-full p-3 pl-0'>
            <div className='flex flex-col gap-y-2'>
                {sidebarData.map((items)=>(
                    <SidebarItems label={items.label} Icon={items.icon}
                    active={items.id === active} onActive={()=>handlerActive(items.id)} endpoint={items.endpoint}/>
                ))}
            </div>
            {toggleUser && <Link to='/profile' className='flex flex-row items-center bg-[#f6f6f7] px-3 py-2 rounded-md gap-y-3 border border-solid border-[#f6f6f7] 
            shadow-md w-full hover:custom-border transition-all'>
                <div className='mr-3'>
                    {fakeLoading ? <Skeleton style={{width:'2.5rem', height:'2.5rem', borderRadius:"0.375rem", border:"3px solid #fff"}}/> : data?.avatar_url ? 
                        <img src={`${data?.avatar_url}`} alt="" className='w-10 h-10 rounded-md object-cover' />:<Skeleton style={{width:'2.5rem', height:'2.5rem', borderRadius:"0.375rem",border:"3px solid #fff"}}/>}
                </div>
                <div className='uppercase font-semibold w-full'>
                    {fakeLoading ? <Skeleton width={"100%"} style={{border:"3px solid #fff"}} /> : data?.name ? data?.name : <Skeleton width={"100%"} style={{border:"3px solid #fff"}} />}
                </div>
            </Link>}
        </div>
    </div>
  )
}

export default Sidebar
