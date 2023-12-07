import React from 'react'

const ReleventUser = () => {
  return (
    <div className='flex bg-[#f6f6f7] rounded-md p-3 shadow border border-solid border-[#f6f6f7]'>
        <div className='flex flex-col gap-y-4 w-full'>
            <div className='flex justify-between w-full'>
                <div className='flex gap-x-2 items-center'>
                    <div><img src="https://pbs.twimg.com/profile_images/1362579425804644353/8L3BctZn_200x200.jpg" className='w-10 h-10 rounded-md' /></div>
                    <div className='font-semibold text-sm'>Bilal Talib</div>
                </div>
                <div className='flex items-center'>
                    <button className='custom-bg-lg px-2 py-1 rounded-sm text-white'>Follow</button>
                </div>
            </div>

            <div className='flex justify-between w-full'>
                <div className='flex gap-x-2 items-center'>
                    <div><img src="https://pbs.twimg.com/profile_images/1728837013023895552/nCHrdjlh_200x200.jpg" className='w-10 h-10 rounded-md' /></div>
                    <div className='font-semibold text-sm'>Hamza sadiq</div>
                </div>
                <div className='flex items-center'>
                    <button className='custom-bg-lg px-2 py-1 rounded-sm text-white'>Follow</button>
                </div>
            </div>

            <div className='flex justify-between w-full'>
                <div className='flex gap-x-2 items-center'>
                    <div><img src="https://pbs.twimg.com/profile_images/1596084569341677572/5wtqshRu_200x200.jpg" className='w-10 h-10 rounded-md' /></div>
                    <div className='font-semibold text-sm'>Muhammad Umair</div>
                </div>
                <div className='flex items-center'>
                    <button className='custom-bg-lg px-2 py-1 rounded-sm text-white'>Follow</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReleventUser
