import React from 'react'
import { CornerUpRight, Briefcase } from 'lucide-react';

const Experience = ({ data, templateSty }) => {

    if (templateSty == 'minimal') {
        return (
            data?.resExp ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#414652] p-1 rounded-md'>
                            <Briefcase size={'20px'} />
                        </span>
                        <span>Work Experience</span>
                    </div>
                    {data?.resExp?.map((item, index) => (
                        <div className='flex flex-row mt-2 gap-2' key={index}>
                            <div className='mt-1'>
                                <CornerUpRight size={'13px'} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <div className='font-semibold'>{item.cname}</div>
                                    <div className='font-mono bg-[#F3F4F6] px-2 py-1 text-xs rounded-md font-extrabold text-[#414652]'>
                                        {item.jtype}
                                    </div>
                                </div>
                                <div className='font-mono text-sm leading-none mt-1 font-bold'>
                                    {item.jtitle}
                                </div>
                                <div className='text-[#666666] text-xs font-mono mt-2 font-bold'>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>) : ""
        )
    } else if (templateSty == 'IT') {
        return (
            data?.resExp ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#2D343C] bg-[#2D343C] shadow p-1 rounded-md'>
                            <Briefcase size={'20px'} className='text-[#fff]' />
                        </span>
                        <span className='font-extrabold uppercase'>Work Experience</span>
                    </div>
                    {data?.resExp?.map((item, index) => (
                        <div className='flex flex-row mt-2 gap-2' key={index}>
                            <div className='mt-1'>
                                <CornerUpRight size={'13px'} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-2'>
                                    <div className='font-extrabold text-[#2D343C] text-lg'>{item.cname}</div>
                                    <div className='font-serif bg-[#F3F4F6] px-2 py-1 text-xs shadow rounded-md font-extrabold text-[#414652] border'>
                                        {item.jtype}
                                    </div>
                                </div>
                                <div className='font-serif text-lg leading-none mt-1 font-extrabold'>
                                    {item.jtitle}
                                </div>
                                <div className='text-[#666666] text-sm font-serif mt-2 font-bold'>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>) : ""
        )
    }
}

export default Experience
