import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const ResumeHeader = () => {
  // const dispatch = useDispatch()
  const { data } = useSelector((state) => state.getResHeader.getResHeader)
  // useEffect(() => {
  //   dispatch(getResumeHeader())
  // }, [])

  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-col'>
        <div className='text-2xl font-bold mb-2 cursor-pointer'>{data?.[0]?.name ? data?.[0]?.name : "Your name"}</div>
        <div className='text mb-1 resumeColor font-semibold cursor-pointer'>{data?.[0]?.title ? data?.[0]?.title : "your title"}</div>
        <div className='text-sm cursor-pointer'>{data?.[0]?.description ? data?.[0]?.description : "short desacription about yourself"}</div>
      </div>
      <div className='w-[250px] h-[150px]'>
        <img src={`${data?.[0]?.img ? data?.[0]?.img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}`} className='w-full h-full object-contain aspect-square rounded-md cursor-pointer' />
      </div>
    </div >
  )
}

export default ResumeHeader
