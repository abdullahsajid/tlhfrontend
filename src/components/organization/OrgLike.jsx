import React from 'react'
import { useSummonLikeByIdQuery ,usePostLikeByIdMutation} from 'src/features/organizationApis/orgApis'
import { useSelector } from 'react-redux'
const OrgLike = ({id}) => {
  const loginData = useSelector((state) => state.login.loginUser.data)
  const {data} = useSummonLikeByIdQuery({id})

  const [postLikeById] = usePostLikeByIdMutation()
  const handlerPostLike = async () => {
    const {data} = await postLikeById({id})
  }
  let liked = data?.data?.some((item) => item?.userPost_id === id && item?.userOrgId === loginData?.id)
    
  return (
    <div className={`text-sm font-bold border border-solid
     border-white bg-[#F2F2F2] px-2 rounded cursor-pointer text-slate-500 ${liked ? "bg-slate-900 !text-[#fff]" : ""}`} onClick={handlerPostLike}>
      {data?.data?.length && data?.data?.length} like
    </div>
  )
}

export default OrgLike
