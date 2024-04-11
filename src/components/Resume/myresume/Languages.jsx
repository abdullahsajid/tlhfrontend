import React from 'react'
import { Languages } from 'lucide-react';

const Language = ({ data, templateSty }) => {
    const res = data?.resLanguages?.[0]?.lang === null || data?.resLanguages?.[0]?.lang.length === 0
    if (templateSty == 'minimal') {
        return (
            res ? "" :
                <div className='flex flex-col mt-5 border-2 py-2 px-3 rounded-lg shadow'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#414652] p-1 rounded-md'>
                            <Languages size={'20px'} />
                        </span>
                        <span>
                            Languages
                        </span>
                    </div>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        {data?.resLanguages?.[0]?.lang.map((item, index) => (
                            <div className='font-mono bg-[#F3F4F6] px-2 py-1 text-xs rounded-md font-extrabold text-[#414652]' key={index}>
                                {item.language}
                            </div>
                        ))}
                    </div>
                </div>
        )
    } else if (templateSty == 'IT') {
        return (
            res ? "" :
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#fff] bg-[#fff] p-1 rounded-md'>
                            <Languages size={'20px'} className='text-[#2D343C]' />
                        </span>
                        <span className='font-extrabold text-[#fff] uppercase'>
                            Languages
                        </span>
                    </div>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        {data?.resLanguages?.[0]?.lang.map((item, index) => (
                            <div className='font-serif bg-[#ABAEB1] px-2 py-1 text-xs rounded-md font-extrabold text-[#000]' key={index}>
                                {item.language}
                            </div>
                        ))}
                    </div>
                </div>
        )
    }
}

export default Language
