import React from 'react'

const Certificate = ({ data }) => {
    return (
        data?.resCertificate ? (
        <div className='flex flex-col mt-5'>
            <div className='text-xl font-bold'>Certificate</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                {data?.resCertificate.map((item, index) => (
                    <div className='flex flex-col border px-3 py-1 rounded-lg shadow' key={index}>
                        <div className='font-semibold tracking-tight text-base'>
                            <a href={`${item.link}`} className='hover:underline'>{item.name}</a>
                        </div>
                        <div className='text-[#666666] text-xs font-mono mt-2'>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>): ""
    )
}

export default Certificate
