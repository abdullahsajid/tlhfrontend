import React from "react"
import { Link,useLocation } from "react-router-dom"
const SidebarItems = ({label,Icon,active,onActive,endpoint}) => {
  const currentPath = useLocation().pathname;
  return (
    <Link to={endpoint} onClick={onActive} className={`flex items-center gap-x-2 text-slate-500 text-sm font-[500] 
    rounded-md transition-all hover:bg-slate-900 hover:text-[#fff] cursor-pointer ${currentPath === `${endpoint}` ? "bg-slate-900 !text-[#fff] hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90" : ""}`}>
      <div className='flex items-center gap-x-2 py-3.5 px-3 pl-2'>
        <Icon size={22}/>
        {label}
      </div>
    </Link>
  )
}

export default SidebarItems
