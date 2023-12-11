import React from 'react'

const ProfileDetail = () => {
  return (
    <div className='flex flex-col p-3 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow hover:custom-border w-full transition-all'>
      <div className='flex flex-col '>
        <div className='w-full relative'>
            <img src="https://private-user-images.githubusercontent.com/77003390/250310935-518c1dd8-472f-47e7-9cf9-7244ab106f22.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE5NDQ2MTgsIm5iZiI6MTcwMTk0NDMxOCwicGF0aCI6Ii83NzAwMzM5MC8yNTAzMTA5MzUtNTE4YzFkZDgtNDcyZi00N2U3LTljZjktNzI0NGFiMTA2ZjIyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA3VDEwMTgzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1NThjNGQ2ODgxNmE0NWNlM2M5ZTZlM2EzYjEwZDYzNTUzOGRjOWZjNWEwZmIwMGE0NWY4MTQ0NWNkNDE5YjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xfrz5l3baQIKYAIvOC24mTLPL_ZCT6KTbLNtOiOhuTA" alt="" 
            className='bg-center bg-no-repeat bg-cover rounded-md w-full'/>
            <div className='absolute left-2/4 custom-position-center'>
                <img src="https://avatars.githubusercontent.com/u/77003390?v=4" className='w-12 h-12 rounded-md' />
            </div>
        </div>
        <div className='flex flex-col mt-6'>
            <div className='font-semibold'>Abdullah Sajid</div>
            <div>Frontend Developer | MERN Stack dev</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetail
