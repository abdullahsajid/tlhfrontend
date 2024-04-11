import React from 'react'

const Education = ({ data }) => {
    return (
        data?.resEdu ? (
        <div className='flex flex-col mt-5'>
            <div className='text-xl font-bold'>Education</div>
            {data?.resEdu.map((item, index) => (
                <div className='flex flex-col mt-3 gap-2' key={index}>
                    <div className='font-semibold leading-none'>{item.iname}</div>
                    <div className='font-mono text-sm leading-none'>{item.pname}</div>
                    <div className='font-mono text-sm text-[#666666]'>{item.desc}</div>
                </div>
            ))}
        </div>): ""
    )
}

export default Education
