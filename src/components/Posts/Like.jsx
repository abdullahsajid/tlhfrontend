import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserLikeQuery,usePostUserLikeMutation} from 'src/features/candidatePost/CPostLike/getPostLikeService'
const Like = ({ postId, like }) => {
  const loginData = useSelector((state) => state.login.loginUser.data)
  const dispatch = useDispatch()
  const {data} = useGetUserLikeQuery({id:postId})
  const [postUserLike] = usePostUserLikeMutation()
  // console.log(data);
  const handlerLike = async () => {
    const id = postId
    const {data} = await postUserLike({ id })
    // console.log(data);
  }
  let liked = data?.data?.candLike?.some((item) => item?.postId === postId && item?.userId === loginData?.id)
  return (
    <div className={`text-sm font-bold border border-solid
     border-white bg-[#F2F2F2] px-2 rounded-sm cursor-pointer text-slate-500 ${liked ? "bg-slate-900 !text-[#fff]" : ""}`} onClick={() => handlerLike()}>
      {data?.data?.candLike?.length > 0 ? data?.data?.candLike?.length : 0} like
    </div>
  )
}

export default Like
