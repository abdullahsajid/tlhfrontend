import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
const ProfileDetail = () => {
  const {data} = useSelector((state) => state.candidateProfile.candidateProfile)
  const[fakeLoading,setFakeLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(()=> {
      setFakeLoading(false)
    },2000)
  },[])

  return (
    <div className='flex flex-col p-3 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow hover:custom-border w-full transition-all'>
      <div className='flex flex-col '>
        <div className='w-full relative'>
          {fakeLoading ? <Skeleton style={{width:'100%',height:"120px",borderRadius:'0.375rem'}}/> : data?.banner_url ?  
            <img src={`${data?.banner_url && data?.banner_url }`} alt="" 
            className='bg-center bg-no-repeat bg-cover rounded-md w-full max-h-[120px] object-cover'/> : <Skeleton style={{width:'100%',height:"120px",borderRadius:'0.375rem'}}/>}
            <div className='absolute left-2/4 custom-position-center z-[100] border border-solid border-[#f6f6f7] rounded-md shadow-lg'>
              {fakeLoading ? <Skeleton style={{width:'3.5rem',height:"3.5rem",borderRadius:'0.375rem'}}/> : data?.avatar_url ? 
                <img src={`${data?.avatar_url }`} 
                className='w-14 h-14 rounded-md object-cover' /> :  <Skeleton style={{width:'3.5rem',height:"3.5rem",borderRadius:'0.375rem'}}/> }
            </div>
        </div>
        <div className='flex flex-col mt-10'>
            <div className='font-semibold uppercase text-center'>{fakeLoading ? <Skeleton width={100}/>  : data?.name ? data?.name : <Skeleton width={100}/>}</div>
            <div className='text-center'>{fakeLoading ? <Skeleton width={100}/> : data?.bio ? data?.bio: <Skeleton width={100}/>}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetail

