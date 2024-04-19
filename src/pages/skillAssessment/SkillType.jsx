import React from 'react'
import { Link } from 'react-router-dom'
import { useRetrieveSkillTypeQuery } from 'src/features/skillAssessment/AssessmentApis'
import Loader from 'src/components/Loader/Loader'
const SkillType = () => {
    const { data, isLoading } = useRetrieveSkillTypeQuery()
   
    return (
        <div className='py-6 px-10 transition-all w-full'>
            <div className='flex flex-col mt-5'>
                <div className='font-extrabold text-lg'>Skill Assessment</div>
                <div className='flex flex-wrap mt-5 gap-3 bg-[#fff] p-3 rounded-lg'>
                    {isLoading ? <div className='flex items-center justify-center w-full'><Loader /></div> : data?.data?.map((item,index) => (
                        <Link to={`/mcqs/${item.st_id}`} key={index} className='border border-[#333] p-1 px-5 rounded-md hover:bg-slate-900/20'>
                            {item.st_type}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillType
