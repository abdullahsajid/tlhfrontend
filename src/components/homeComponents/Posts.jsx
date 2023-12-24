import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast'
import Skeleton from 'react-loading-skeleton'

const Posts = ({name,link,postImg,content,time}) => {
  const[like,setLike] = useState(1)
  const [fakeLoading,setFakeLoading] = useState(true)
  const handlerLike = () => {
    setLike(like+1)
  }

  useEffect(() => {
    setTimeout(()=> {
      setFakeLoading(false)
    },2000)
  },[])

  return (
    <div className='flex flex-col bg-[#f6f6f7] p-4 rounded-md gap-y-3 border border-solid border-[#f6f6f7] 
    shadow-md w-full hover:custom-border transition-all'>
      <div className='flex items-center'>
        <div>{fakeLoading ? <Skeleton style={{width:'2.5rem',height:'2.5rem',borderRadius:'0.375rem',border:"3px solid #fff"}}/> : (link != null && link !== '') ? <img src={`${link}`} className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
         : <Skeleton style={{width:'2.5rem',height:'2.5rem',borderRadius:'0.375rem',border:"3px solid #fff"}}/>}
        </div>
        <div className='flex flex-col ml-2'>
            <div className='text-sm font-bold'>{fakeLoading ? <Skeleton width={200} style={{border:"3px solid #fff"}}/> : (name != null && name !== '') ? name : <Skeleton width={200} style={{border:"3px solid #fff"}}/>}</div>
            <div className='text-sm font-semibold'>{fakeLoading ? <Skeleton width={200} style={{border:"3px solid #fff"}}/> : (time != null && time !== '') ? time : <Skeleton width={200} style={{border:"3px solid #fff"}}/>}</div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <div className='flex mb-2'>
            {fakeLoading ? <Skeleton width={200} style={{border:"3px solid #fff"}}/> : (content != null && content !== '') ? content : <Skeleton width={200} style={{border:"3px solid #fff"}}/>}
        </div>
        <div className='flex w-full'>
            <img src={`${postImg}`}
            className='bg-center bg-no-repeat bg-cover rounded-md object-cover w-full h-[350px]' />
        </div>
      </div>

      <div className='flex items-center gap-x-2'>
        <div className='text-sm font-bold border border-solid border-white bg-white px-2 rounded-sm cursor-pointer text-slate-500' onClick={()=>handlerLike()}>{like} like</div>
        <div className='text-sm font-bold border border-solid border-white bg-white px-2 rounded-sm cursor-pointer text-slate-500'>10 comments</div>
      </div>

    </div>
  )
}

export default Posts
