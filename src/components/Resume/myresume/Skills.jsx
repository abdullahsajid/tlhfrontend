import React from 'react'
import { Library } from 'lucide-react';
const Skills = ({ data, templateSty }) => {
    const res = data?.resSkill?.[0]?.skills === null || data?.resSkill?.[0]?.skills.length === 0
    if (templateSty === 'minimal') {
        return (
            res ? "" :
                <div className='flex flex-col mt-5'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border-2 border-[#414652] p-1 rounded-md'>
                            <Library size={'20px'} />
                        </span>
                        <span>
                            Skills
                        </span>
                    </div>
                    <div className='flex flex-wrap gap-1 mt-3'>
                        {data?.resSkill?.[0]?.skills.map((item, index) => (
                            <div className='bg-[#414652] text-[#fff] p-1 rounded-md text-xs font-mono' key={index}>
                                {item.skill}
                            </div>
                        ))}
                    </div>
                </div>
        )
    } else if (templateSty === 'IT') {
        return (
            res ? "" :
                <div className='flex flex-col gap-2'>
                    <div className='text-xl font-bold flex items-center gap-2'>
                        <span className='border bg-[#fff] p-1 rounded-md'>
                            <Library size={'20px'} className='text-[#2D343C]' />
                        </span>
                        <span className='font-extrabold text-[#fff] uppercase'>
                            Skills
                        </span>
                    </div>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        {data?.resSkill?.[0]?.skills.map((item, index) => (
                            <div className='bg-[#ABAEB1] text-[#000] p-1 rounded-md text-sm font-serif font-extrabold' key={index}>
                                {item.skill}
                            </div>
                        ))}
                    </div>
                </div>
        )
    }
}

export default Skills
