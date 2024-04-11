import React from 'react'
import { CornerUpRight, School } from 'lucide-react';

const Education = ({ data, templateSty }) => {
    if (templateSty == 'minimal') {
        return (
            data?.resEdu ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#414652] p-1 rounded-md'>
                            <School size={'20px'} />
                        </span>
                        <span>Education</span>
                    </div>
                    {data?.resEdu.map((item, index) => (
                        <div className='flex flex-row mt-3 gap-2' key={index}>
                            <div className='mt-1'>
                                <CornerUpRight size={'13px'} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='font-semibold leading-none'>{item.iname}</div>
                                <div className='font-mono text-sm leading-none font-bold'>{item.pname}</div>
                                <div className='font-mono text-sm text-[#666666] font-bold'>{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>) : ""
        )
    } else if (templateSty == 'IT') {
        return (
            data?.resEdu ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#2D343C] bg-[#2D343C] shadow p-1 rounded-md'>
                            <School size={'20px'} className='text-[#fff]' />
                        </span>
                        <span className='font-extrabold uppercase'>Education</span>
                    </div>
                    {data?.resEdu.map((item, index) => (
                        <div className='flex flex-row mt-3 gap-2' key={index}>
                            <div className='mt-1'>
                                <CornerUpRight size={'13px'} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='font-extrabold leading-none text-[#2D343C] text-lg'>{item.iname}</div>
                                <div className='font-serif text-lg leading-none font-extrabold'>{item.pname}</div>
                                <div className='text-sm text-[#666666] font-serif font-bold'>{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>) : ""
        )
    }
}

export default Education
