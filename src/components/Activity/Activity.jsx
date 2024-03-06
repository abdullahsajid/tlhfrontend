import React from 'react'
import { FolderOpen } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Users } from 'lucide-react';

const Activity = () => {
    return (
        <div className='bg-[#BBF6BE] m-2 rounded-md transition-all hover:custom-shadow mt-4'>
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6'>
                <div className='flex justify-around max-sm:flex-col '>
                    <div className='flex gap-3 items-center max-sm:justify-center'>
                        <FolderOpen />
                        <div className='flex flex-col max-sm:items-center'>
                            <span className='text-[43px] font-bold'>12.000+</span>
                            <span className='font-bold text-[#68647B] text-[14px]'>Open Vacancies</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center max-sm:justify-center'>
                        <Building2 />
                        <div className='flex flex-col max-sm:items-center'>
                            <span className='text-[43px] font-bold'>8.0000+</span>
                            <span className='font-bold text-[#68647B] text-[14px]'>Companies</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center max-sm:justify-center'>
                        <UsersRound />
                        <div className='flex flex-col max-sm:items-center'>
                            <span className='text-[43px] font-bold'>10.000+</span>
                            <span className='font-bold text-[#68647B] text-[14px]'>Active Recruiters</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center max-sm:justify-center'>
                        <Users />
                        <div className='flex flex-col max-sm:items-center'>
                            <span className='text-[43px] font-bold'>60000+</span>
                            <span className='font-bold text-[#68647B] text-[14px]'>Higher Person</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
