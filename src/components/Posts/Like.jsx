import React, { useEffect, useState } from 'react'
import { candidatePostLike } from '../../features/candidatePost/CPostLike/postLikeService'
import { loginUserPost } from '../../features/candidatePost/getAuthPost/loginUserPostService'
import { useDispatch } from 'react-redux'
import { useGetUserLikeQuery,usePostUserLikeMutation} from 'src/features/candidatePost/CPostLike/getPostLikeService'
const Like = ({ postId, like }) => {
  const dispatch = useDispatch()
  const {data} = useGetUserLikeQuery({id:postId})
  const [postUserLike] = usePostUserLikeMutation()
  // console.log(data);
  // const 
  const handlerLike = async () => {
    const id = postId
    const {data} = await postUserLike({ id })
    console.log(data);
  }

  return (
    <div className='text-sm font-bold border border-solid
     border-white bg-[#F2F2F2] px-2 rounded-sm cursor-pointer text-slate-500' onClick={() => handlerLike()}>
      {data?.data?.candLike?.length > 0 ? data?.data?.candLike?.length : 0} like
    </div>
  )
}

export default Like
