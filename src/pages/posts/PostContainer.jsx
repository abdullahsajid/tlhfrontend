import React, { useEffect } from 'react'
import SpecificPost from './SpecificPost'
import { useLocation } from 'react-router-dom'
import UserProfile from './UserProfile'
import CommentContainer from './CommentContainer'
import { useDispatch } from 'react-redux'
import { getCommentCandidate } from '../../features/Comments/candidateComment/getComments/getCommentService'
const PostContainer = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
      const id = location.state.postId
      dispatch(getCommentCandidate({id}))
    },[])
    
  return (
    <div className='flex gap-x-7'>
      <div className='py-6 pl-16 max-sm:pl-8 w-[50rem] flex flex-col gap-y-2 relative z-[100]'>
            <SpecificPost name={location.state.name}
                avatar={location.state.link}
                postImg={location.state.postImg}
                content={location.state.content}
                time={location.state.time}
            />
            <CommentContainer id={location.state.postId} avatar={location.state.link}/>
      </div>
      <div className='relative'>
          <div className='w-80 pt-6 flex flex-col gap-y-4 sticky top-14 z-10'>
            <UserProfile data={location.state.data}/>
          </div>
        </div>
    </div>
  )
}

export default PostContainer




