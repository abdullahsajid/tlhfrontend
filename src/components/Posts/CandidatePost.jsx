import React from 'react'

const CandidatePost = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col'>

        <div className='flex flex-row items-center'>
          <div className='flex'>
            <img src="https://res.cloudinary.com/dbxgzr6p5/image/upload/v1702847380/tlkavatar/vwv5sdbmx07rqpopjefi.jpg" 
            className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
          </div>
          <div className='flex flex-col ml-2'>
            <div className='text-sm font-bold'>Abdullah Sajid</div>
            <div className='text-sm font-semibold'>Dec 20</div>
          </div>
        </div>

        <div className='mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quae incidunt aspernatur nam nihil dignissimos dolorum odit quibusdam blanditiis, qui nisi commodi magnam illum hic dolor repellendus cupiditate enim dolore?
        </div>

        <div className='mt-2 w-full'>
          <img src="https://www.veeforu.com/wp-content/uploads/2023/07/youtube-banner-background-futuristic-2048x1152-1-1024x576.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default CandidatePost
