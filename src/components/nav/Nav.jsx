import React, { useEffect, useState } from 'react'
import { AlignRight, X } from 'lucide-react';

const Nav = () => {
    const [toggleItem, setToggleItem] = useState(false)
    const [toggleNav, setToggleNav] = useState(false)
    const windowWidth = window.innerWidth

    const handlerNav = () => {
        setToggleNav(!toggleNav)
    }

    useEffect(() => {
        if (windowWidth < 500) {
            setToggleItem(true)
        } else {
            setToggleItem(false)
        }
    }, [windowWidth])
    return (
        <div className='mx-auto px-4 w-full max-w-[1440px] py-6 transition-all'>
            {toggleItem &&
                <div className='flex justify-between rounded-[32px] border bg-[#010101] p-1 transition-all'>
                    <div className='text-[#fff] px-7 py-4 font-bold text-lg transition-all'>
                        TechLinkHub
                    </div>
                    <div className='text-[#fff] px-7 py-4 transition-all'>
                        {toggleNav ? <X className='text-[#fff] transition-all' onClick={handlerNav} /> :
                            <AlignRight className='text-[#fff] transition-all' onClick={handlerNav} />}
                    </div>
                </div>}
            <div className={`flex justify-around rounded-[32px] border bg-[#010101] max-sm:flex-col p-1 transition-all ${toggleNav ? "flex" : "max-sm:hidden"}`}>
                <div className='flex items-center justify-center px-7 py-4 text-[#fff] font-bold text-lg
                hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                    Home
                </div>
                <div className='flex items-center justify-center px-7 py-4 text-[#fff] font-bold text-lg
                hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                    Company
                </div>
                <div className='flex items-center justify-center px-7 py-4 text-[#fff] font-bold text-lg
                hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                    TechLinkHub
                </div>
                <div className='flex items-center justify-center px-7 py-4 text-[#fff] font-bold text-lg
                hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                    Jobs
                </div>
                <div className='flex items-center justify-center px-7 py-4 text-[#fff] font-bold text-lg
                hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                    Community
                </div>
            </div>
        </div>
    )
}

export default Nav
