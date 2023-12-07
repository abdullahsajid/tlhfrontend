import React from 'react'
import { Image } from 'lucide-react'
const CreatePost = () => {
  return (
    <div className='flex flex-col bg-[#f6f6f7] p-4 rounded-md gap-y-3 border border-solid border-[#f6f6f7]
    shadow w-full hover:custom-border transition-all'>
      <div className='flex justify-center items-center transition-all'>
        <div><img src="https://avatars.githubusercontent.com/u/77003390?v=4" className='w-10 h-10 rounded-md mr-4' /></div>
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
