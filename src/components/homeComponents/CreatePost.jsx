import React, { useEffect, useState } from 'react'
import { Image } from 'lucide-react'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
const CreatePost = () => {
  const {data} = useSelector((state) => state.candidateProfile.candidateProfile)
  const {loading} = useSelector((state) => state.candidateProfile)
  const [fakeLoading,setFakeLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=> {
      setFakeLoading(false)
    },2000)
  },[])
  
  return (
    <div className='flex flex-col bg-[#f6f6f7] p-4 rounded-md gap-y-3 border border-solid border-[#f6f6f7]
    shadow w-full hover:custom-border transition-all'>
      <div className='flex justify-center items-center transition-all'>
        <div className='mr-4'>{(fakeLoading || loading) ? <Skeleton style={{width:'3rem',height:"3rem",borderRadius:'0.375rem'}}/> :
          data?.avatar_url ? <img src={`${data?.avatar_url && data?.avatar_url }`} 
          className='w-12 h-12 rounded-md bg-center bg-no-repeat bg-cover object-cover' /> :
          <Skeleton style={{width:'3rem',height:"3rem",borderRadius:'0.375rem'}}/>
          }
        </div>
        <div className='w-full flex grow'><textarea name="" id="" cols="30" rows="1" placeholder='whats in your mind?'
         className='flex justify-center items-center p-2 rounded-md border-none outline-none w-full'></textarea></div>
      </div>
      <div className='flex justify-between items-center transition-all'>
        <div className='text-slate-500 bg-white p-1 rounded-md cursor-pointer'>
            <Image size={22}/>
            <img src="" alt="" />
        </div>
        <div><button className='px-3 py-1 custom-bg-lg text-white rounded-md'>Post</button></div>
      </div>
    </div>
  )
}

export default CreatePost
