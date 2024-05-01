import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Like from '../../components/Posts/Like'
import { candidatePostLike } from '../../features/candidatePost/CPostLike/postLikeService'
import { getCandidatePostLike } from '../../features/candidatePost/CPostLike/getPostLikeService'
import * as moment from 'moment';

const SpecificPost = ({ name, avatar, postImg, content, time, like, postId }) => {
  const dispatch = useDispatch()
  const comment = useSelector((state) => state.getComments?.getComments?.data?.comments)
  const likes = useSelector((state) => state.getLike?.getPostLike?.data?.candLike)


  const handlerLike = async () => {
    const id = postId
    const data = await dispatch(candidatePostLike({ id }))
    if (data) {
      console.log("post Like!")
      dispatch(getCandidatePostLike({ id }))
    } else {
      console.log("something wrong!")
    }
  }
  

  return (
    <>
      <div className='flex flex-col bg-[#FFF] p-4 rounded-md gap-y-3 border-2 border-dashed border-[#f6f6f7] 
      shadow-md w-full hover:border-[#383838] transition-all'>
        <div className='flex items-center'>
          <div>
            <img src={avatar} className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
          </div>
          <div className='flex flex-col ml-2'>
            <div className='text-sm font-bold'>{name}</div>
            <div className='text-sm font-semibold'>{moment(time)?.format('MMM Do YYYY, LT')}</div>
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='flex mb-2'>
            {content}
          </div>
          <div className='flex w-full'>
            {postImg &&
              <img src={postImg}
                className='bg-center bg-no-repeat bg-cover rounded-md object-contain w-full h-[350px]' />
            }
          </div>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='text-sm font-bold border border-solid
          border-white bg-[#F2F2F2] px-2 rounded-sm cursor-pointer text-slate-500' onClick={() => handlerLike()}>
            {likes?.length > 0 ? likes?.length : 0} like
          </div>
          <div className='text-sm font-bold border border-solid border-white bg-[#F2F2F2] px-2 rounded-sm cursor-pointer text-slate-500'>{(comment?.length > 0) ? comment?.length : 0} comments</div>
        </div>
      </div>
    </>
  )
}

export default SpecificPost
