import React, { useEffect, useState } from 'react'
import { candidatePostLike } from '../../features/candidatePost/CPostLike/postLikeService'
import { loginUserPost } from '../../features/candidatePost/getAuthPost/loginUserPostService'
import { useDispatch } from 'react-redux'

const Like = ({ postId, like }) => {
  const dispatch = useDispatch()
  // const 
  const handlerLike = async () => {
    const id = postId
    const data = await dispatch(candidatePostLike({ id }))

    if (data) {
      console.log("post Like!")
      dispatch(loginUserPost())
    } else {
      console.log("something wrong!")
    }
  }

  return (
    <div className='text-sm font-bold border border-solid
     border-white bg-[#F2F2F2] px-2 rounded-sm cursor-pointer text-slate-500' onClick={() => handlerLike()}>
      {like?.length > 0 ? like?.length : 0} like
    </div>
  )
}

export default Like
