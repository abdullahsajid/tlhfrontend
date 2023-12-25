import React from 'react'
import { useSelector } from 'react-redux'

const SpecificPost = ({name,avatar,postImg,content,time}) => {
  const comment = useSelector((state) => state.getComments?.getComments?.data?.comments || {})
  return (
    <>
      <div className='flex flex-col bg-[#f6f6f7] p-4 rounded-md gap-y-3 border border-solid border-[#f6f6f7] 
      shadow-md w-full hover:custom-border transition-all'>
        <div className='flex items-center'>
          <div>
              <img src={avatar} className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
          </div>
          <div className='flex flex-col ml-2'>
              <div className='text-sm font-bold'>{name}</div>
              <div className='text-sm font-semibold'>{time}</div>
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='flex mb-2'>
            {content}
          </div>
          <div className='flex w-full'>
              <img src={postImg}
              className='bg-center bg-no-repeat bg-cover rounded-md object-cover w-full h-[350px]' />
          </div>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='text-sm font-bold border border-solid border-white bg-white px-2 rounded-sm cursor-pointer text-slate-500'>10 like</div>
          <div className='text-sm font-bold border border-solid border-white bg-white px-2 rounded-sm cursor-pointer text-slate-500'>{(comment?.length > 0) ? comment?.length : 0} comments</div>
        </div>
      </div>
    </>
  )
}

export default SpecificPost
