import React from 'react'
import {XSquare } from 'lucide-react' 
const OrgForm = ({handler}) => {
  return (
    <div className={`fixed top-5 flex justify-center items-center w-screen h-full transition-all`}>
        <div className='min-w-[700px] max-w-[80vw] h-[650px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
    shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
            <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
                <div className='flex justify-between w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                    <div className='flex gap-x-2'>
                        <div onClick={()=>handler()} className='cursor-pointer'><XSquare/></div>
                        <div className='flex font-semibold'>Edit Organization</div>
                    </div>
                    <div className='flex justify-center items-center custom-bg-lg px-2 rounded-sm text-white pb-[2px] cursor-pointer'>Save</div>
                </div>
                <div className='flex flex-col relative z-0'>
                    <div className='flex flex-col justify-center overflow-hidden max-h-[200px] h-full'>
                        <div className='w-full bg-center bg-cover bg-no-repeat overflow-hidden'>
                            <img src="https://media.licdn.com/dms/image/C561BAQEUvTgqGNQ1Bw/company-background_10000/0/1584058343018/teamdevsquad_cover?e=1702810800&v=beta&t=lhwn1iywLfbR-kTJ71MILYBUT_DAAHQEqYJLdP_ea4Y" alt=""
                            className='w-full h-full bg-no-repeat overflow-hidden max-w-[700px]' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center relative h-[100px] max-w-[100px] mt-[-3rem] ml-[1rem] rounded-md mb-3'>
                        <div className='rounded-md '>
                            <img src="https://media.licdn.com/dms/image/C4E0BAQE7qVTIeVgtvw/company-logo_200_200/0/1631301745245?e=1710374400&v=beta&t=KVak-Ed0TIlUtXro8XaHraA71DkBHJ1ta8nojel5AEk" className='rounded-md' />
                        </div>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="name" className='font-semibold'>Name:</label>
                        <input type="text" id='name' className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="industry" className='font-semibold'>Industry:</label>
                        <input type="text" id='industry' className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="email" className='font-semibold'>Email:</label>
                        <input type="email" id='email' className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="link" className='font-semibold'>Website link:</label>
                        <input type="text" id='link' className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="location" className='font-semibold'>Location:</label>
                        <input type="text" id='location' className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="bio" className='font-semibold'>Bio:</label>
                        <textarea id="bio" rows="2" className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'></textarea>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="about" className='font-semibold'>About:</label>
                        <textarea id="about" rows="2" className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'></textarea>
                    </div>
                    <div className='px-3 py-1'>
                        <hr className='border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="skills" className='font-semibold'>Add Socials:</label>
                        <input type="text" id='skills' className='px-2 py-2 rounded-md shadow-md outline-none border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 pb-2 flex justify-end'>
                        <button className='custom-bg-lg px-2 rounded-sm text-white cursor-pointer'>Add Link</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrgForm
