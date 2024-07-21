import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { candidatePostLike } from '../../features/candidatePost/CPostLike/postLikeService'
import Like from '../Posts/Like'
import * as moment from 'moment';

const Posts = ({ postId, name, link, postImg, content, time, data, comment, like }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [fakeLoading, setFakeLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
  }, [])

  const handleSpecificPost = () => {
    navigate('/post', { state: { postId, name, link, postImg, content, time, data, like } })
  }


  return (
    <div className='flex flex-col bg-[#FFF] p-4 rounded-md gap-y-3 border-2 border-dashed border-[#f6f6f7] 
    shadow-md w-full transition-all hover:border-[#383838] max-sm:w-[350px]'>
      <div className='flex items-center'>
        <div>{fakeLoading ? <Skeleton style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.375rem', border: "3px solid #fff" }} /> :
          <img src={`${!(link) ? './avatar.jpg' : link}`} className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />}
        </div>
        <div className='flex flex-col ml-2'>
          <div className='text-sm font-bold'>{fakeLoading ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : (name != null && name !== '') ? name : "Unknown"}</div>
          <div className='text-sm font-semibold'>{fakeLoading ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : (time != null && time !== '') ? moment(time)?.fromNow() : <Skeleton width={200} style={{ border: "3px solid #fff" }} />}</div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 cursor-pointer' onClick={handleSpecificPost}>
        <div className='flex mb-2'>
          {fakeLoading ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : (content != null && content !== '') ? content : <Skeleton width={200} style={{ border: "3px solid #fff" }} />}
        </div>
        <div className='flex w-full'>
          {postImg &&
            <img src={`${postImg}`}
              className='bg-center bg-no-repeat bg-cover rounded-md object-contain w-full h-[350px] max-sm:h-full' />
          }
        </div>
      </div>

      <div className='flex items-center gap-x-2'>
        <Like postId={postId} like={like} />
        <div className='text-sm font-bold border border-solid border-white bg-[#F2F2F2] px-2 rounded-sm cursor-pointer text-slate-500'>
          {(comment?.length > 0) ? comment?.length : 0} comments</div>
      </div>
    </div>
  )
}

export default Posts
