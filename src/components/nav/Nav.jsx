import React, { useEffect, useState } from 'react'
import { AlignRight, X } from 'lucide-react';
import { Button } from "src/components/ui/button"
import { handler } from 'tailwindcss-animate';
import { Link, useNavigate } from 'react-router-dom';
import ShimmerButton from 'src/components/ui/ShimmerButton';

const Nav = ({handler}) => {
    const [toggleItem, setToggleItem] = useState(false)
    const [toggleNav, setToggleNav] = useState(false)
    const windowWidth = window.innerWidth
    const navigate = useNavigate()
    const handlerNav = () => {
        setToggleNav(!toggleNav)
    }

    const handlerNavigator = () => {
        navigate('/login')
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
                <div className='flex justify-between rounded-[32px] border bg-[#141413] p-1 transition-all'>
                    <div className='text-[#fff] px-7 py-4 font-bold text-lg transition-all'>
                        TechLinkHub
                    </div>
                    <div className='text-[#fff] px-7 py-4 transition-all'>
                        {toggleNav ? <X className='text-[#fff] transition-all' onClick={handlerNav} /> :
                            <AlignRight className='text-[#fff] transition-all' onClick={handlerNav} />}
                    </div>
                </div>}
            <div className={`flex justify-around rounded-[32px] border-2 bg-[rgba(20,20,19,0.9)] border-[#676768] max-sm:flex-col p-1 transition-all ${toggleNav ? "flex" : "max-sm:hidden"}`}>
                <div className={`flex items-center justify-center px-7 py-4 text-[#fff] font-bold text-lg
                hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px] ${toggleNav ? "max-sm:hidden" : ""}`}>
                    TechLinkHub
                </div>
                <div className={`flex ${toggleNav ? 'flex-col' : ''}`}>
                    <a href='#home' className='flex items-center justify-center px-7 py-2 text-[#fff] font-bold text-lg
                    hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                        Home
                    </a>
                    <a href='#feature' className='flex items-center justify-center px-7 py-2 text-[#fff] font-bold text-lg
                    hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                        Features
                    </a>
                    <a href='#explore' className='flex items-center justify-center px-7 py-2 text-[#fff] font-bold text-lg
                    hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                        Explore
                    </a>
                    <a href='#testimonial' className='flex items-center justify-center px-7 py-2 text-[#fff] font-bold text-lg
                    hover:bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                        Testimonial
                    </a>
                </div>
                <div className={`flex items-center ${toggleNav ? "justify-center mb-2" : ""}`}>
                    {/* <Button className='flex items-center justify-center px-7 py-4 font-bold text-lg text-[#000]
                    hover:bg-[#fff] bg-[#fff] hover:text-[#010101] hover:rounded-xl transition-all max-sm:!rounded-[32px]'>
                        <Link to={'/login'}>Get Started</Link> 
                    </Button> */}
                    <ShimmerButton className={`shadow-2xl`} onClick={() => handlerNavigator()}>
                      Get Started
                    </ShimmerButton>
                </div>
            </div>
        </div>
    )
}

export default Nav
