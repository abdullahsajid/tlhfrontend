import React from 'react'

const Skills = ({ data }) => {
    const res = data?.resSkill?.[0]?.skills === null || data?.resSkill?.[0]?.skills.length === 0
    return (
        res ? "" :
        <div className='flex flex-col mt-5'>
            <div className='text-xl font-bold'>Skills</div>
            <div className='flex flex-wrap gap-1 mt-3'>
                {data?.resSkill?.[0]?.skills.map((item, index) => (
                    <div className='bg-[#414652] text-[#fff] p-1 rounded-md text-xs font-mono' key={index}>
                        {item.skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
