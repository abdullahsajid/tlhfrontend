import React, { lazy } from 'react'
import { useSelector } from 'react-redux'
import { useSummonOrgPostQuery} from 'src/features/organizationApis/orgApis'
import Loader from 'src/components/Loader/Loader'
const Posts = lazy(() => import("./Posts"))

const OrgPosts = () => {
    const details = useSelector((state) => state.getOrgProfile.getOp.data)
    const {data,isLoading} = useSummonOrgPostQuery({id:details?.id})


  return (
    <div className='flex flex-col gap-2'>
        {isLoading ? <div className='w-full flex items-center justify-center'><Loader/></div> : 
          (data?.data?.length <= 0 || data?.data === null) ?  <div className='w-full flex items-center justify-center text-[18px] font-bold mt-5'>No Posts Yet</div> : data?.data?.map((item,index) => (
            <Posts
                key={index}
                details={details}
                time={item?.createdAt}
                content={item?.content}
                id={item?.post_id}
            />
        ))}
    </div>
  )
}

export default OrgPosts
