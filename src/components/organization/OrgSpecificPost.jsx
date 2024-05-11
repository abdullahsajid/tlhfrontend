import React from 'react'
import { useRetrievePostByidQuery } from 'src/features/organizationApis/orgApis'
import { useSelector } from 'react-redux'
import * as moment from 'moment';
import OrgLike from './OrgLike';
import OrgCommentCount from './OrgCommentCount';

const OrgSpecificPost = ({postId}) => {
  const details = useSelector((state) => state.getOrgProfile.getOp.data)
  const {data} = useRetrievePostByidQuery({id:postId})
  
  return (
    <div className='flex flex-col bg-[#FFF] p-4 rounded-md gap-y-3 border-2 border-dashed border-[#f6f6f7] 
      shadow-md w-full hover:border-[#383838] transition-all'>
        <div className='flex items-center'>
          <div>
            <img src={details?.avatar_url} className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
          </div>
          <div className='flex flex-col ml-2'>
            <div className='text-sm font-bold'>{details?.org_name}</div>
            <div className='text-sm font-semibold'>{moment(data?.data[0]?.createdAt)?.format('MMM Do YYYY, LT')}</div>
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='flex mb-2'>
            {data?.data[0]?.content}
          </div>
          {/* <div className='flex w-full'>
            {postImg &&
              <img src={postImg}
                className='bg-center bg-no-repeat bg-cover rounded-md object-contain w-full h-[350px]' />
            }
          </div> */}
        </div>

        <div className='flex items-center gap-x-2'>
          <OrgLike id={postId}/>
          <OrgCommentCount id={postId}/>
        </div>
      </div>
  )
}

export default OrgSpecificPost
