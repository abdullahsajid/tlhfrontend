import React from 'react'
import { useSummonCommentByIdQuery } from 'src/features/organizationApis/orgApis'
const OrgCommentCount = ({id}) => {
  const {data} = useSummonCommentByIdQuery({id})
  
  return (
    <div className='text-sm font-bold border border-solid border-white bg-[#F2F2F2] px-2 rounded-sm cursor-pointer text-slate-500'>
        {data?.data?.length && data?.data?.length} comments
    </div>
  )
}

export default OrgCommentCount
