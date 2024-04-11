import React from 'react'
import { Home, Mail, Phone } from 'lucide-react';

const Header = ({ data }) => {
    
    return (
        <div className='flex items-center justify-between'>
            <div className='flex-1'>
                {data?.resumeHeader?.[0]?.name && <div className='text-3xl font-bold font-mono'>{data?.resumeHeader?.[0]?.name}</div>}
                {data?.resumeHeader?.[0]?.title && <div className='text-[#666666] text-sm font-mono mt-2'>{data?.resumeHeader?.[0]?.title}</div>}
                {data?.resumeHeader?.[0]?.description &&<div className='text-[#666666] text-sm font-mono mt-1'>{data?.resumeHeader?.[0]?.description}</div>}
                {data?.resContact?.[0]?.address &&
                <div className='text-[#666666] text-sm font-mono flex items-center gap-2 mt-1'>
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
}

export default Header
