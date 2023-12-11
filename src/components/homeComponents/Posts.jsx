import React, { useState } from 'react'

const Posts = () => {
  const[like,setLike] = useState(1)
  const handlerLike = () => {
    setLike(like+1)
  }
  return (
    <div className='flex flex-col bg-[#f6f6f7] p-4 rounded-md gap-y-3 border border-solid border-[#f6f6f7] 
    shadow w-full hover:custom-border transition-all'>
      <div className='flex items-center'>
        <div>
            <img src="https://avatars.githubusercontent.com/u/77003390?v=4" className='w-10 h-10 rounded-md mr-4' />
        </div>
        <div className='font-semibold'>Abdullah Sajid</div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <div className='flex mb-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam officia quasi earum eum, nobis perferendis quidem ipsa recusandae. Aperiam reprehenderit dolores ut consequatur vitae sequi veniam harum libero quasi. Placeat.
        </div>
        <div className='flex w-full'>
            <img src="https://www.veeforu.com/wp-content/uploads/2023/07/youtube-banner-background-futuristic-2048x1152-1-1024x576.jpg"
            className='bg-center bg-no-repeat bg-cover rounded-md w-full' />
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
