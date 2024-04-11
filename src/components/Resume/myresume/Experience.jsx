import React from 'react'

const Experience = ({ data }) => {
    return (
        data?.resExp ? (
        <div className='flex flex-col mt-5'>
            <div className='text-xl font-bold'>Work Experience</div>
            {data?.resExp?.map((item, index) => (
                <div className='flex flex-col mt-2' key={index}>
                    <div className='flex gap-2'>
                        <div className='font-semibold'>{item.cname}</div>
                        <div className='font-mono bg-[#F3F4F6] px-2 py-1 text-xs rounded-md font-extrabold text-[#414652]'>
                            {item.jtype}
                        </div>
                    </div>
                    <div className='font-mono text-sm leading-none mt-1'>
                        {item.jtitle}
                    </div>
                    <div className='text-[#666666] text-xs font-mono mt-2'>
                        {item.desc}
                    </div>
                </div>
            ))}
        </div>): ""
    )
}

export default Experience
