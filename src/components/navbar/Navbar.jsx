import React from 'react'

const Navbar = () => {
  return (
    <div className='p-3 border-solid border-b-2 border-slate-300 bg-white'>
        <div className='max-w-[90rem] mx-auto flex justify-between items-center'>
            <div className='flex gap-1 justify-center items-center'>
                <span className='flex justify-center items-center custom-bg-lg to-blue-500 text-white p-[3px] rounded-md font-bold shadow-md'>Tech</span>
                <span className='font-semibold'>LinkHub</span>
            </div>
            <div className='w-[35rem]'>
                <input type="text" className='w-full rounded-md p-1 border-2 border-slate-300 shadow' />
            </div>
            <div>
                <div className='flex gap-2'>
                    <button className='border-2 border-slate-300 p-1 rounded-md font-semibold shadow text-sm'>Join Now</button>
                    <button className='flex justify-center items-center custom-bg-lg to-blue-500 shadow-md p-1 rounded-md text-white font-bold text-sm'>SignIn</button>
                </div>
            </div>
        </div>
    </div>
  )
}   

export default Navbar
