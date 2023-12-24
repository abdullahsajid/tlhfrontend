import React, { useEffect, useState } from 'react'
import { Image } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { candidatePost } from '../../features/candidatePost/postService'
import toast from 'react-hot-toast'
import { getCandidateProfile } from '../../features/getProfile/getCpService'

const CreatePost = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.candidateProfile.candidateProfile)
  const {loading} = useSelector((state) => state.candidateProfile)
  const [fakeLoading,setFakeLoading] = useState(true)
  const[content,setContent] = useState('')
  const[url,setImgUrl] = useState(null)
  
  const handlePostImg = (e) => {
    const selectfile = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(selectfile)
    reader.onload = () => {
        if(reader.readyState === 2){
          setImgUrl(reader.result)
        }
    }
  }

  const handlerPost = async (e) => {
    e.preventDefault()
    if(content == ''){
      toast.error("please fill field!",{
        style:{
            backgroundColor:'#f6f6f7',
            border:'3px solid #fff',
            boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
      return
    }
    const data = await dispatch(candidatePost({content,url}))
    if(data){
      toast.success("post added!",{
        style:{
            backgroundColor:'#f6f6f7',
            border:'3px solid #fff',
            boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
      setContent('')
      setImgUrl(null)
      dispatch(getCandidateProfile())
    }else{
      toast.error("something went wrong try again!",{
        style:{
            backgroundColor:'#f6f6f7',
            border:'3px solid #fff',
            boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
    })
    }
  }

  useEffect(() => {
    setTimeout(()=> {
      setFakeLoading(false)
    },2000)
  },[])
  
  

  return (
    <div className='flex flex-col bg-[#f6f6f7] p-4 rounded-md gap-y-3 border border-solid border-[#f6f6f7]
    shadow w-full hover:custom-border transition-all'>
      <div className='flex justify-center items-center transition-all'>
        <div className='mr-4'>{(fakeLoading || loading) ? <Skeleton style={{width:'3rem',height:"3rem",borderRadius:'0.375rem',border:"3px solid #fff"}}/> :
          !(data?.avatar_url) ? <Skeleton style={{width:'3rem',height:"3rem",borderRadius:'0.375rem',border:"3px solid #fff"}}/> : 
          <img src={`${data?.avatar_url && data?.avatar_url }`} 
          className='w-12 h-12 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
          }
        </div>
        <div className='w-full flex grow'>
          <textarea  cols="30" rows="1" placeholder='whats in your mind?'
          className='flex justify-center items-center p-2 rounded-md border-none outline-none w-full'
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          >
          </textarea>
        </div>
      </div>
      {url &&
      <div className='w-full'>
        <img src={`${url}`} className='w-full object-cover p-5 rounded-[30px]' style={{height:'340px'}} />
      </div>}
      <div className='flex justify-between items-center transition-all'>
        <div className='text-slate-500 bg-white p-1 rounded-md cursor-pointer'>
          <label htmlFor="postImg">
              <input type="file"
                style={{display:"none"}} 
                accept='image/*'
                id='postImg'
                onChange={handlePostImg}    
              />
              <Image size={22} className='cursor-pointer'/>
          </label>
        </div>
        <div onClick={handlerPost}><button className='px-3 py-1 custom-bg-lg text-white rounded-md'>Post</button></div>
      </div>
    </div>
  )
}

export default CreatePost
