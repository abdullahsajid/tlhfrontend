import React from 'react'

const Nav = () => {
    return (
        <div className='mx-auto px-4 w-full max-w-[1440px] py-6'>
            <div className='flex justify-around rounded-[32px] border bg-[#010101]'>
                <div className='flex items-center justify-center px-7 py-5 text-[#fff] font-bold text-lg'>
                    Home
                </div>
                <div className='flex items-center justify-center px-7 py-5 text-[#fff] font-bold text-lg'>
                    Company
                </div>
                <div className='flex items-center justify-center px-7 py-5 text-[#fff] font-bold text-lg'>
                    TechLinkHub
                </div>
                <div className='flex items-center justify-center px-7 py-5 text-[#fff] font-bold text-lg'>
                    Jobs
                </div>
                <div className='flex items-center justify-center px-7 py-5 text-[#fff] font-bold text-lg'>
                    Community
                </div>
            </div>
        </div>
    )
}

export default Nav
