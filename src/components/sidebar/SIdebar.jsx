
import React, { useState } from 'react'
import SidebarItems from './SidebarItems'
import { Home,Building2,Bell,ClipboardList  } from 'lucide-react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const[active,setActive] = useState(0)
    const data = [
        {
            id:0,
            label:"Home",
            icon: Home,
            endpoint:'/'
        },
        {
            id:1,
            label:"Jobs",
            icon:ClipboardList,
            endpoint:'/'
        },
        {
            id:2,
            label:"Organization",
            icon:Building2,
            endpoint:'/organization_profile'
        },
        {
            id:3,
            label:"Notifications",
            icon:Bell,
            endpoint:'/'
        }
    ]
    const handlerActive = (id) => {
        setActive(id)
    }
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm '>
        <div className='flex justify-between flex-col w-full h-full p-3 pl-0'>
            <div className='flex flex-col gap-y-2'>
            {data.map((items)=>(
                <SidebarItems label={items.label} Icon={items.icon}
                 active={items.id === active} onActive={()=>handlerActive(items.id)} endpoint={items.endpoint}/>
            ))}
            </div>
            <Link to='/profile' className='flex flex-row items-center bg-[#f6f6f7] px-3 py-2 rounded-md gap-y-3 border border-solid border-[#f6f6f7] 
            shadow-md w-full hover:custom-border transition-all'>
                <div className='mr-3'>
                    <img src="https://avatars.githubusercontent.com/u/77003390?v=4" alt="" className='w-10 h-10 rounded-md' />
                </div>
                <div>
                    Abdullah sajid
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
