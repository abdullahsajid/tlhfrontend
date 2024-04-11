import React from 'react'
import { Computer, ArrowUpRight } from 'lucide-react';

const Projects = ({ data, templateSty }) => {
    console.log(data?.resProj);
    if (templateSty == 'minimal') {
        return (
            data?.resProj ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#414652] p-1 rounded-md'>
                            <Computer size={'20px'} />
                        </span>
                        <span>
                            Projects
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                        {data?.resProj.map((item, index) => (
                            <div className='flex flex-col border px-3 py-1 rounded-lg shadow' key={index}>
                                <div className='font-semibold tracking-tight text-base'>
                                    <a href={`${item.plink}`} className='hover:underline'>{item.pname}</a>
                                </div>
                                <div className='text-[#333] text-xs font-mono mt-2 font-extrabold'>
                                    {item.pdesc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>) : ""
        )
    } else if (templateSty == 'IT') {
        return (
            data?.resProj ? (
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#fff] bg-[#fff] p-1 rounded-md'>
                            <Computer size={'20px'} className='text-[#2D343C]' />
                        </span>
                        <span className='font-extrabold uppercase text-[#fff]'>
                            Projects
                        </span>
                    </div>
                    <div className='flex'>
                        {data?.resProj.map((item, index) => (
                            <div className='flex flex-col px-3 py-1' key={index}>
                                <div className='font-semibold tracking-tight text-base text-[#fff]'>
                                    <a href={`${item.plink}`} className='hover:underline flex items-center gap-1' target='_blank'>
                                        {item.pname} <ArrowUpRight size={'13px'} className='text-[#fff]' />
                                    </a>
                                </div>
                                <div className='text-[#fff] text-[10px] font-mono mt-2 font-extrabold'>
                                    {item.pdesc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>) : ""
        )
    }
}

export default Projects
