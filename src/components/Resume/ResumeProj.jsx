import React from 'react'
import { useSelector } from 'react-redux'
const ResumeProj = () => {
    const {data} = useSelector((state) => state.getResProj.getResProj)
    return (
        <div className='flex flex-col'>
            <div className='text-2xl font-bold mb-1'>
                Projects
            </div>
            <div className='flex flex-col'>
                <a href={`${data?.[0]?.proj_link ? data?.[0]?.proj_link : "#"}`} target='_blank' className='underline font-semibold w-min'>{data?.[0]?.proj_name ? data?.[0]?.proj_name : "Your Project name"}</a>
                <div className='mt-1'>{data?.[0]?.proj_description ? data?.[0]?.proj_description : "tell them about project Experience"}</div>
            </div>
        </div>
    )
}

export default ResumeProj
