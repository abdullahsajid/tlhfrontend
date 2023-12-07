import React from "react"
import { Link } from "react-router-dom"
const SidebarItems = ({label,Icon,active,onActive,endpoint}) => {
  return (
    <Link to={endpoint} onClick={onActive} className={`flex items-center gap-x-2 text-slate-500 text-sm font-[500] 
    rounded-md transition-all hover:text-white hover:custom-bg-lg hover:shadow-lg cursor-pointer ${active ? "custom-bg-lg shadow-lg text-white" : ""}`}>
      <div className='flex items-center gap-x-2 py-3.5 px-3 pl-2'>
        <Icon size={22}/>
        {label}
      </div>
    </Link>
  )
}

export default SidebarItems
