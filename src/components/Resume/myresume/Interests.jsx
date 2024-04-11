import React from 'react'

const Interests = ({ data }) => {
    const res = data?.resInterests?.[0]?.interest === null || data?.resInterests?.[0]?.interest.length === 0
    return (
        res ? "" :
            <div className='flex flex-col mt-5 border-2 py-2 px-3 rounded-lg shadow'>
                <div className='text-xl font-bold'>Interests</div>
                <div className='flex flex-wrap gap-2 mt-3'>
                    {data?.resInterests?.[0]?.interest.map((item, index) => (
                        <div className='font-mono bg-[#F3F4F6] px-2 py-1 text-xs rounded-md font-extrabold text-[#414652]' key={index}>
                            {item.interest}
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Interests
