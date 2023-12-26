import React, { useState } from 'react'
import { candidatePostLike } from '../../features/candidatePost/CPostLike/postLikeService'
import { getCandidateProfile } from '../../features/getProfile/getCpService'
import { useDispatch } from 'react-redux'
const Like = ({postId,like}) => {
    const dispatch = useDispatch()

    const handlerLike = async () => {
        const id = postId
        const data = await dispatch(candidatePostLike({id}))
        if(data){
          console.log("post Like!")
          dispatch(getCandidateProfile());
        }else{
          console.log("something wrong!")
        }
    } 

  return (
    <div className='text-sm font-bold border border-solid
     border-white bg-white px-2 rounded-sm cursor-pointer text-slate-500' onClick={()=>handlerLike()}>
        {like?.length > 0 ? like?.length : 0} like
    </div>
  )
}

export default Like
