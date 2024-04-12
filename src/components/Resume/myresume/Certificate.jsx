import React from 'react'
import { ShieldCheck, CornerUpRight, ArrowUpRight } from 'lucide-react';

const Certificate = ({ data, templateSty }) => {
    if (templateSty == 'minimal') {
        return (
            data?.resCertificate ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#414652] p-1 rounded-md'>
                            <ShieldCheck size={'20px'} />
                        </span>
                        <span>
                            Certificate
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                        {data?.resCertificate.map((item, index) => (
                            <div className='flex flex-col border px-3 py-1 rounded-lg shadow' key={index}>
                                <div className='font-semibold tracking-tight text-base'>
                                    <a href={`${item.link}`} className='hover:underline'>{item.name}</a>
                                </div>
                                <div className='text-[#333] text-xs font-mono mt-2 font-extrabold'>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>) : ""
        )
    } else if (templateSty == 'IT') {
        return (
            data?.resCertificate ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#2D343C] bg-[#2D343C] shadow p-1 rounded-md'>
                            <ShieldCheck size={'20px'} className='text-[#fff]' />
                        </span>
                        <span className='font-extrabold uppercase'>
                            Certificate
                        </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {data?.resCertificate.map((item, index) => (
                            <div className='flex flex-row mt-2 gap-2' key={index}>
                                <div className='mt-2'>
                                    <CornerUpRight size={'13px'} />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='tracking-tight font-extrabold text-[#2D343C] text-lg'>
                                        <a href={`${item.link}`} className='hover:underline flex items-center gap-1' target='_blank'>
                                            {item.name} <ArrowUpRight size={'13px'} className='text-[#2D343C]' />
                                        </a>
                                    </div>
                                    <div className='text-[#666666] text-sm font-serif mt-2 font-extrabold'>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>) : ""
        )
    }
}

export default Certificate
