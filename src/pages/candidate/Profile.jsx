import React from 'react'
import { Link2 } from 'lucide-react'
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
          <div className='flex max-w-xs absolute -right-32 custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow-xl hover:custom-border transition-all'>
            <div className='flex flex-col px-3 py-2'>
              <div className='text-base font-semibold'>Bio</div>
              <div className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi itaque, nisi ea nam nihil minima id quod iusto adipisci facere eaque esse vitae praesentium temporibus facilis. Sed, saepe? Veritatis, dolore.</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 mt-20 ml-7'>
          <div className='flex text-2xl font-semibold'>
            Abdullah Sajid
          </div>
          <div className='flex w-96 flex-wrap gap-3 '>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>Frontend</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>Backend</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>javascript</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>Nodejs</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>Jquery</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>Html</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>Css</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>C++</div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>Java</div>
          </div>
        </div>

        <div className='flex gap-x-3 relative z-[100]'>
          <div className='flex w-3/5 mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow'>
            <div className='flex flex-col gap-y-2 px-3 py-2'>
              <div className='text-base font-semibold'>About</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut esse architecto. Saepe modi nemo facilis id nostrum consectetur, excepturi omnis ab quasi voluptatem illo suscipit voluptate voluptatum laborum, earum vero assumenda ipsum quis qui eligendi! Corrupti voluptatem facilis aliquid libero at ad pariatur voluptatum. Quo atque quibusdam nesciunt ad?</div>
            </div>
          </div>

          <div className='flex flex-col px-3 py-2 gap-y-2 mt-5 h-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow hover:custom-border'>
            <div className=' text-1xl font-semibold'>Social Links</div>
            <a href='https://www.linkedin.com/in/aabdullahsajid/' className='flex items-center gap-x-2'>
              <div>
                <Link2 size={20}/>
              </div>
              <div>
                https://www.linkedin.com/in/aabdullahsajid/ 
              </div>
            </a>
            <a href='https://twitter.com/aabdullahsajid' className='flex items-center gap-x-2'>
              <div>
                <Link2 size={20}/>
              </div>
              <div>
                https://twitter.com/aabdullahsajid 
              </div>
            </a>
            <a href='https://www.linkedin.com/in/aabdullahsajid/' className='flex items-center gap-x-2'>
              <div>
                <Link2 size={20}/>
              </div>
              <div>
                https://www.linkedin.com/in/aabdullahsajid/ 
              </div>
            </a>
          </div>
        </div>

        <div className='flex w-3/5 mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow relative z-[100]'>
            <div className='flex flex-col gap-y-2 px-3 py-2'>
              <div className='text-base font-semibold'>Education</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut esse architecto. Saepe modi nemo facilis id nostrum consectetur, excepturi omnis ab quasi voluptatem illo suscipit voluptate voluptatum laborum, earum vero assumenda ipsum quis qui eligendi! Corrupti voluptatem facilis aliquid libero at ad pariatur voluptatum. Quo atque quibusdam nesciunt ad?</div>
            </div>
        </div>

        <div className='flex w-3/5 mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow relative z-[100]'>
            <div className='flex flex-col gap-y-2 px-3 py-2'>
              <div className='text-base font-semibold'>Experience</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut esse architecto. Saepe modi nemo facilis id nostrum consectetur, excepturi omnis ab quasi voluptatem illo suscipit voluptate voluptatum laborum, earum vero assumenda ipsum quis qui eligendi! Corrupti voluptatem facilis aliquid libero at ad pariatur voluptatum. Quo atque quibusdam nesciunt ad?</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
