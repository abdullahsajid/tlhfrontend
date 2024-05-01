import React from 'react'
import toast from 'react-hot-toast'
import { Button } from 'src/components/ui/button'
const ReleventUser = () => {
    const Test = () => {
        toast.success("Test to see!", {
            style: {
                backgroundColor: '#f6f6f7',
                border: '3px solid #fff',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }
        })
    }
    return (
        <div className='flex bg-[#FFF] rounded-md p-3 shadow border border-solid border-[#f6f6f7]'>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='flex justify-between w-full border-2 border-dashed border-[#f6f6f7] rounded-md p-2 hover:border-[#383838]'>
                    <div className='flex gap-x-2 items-center'>
                        <div><img src="https://pbs.twimg.com/profile_images/1362579425804644353/8L3BctZn_200x200.jpg" className='w-10 h-10 rounded-md' /></div>
                        <div className='font-semibold text-sm'>Bilal Talib</div>
                    </div>
                    <div className='flex items-center' onClick={Test}>
                        <Button className='h-9 px-2 py-0 rounded-md text-white'>Follow</Button>
                    </div>
                </div>

                <div className='flex justify-between w-full border-2 border-dashed border-[#f6f6f7] rounded-md p-2 hover:border-[#383838]'>
                    <div className='flex gap-x-2 items-center'>
                        <div><img src="https://pbs.twimg.com/profile_images/1728837013023895552/nCHrdjlh_200x200.jpg" className='w-10 h-10 rounded-md' /></div>
                        <div className='font-semibold text-sm'>Hamza sadiq</div>
                    </div>
                    <div className='flex items-center'>
                        <Button className='h-9 px-2 py-0 rounded-md text-white'>Follow</Button>
                    </div>
                </div>

                <div className='flex justify-between w-full border-2 border-dashed border-[#f6f6f7] rounded-md p-2 hover:border-[#383838]'>
                    <div className='flex gap-x-2 items-center'>
                        <div><img src="https://pbs.twimg.com/profile_images/1596084569341677572/5wtqshRu_200x200.jpg" className='w-10 h-10 rounded-md' /></div>
                        <div className='font-semibold text-sm'>Muhammad Umair</div>
                    </div>
                    <div className='flex items-center'>
                        <Button className='h-9 px-2 py-0 rounded-md text-white'>Follow</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReleventUser
