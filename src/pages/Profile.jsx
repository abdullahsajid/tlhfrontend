import React from 'react'

const Profile = () => {
  return (
    <div className='py-6 px-10 transition-all'>
      <div className='flex flex-col transition-all'>
        <div className='relative w-full z-[-1] transition-all'>
          <div className='w-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <img src="https://private-user-images.githubusercontent.com/77003390/250310935-518c1dd8-472f-47e7-9cf9-7244ab106f22.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE5NDQ2MTgsIm5iZiI6MTcwMTk0NDMxOCwicGF0aCI6Ii83NzAwMzM5MC8yNTAzMTA5MzUtNTE4YzFkZDgtNDcyZi00N2U3LTljZjktNzI0NGFiMTA2ZjIyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA3VDEwMTgzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1NThjNGQ2ODgxNmE0NWNlM2M5ZTZlM2EzYjEwZDYzNTUzOGRjOWZjNWEwZmIwMGE0NWY4MTQ0NWNkNDE5YjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xfrz5l3baQIKYAIvOC24mTLPL_ZCT6KTbLNtOiOhuTA"
            className='bg-center bg-no-repeat bg-cover rounded-md w-full' />
          </div>
          <div className='absolute left-24 custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <img src="https://avatars.githubusercontent.com/u/77003390?v=4" className='w-32 h-32 rounded-md' />
          </div>
          <div className='flex max-w-xs absolute -right-32 custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow-md'>
            <div className='flex flex-col px-3 py-2'>
              <div className='text-lg font-semibold'>Bio</div>
              <div className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi itaque, nisi ea nam nihil minima id quod iusto adipisci facere eaque esse vitae praesentium temporibus facilis. Sed, saepe? Veritatis, dolore.</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 mt-20 ml-7'>
          <div className='flex text-2xl font-semibold'>
            Abdullah Sajid
          </div>
          <div className='flex w-96 flex-wrap gap-3 '>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>Frontend</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>Backend</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>javascript</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>Nodejs</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>Jquery</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>Html</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>Css</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>C++</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm'>Java</div>
          </div>
        </div>

        <div className='flex gap-x-3'>
          <div className='flex w-3/5 mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <div className='flex flex-col gap-y-2 px-3 py-2'>
              <div className='text-2xl font-semibold'>About</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut esse architecto. Saepe modi nemo facilis id nostrum consectetur, excepturi omnis ab quasi voluptatem illo suscipit voluptate voluptatum laborum, earum vero assumenda ipsum quis qui eligendi! Corrupti voluptatem facilis aliquid libero at ad pariatur voluptatum. Quo atque quibusdam nesciunt ad?</div>
            </div>
          </div>

          {/* <div className='flex mt-5 h-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <div className='px-3 py-2 text-1xl font-semibold'>Social Links</div>
            <div></div>
          </div> */}
        </div>

        <div className='flex w-3/5 mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <div className='flex flex-col gap-y-2 px-3 py-2'>
              <div className='text-2xl font-semibold'>Education</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut esse architecto. Saepe modi nemo facilis id nostrum consectetur, excepturi omnis ab quasi voluptatem illo suscipit voluptate voluptatum laborum, earum vero assumenda ipsum quis qui eligendi! Corrupti voluptatem facilis aliquid libero at ad pariatur voluptatum. Quo atque quibusdam nesciunt ad?</div>
            </div>
        </div>

        <div className='flex w-3/5 mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <div className='flex flex-col gap-y-2 px-3 py-2'>
              <div className='text-2xl font-semibold'>Experience</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut esse architecto. Saepe modi nemo facilis id nostrum consectetur, excepturi omnis ab quasi voluptatem illo suscipit voluptate voluptatum laborum, earum vero assumenda ipsum quis qui eligendi! Corrupti voluptatem facilis aliquid libero at ad pariatur voluptatum. Quo atque quibusdam nesciunt ad?</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
