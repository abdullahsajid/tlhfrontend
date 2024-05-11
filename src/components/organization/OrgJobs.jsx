import React from 'react'
import { useGetJobsQuery } from 'src/features/organizationApis/orgApis'
import { useSelector } from 'react-redux'
import Loader from 'src/components/Loader/Loader'
const OrgJobs = () => {
    const details = useSelector((state) => state.getOrgProfile.getOp.data)
    const {data,isLoading} = useGetJobsQuery({id:details?.id})

  return (
    <>
    <div className='flex flex-col gap-y-2'>
    {isLoading ? <div className='w-full flex items-center justify-center'><Loader/></div> : 
        (data?.data?.length <= 0 || data?.data === null) ?  <div className='w-full flex items-center justify-center text-[18px] font-bold mt-5'>No Posts Yet</div> :data?.data?.map((item,index) => (
            <div className='flex border-2 border-[#D0D0D0] p-2 px-3 rounded-md'key={index}>
                <div className='flex flex-col gap-y-1'>
                    {item?.cj_category && <div className='p-2 py-1 rounded-lg font-bold border-2 border-[#D0D0D0] text-[13px] w-max'>{item?.cj_category}</div>}
                    {item?.cj_title && <div className='text-[22px] hover:underline font-bold'>{item?.cj_title}</div>}
                    <div className='flex gap-2'>
                        {item?.cj_type && <div className='border-[#333] border flex items-center justify-center px-3 py-1 rounded-lg text-xs font-bold'>
                            {item?.cj_type}
                        </div>}
                        {item?.cj_location && <div className='border-[#333] border flex items-center justify-center px-3 py-1 rounded-lg text-xs font-bold'>
                            {item?.cj_location}
                        </div>}
                    </div>
                    {item?.cj_requirement && <div className='flex flex-col gap-y-1'>
                        <div className='text-sm font-bold'>Requirement:</div>
                        <div className='text-xs'>{item?.cj_requirement}</div>
                    </div>}
                    {item?.cj_responsibility && <div className='flex flex-col gap-y-1'>
                        <div className='text-sm font-bold'>Responsibility:</div>
                        <div className='text-xs'>{item?.cj_responsibility}</div>
                    </div>}
                    {item?.cj_qualification && <div className='flex flex-col gap-y-1'>
                        <div className='text-sm font-bold'>Qualification:</div>
                        <div className='text-xs'>{item?.cj_qualification}</div>
                    </div>}
                    {item?.cj_skills?.length > 0 && 
                        <div className='flex flex-col'>
                            <div className='text-sm font-bold'>Skills:</div>
                            <div className='flex flex-wrap gap-2'>
                                {item?.cj_skills?.map((val) => (
                                    <div className='border-[#333] border flex items-center justify-center px-3 py-1 rounded-lg text-xs font-bold'>
                                        {val?.item}
                                    </div>
                                ))}
                            </div>
                        </div>}
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default OrgJobs
