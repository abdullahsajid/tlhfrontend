import React from 'react'
import Marquee from 'react-fast-marquee';
import { FolderOpen } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Users } from 'lucide-react';

const Activity = () => {
    return (
        <div className='bg-[#fff] m-2 rounded-md transition-all hover:custom-shadow mt-4 border-2 border-[#676768]'>
            <div className='mx-auto px-4 w-full max-w-[1440px] py-1 overflow-x-hidden relative '>
                <div className='flex justify-around max-sm:flex-col'>
                    <Marquee className='flex justify-around'>
                        <div>
                            <img src="./google-logo.jpg" height={50} className='w-32 h-28 object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./fbIcon.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./netsol.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./superlab.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./teslaIcon.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./microsoft.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./nasa.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./ibm.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                        <div>
                            <img src="./hp.png" className='w-32 h-[70px] object-contain mx-14' />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Activity
