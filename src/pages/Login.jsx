import React from 'react'
import {XSquare } from 'lucide-react' 
const Login = ({handler}) => {
  return (
    <div className={`fixed top-5 flex justify-center items-center w-screen h-full transition-all`}>
    <div className='min-w-[650px] max-w-[80vw] h-[650px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
        <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
            <div className='flex w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                <div className='flex basis-1/2'>
                    <div onClick={()=>handler()} className='cursor-pointer'><XSquare/></div>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                    <span className='flex justify-center items-center custom-bg-lg to-blue-500 text-white p-[3px] rounded-md font-bold shadow-md'>Tech</span>
                    <span className='font-semibold'>LinkHub</span>
                </div>
                <div class="flex basis-1/2 self-stretch items-end shrink"></div>
            </div>
            <div className='flex flex-col relative z-0 px-20'>
                <div className='my-5 flex justify-center items-center'>
                    <h1 class="text-3xl font-bold">Sign in</h1>
                </div>
                <div className='px-3 py-3 flex flex-col gap-y-2'>
                    <label htmlFor="email" className='font-semibold'>Email:</label>
                    <input type="email" id='email' className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' />
                </div>
                <div className='px-3 py-3 flex flex-col gap-y-2'>
                    <label htmlFor="Password" className='font-semibold'>Password</label>
                    <input id="Password" className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'/>
                </div>   
                <div className='mt-5 px-3 py-2 flex justify-center w-full'>
                    <button className='w-full custom-bg-lg px-2 rounded-sm text-white cursor-pointer py-2'>log in</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login
