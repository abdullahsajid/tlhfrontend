import React from 'react'
import { useSelector } from 'react-redux'
const ResumeEdu = () => {
    const { data } = useSelector((state) => state.getResEdu.getResEdu)
    return (
        <div className='flex flex-col'>
            <div className='text-2xl font-bold'>
                Education
            </div>
            <div className='mt-3'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='font-semibold text-[17px]'>{data?.[0]?.institution_name ? data?.[0]?.institution_name : "Your institution name"}</div>
                    </div>
                    {/* <div>
                    2021 - 2024
                </div> */}
                </div>
                <div className='tracking-wider mt-1'>
                    {data?.[0]?.program_name ? data?.[0]?.program_name : "Your program name"}
                </div>
                <div className='tracking-wider mt-1'>
                    {data?.[0]?.description ? data?.[0]?.description : "Tell them about your program Experience"}
                </div>
            </div>
        </div>
    )
}

export default ResumeEdu
