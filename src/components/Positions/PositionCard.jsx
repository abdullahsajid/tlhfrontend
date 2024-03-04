import React from 'react'

const PositionCard = ({img,name,time,city,timing,role,desc}) => {
    return (
        <div className='flex flex-col border border-[#fff] p-3 rounded-md bg-[#fff] shadow-lg transition-all hover:custom-shadow'>
            <div className='flex items-center gap-3'>
                <div>
                    <img src={img} className='w-[35px] h-[35px] object-cover rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-[15px] font-bold'>{name}</span>
                    <span className='text-[#68647B] text-[13px]'>{time}</span>
                </div>
            </div>
            <div className='flex gap-3 mt-3'>
                <div className='border rounded-md p-1 text-[14px] bg-[#ECECEE]'>{city}</div>
                <div className='border rounded-md p-1 text-[14px] bg-[#ECECEE]'>{timing}</div>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <h1 className='text-[17px] font-bold'>{role}</h1>
                <span className='text-[14px]'>{desc}</span>
            </div>
            <div className='flex mt-2'>
                <button className='text-[#00AA76] border border-[#00AA76] py-1 px-3 rounded-md transition-all hover:text-[#fff] hover:bg-[#00AA76]'>
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default PositionCard
