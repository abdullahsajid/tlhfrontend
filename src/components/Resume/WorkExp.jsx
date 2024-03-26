import React from 'react'
import { useSelector } from 'react-redux'
const WorkExp = () => {
    const { data } = useSelector((state) => state.getResExp.getResExp)
    return (
        <div className='flex flex-col'>
            <div className='text-2xl font-bold'>
                Work Experience
            </div>
            <div className='mt-3'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='font-semibold text-[17px]'>{data?.[0]?.company_name ? data?.[0]?.company_name : "Company Name"}</div>
                        <div className='border border-solid border-[#000] rounded-md text-sm resumeTag px-[2px]'>{data?.[0]?.job_type ? data?.[0]?.job_type : "job Type"}</div>
                    </div>
                    {/* <div>
                        2021 - 2024
                    </div> */}
                </div>
                <div className='tracking-wider mt-1'>
                    {data?.[0]?.job_title ? data?.[0]?.job_title : "job title"}
                </div>
                <div className='tracking-wider mt-1'>
                    {data?.[0]?.description ? data?.[0]?.description : "add Experience"}
                </div>
            </div>
        </div>
    )
}

export default WorkExp
