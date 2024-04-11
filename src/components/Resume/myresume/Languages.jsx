import React from 'react'

const Languages = ({ data }) => {
    const res = data?.resLanguages?.[0]?.lang === null || data?.resLanguages?.[0]?.lang.length === 0
    return (
        res ? "" :
            <div className='flex flex-col mt-5 border-2 py-2 px-3 rounded-lg shadow'>
                <div className='text-xl font-bold'>Languages</div>
                <div className='flex flex-wrap gap-2 mt-3'>
                    {data?.resLanguages?.[0]?.lang.map((item, index) => (
                        <div className='font-mono bg-[#F3F4F6] px-2 py-1 text-xs rounded-md font-extrabold text-[#414652]' key={index}>
                            {item.language}
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Languages
