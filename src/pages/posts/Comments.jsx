import React from 'react'

const Comments = ({content,date}) => {
  return (
    <div className='flex flex-col bg-[#f6f6f7] p-2 rounded-md gap-y-3 border border-solid border-[#f6f6f7] 
    shadow-md w-full hover:custom-border transition-all'>
      <div className='px-4 pt-4 pb-4'>
        <div class="flex flex-row gap-1">
            <div className='me-3 flex min-w-[40px]'>
                <img src="https://res.cloudinary.com/dbxgzr6p5/image/upload/v1696671330/Avatar/ivvfajnjfgcpvnyuc54r.jpg" alt=""
                className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center'>
                    <div className='text-sm font-bold mr-2'>Abdullah sajid</div>
                    <div className='text-xs font-semibold flex items-center'>{date}</div>
                </div>
                <div className='flex'>
                  {content}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
