import React from 'react'
import { Home, Mail, Phone } from 'lucide-react';

const Header = ({ data, templateSty }) => {

    if (templateSty == 'minimal') {
        return (
            <div className='flex items-start justify-between max-sm:flex-col-reverse max-sm:gap-3'>
                <div className='flex-1'>
                    {data?.resumeHeader?.[0]?.name && <div className='text-3xl font-bold font-mono'>{data?.resumeHeader?.[0]?.name}</div>}
                    {data?.resumeHeader?.[0]?.title && <div className='text-[#666666] text-sm font-bold font-mono mt-2'>{data?.resumeHeader?.[0]?.title}</div>}
                    {data?.resumeHeader?.[0]?.description && <div className='text-[#666666] text-sm font-bold font-mono mt-1'>{data?.resumeHeader?.[0]?.description}</div>}
                    {data?.resContact?.[0]?.address &&
                        <div className='text-[#666666] text-sm font-mono flex items-center gap-2 mt-1 font-bold'>
                            <Home size={'13px'} /> {data?.resContact?.[0]?.address}
                        </div>}
                    <div className='flex gap-2 items-center mt-3'>
                        {data?.resContact?.[0]?.email &&
                            <a href={`mailto:${data?.resContact?.[0]?.email}`} className='text-[#666666] text-sm font-mono border-2 p-1 rounded-md'>
                                <Mail size={'15px'} className='text-[#666666]' />
                            </a>}
                        {data?.resContact?.[0]?.phone && <a href={`tel:+${data?.resContact?.[0]?.phone}`} className='text-[#666666] text-sm font-mono border-2 p-1 rounded-md'>
                            <Phone size={'15px'} className='text-[#666666]' />
                        </a>}
                    </div>
                </div>
                {data?.resumeHeader?.[0]?.img && <div className='relative flex shrink-0 overflow-hidden rounded-xl w-[7rem] h-[7rem]'>
                    <img src={`${data?.resumeHeader?.[0]?.img}`} className='aspect-square h-full w-full' />
                </div>}
            </div>
        )
    } else if (templateSty == 'IT') {
        return (
            <div className='flex max-sm:flex-col gap-2'>
                <div className='flex items-start gap-2 flex-1 max-sm:flex-col max-sm:items-center w-[666px]'>
                    {data?.resumeHeader?.[0]?.img && <div className='relative flex shrink-0 overflow-hidden rounded-xl w-[7rem] h-[7rem]
                    border-[3px] border-[#2D343C] p-1'>
                        <img src={`${data?.resumeHeader?.[0]?.img}`} className='aspect-square h-full w-full border-2 rounded-xl' />
                    </div>}
                    <div className='flex flex-col flex-1 max-sm:justify-center max-sm:flex-col max-sm:items-center'>
                        {data?.resumeHeader?.[0]?.name && <div className='text-4xl font-bold text-[#2D343C] font-serif'>{data?.resumeHeader?.[0]?.name}</div>}
                        {data?.resumeHeader?.[0]?.title && <div className='text-[#BD9E6E] text-lg font-bold font-serif mt-2'>{data?.resumeHeader?.[0]?.title}</div>}
                        {data?.resumeHeader?.[0]?.description && <div className='text-[#575757] text-sm font-extrabold font-serif mt-1'>{data?.resumeHeader?.[0]?.description}</div>}
                    </div>
                </div>
                {(data?.resContact?.[0]?.email || data?.resContact?.[0]?.phone || data?.resContact?.[0]?.address) && (
                    <div className='flex flex-col bg-[#2D343C] p-5 gap-3 rounded-md w-[230px]'>
                        {data?.resContact?.[0]?.email &&
                            <div className='flex gap-2'>
                                <a href={`mailto:${data?.resContact?.[0]?.email}`}
                                    className='text-[#666666] text-sm font-serif flex items-center gap-2'>
                                    <span className='border p-1 rounded-md bg-[#fff]'>
                                        <Mail size={'15px'} className='text-[#2D343C]' />
                                    </span>
                                    <span className='text-[#fff] font-serif overflow-hidden whitespace-nowrap max-w-[180px] overflow-ellipsis'>
                                        {data?.resContact?.[0]?.email}
                                    </span>
                                </a>
                            </div>
                        }
                        {data?.resContact?.[0]?.phone &&
                            <a href={`tel:+${data?.resContact?.[0]?.phone}`}
                                className='text-[#666666] text-sm font-serif flex items-center gap-2'>
                                <span className='border p-1 rounded-md bg-[#fff]'>
                                    <Phone size={'15px'} className='text-[#2D343C]' />
                                </span>
                                <span className='text-[#fff] font-serif overflow-hidden whitespace-nowrap max-w-[180px] overflow-ellipsis'>
                                    {data?.resContact?.[0]?.phone}
                                </span>
                            </a>}
                        {data?.resContact?.[0]?.address &&
                            <div className='text-[#666666] text-sm font-serif flex items-center gap-2 mt-1 font-bold'>
                                <span className='border p-1 rounded-md bg-[#fff]'>
                                    <Home size={'15px'} className='text-[#2D343C]' />
                                </span>
                                <span className='text-[#fff] font-serif overflow-hidden whitespace-nowrap max-w-[180px] overflow-ellipsis'>
                                    {data?.resContact?.[0]?.address}
                                </span>
                            </div>}
                    </div>
                )}
            </div>
        )
    }

}

export default Header
