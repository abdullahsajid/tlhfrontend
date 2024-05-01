import React, { useEffect, useState } from 'react'
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ handler }) => {
    const [toggleBr, setToggleBr] = useState(false)
    useEffect(() => {
        if (window.innerWidth < 500) {
            setToggleBr(!toggleBr)
        }
    }, [])
   
    return (
        <div className='bg-[#010101] m-2 rounded-md transition-all hover:custom-shadow mt-4'>
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6 custom__bg'>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 mb-5 max-sm:gap-3'>
                    <div className='text-[35px] max-sm:text-[30px] text-[#fff] font-bold tracking-wide'>
                        Tribute towards {toggleBr ? '' : <br />}
                        our ideal career
                    </div>
                    <div>
                        <span className='text-[#68647B]'>
                            Moving forward towards your ideal career inst easy <br />
                            but every step brings you closer to achieving your dreams
                        </span>
                        <div className='flex gap-2 mt-5'>
                            <button className='text-[#333] border border-[#101010] bg-[#F7F8F9] py-1 px-3 rounded-md transition-all'
                            >
                               <Link to={'/login'}>Login</Link> 
                            </button>
                            <button className='text-[#F7F8F9] border border-[#F7F8F9] py-1 px-3 rounded-md transition-all'
                                >
                                <Link to={'/signup'}>Register</Link>    
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border border-t-2 border-[#333436]'></div>
                <div className='flex justify-around items-center max-sm:flex-col max-sm:justify-center'>
                    <div className='flex items-center justify-center px-7 py-5 max-sm:py-3 text-[#fff] font-bold text-lg'>
                        TechLinkHub
                    </div>
                    <div className='flex items-center justify-center px-7 py-5 max-sm:py-3 text-[#B7B8BB] font-bold text-[15px]'>
                        Home
                    </div>
                    <div className='flex items-center justify-center px-7 py-5 max-sm:py-3 text-[#B7B8BB] font-bold text-[15px]'>
                        Company
                    </div>
                    <div className='flex items-center justify-center px-7 py-5 max-sm:py-3 text-[#B7B8BB] font-bold text-[15px]'>
                        Jobs
                    </div>
                    <div className='flex items-center justify-center px-7 py-5 max-sm:py-3 text-[#B7B8BB] font-bold text-[15px]'>
                        Community
                    </div>
                    <div className='flex items-center gap-3 max-sm:mt-2'>
                        <div className='border rounded-full p-1'> <Linkedin className='text-[#fff]' /></div>
                        <div className='border rounded-full p-1'> <Instagram className='text-[#fff]' /></div>
                        <div className='border rounded-full p-1'> <Twitter className='text-[#fff]' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
