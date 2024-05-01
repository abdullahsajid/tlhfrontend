import React from 'react'
import { MapPin } from 'lucide-react';
const PositionCard = ({img,name,time,city,timing,role,skills}) => {
    return (
        <div className='flex flex-col border border-[#fff] p-5 rounded-md bg-[#fff] shadow-lg transition-all hover:custom-shadow'>
            <div className='flex items-center gap-3'>
                <div>
                    <img src={img} className='w-[40px] h-[40px] object-cover rounded-md border border-[#676768] shadow' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-[15px] font-bold'>{name}</span>
                    <span className='text-[#68647B] text-[13px]'>{time}</span>
                </div>
            </div>
            <div className='flex gap-3 mt-3'>
                <div className='flex items-center gap-2 border rounded-md p-1 text-[12px] bg-[#FDD1B0] font-semibold'>
                    <MapPin size={"14px"}/>
                    {city}
                </div>
                <div className='border rounded-md p-1 text-[12px] bg-[#ACD7FE] font-semibold'>{timing}</div>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <h1 className='text-[17px] font-bold'>{role}</h1>
                <div className='flex flex-wrap gap-2'>
                    {skills?.programming.map((skill) => (
                        <div className='border border-[#676768] rounded-lg px-2 py-1'>{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PositionCard
