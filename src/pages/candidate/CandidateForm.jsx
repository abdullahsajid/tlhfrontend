import React, { useState } from 'react'
import {XSquare,ImagePlus} from 'lucide-react' 
import {candidateProfile} from '../../features/CandidateProfile/candidateProfileService'
import { useDispatch } from 'react-redux'

const CandidateForm = ({handler}) => {
    const dispatch = useDispatch()
    const[banner,setBanner] = useState(null)
    const[avatar,setAvatar] = useState(null)
    const[name,setName] = useState('')
    const[bio,setBio] = useState('')
    const[about,setAbout] = useState('')
    const[education,setEducation] = useState('')
    const[experience,setExperience] = useState('')

    const handleBannerImg = (e) => {
        const selectfile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectfile)
        reader.onload = () => {
            if(reader.readyState === 2){
                setBanner(reader.result)
            }
        }
    }

    const handleAvatarImg = (e) => {
        const selectfile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectfile)
        reader.onload = () =>{
            if(reader.readyState === 2){
                setAvatar(reader.result)
            }
        }
    }

    const handlerProfile = (e) => {
        e.preventDefault()
        dispatch(candidateProfile({name,bio,education,banner,avatar,experience}))
    }

  return (
    <div className={`fixed top-5 flex justify-center items-center w-screen h-full transition-all`}>
        <div className='min-w-[700px] max-w-[80vw] h-[650px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
    shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
            <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
                <div className='flex justify-between w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                    <div className='flex gap-x-2'>
                        <div onClick={()=>handler()} className='cursor-pointer'><XSquare/></div>
                        <div className='flex font-semibold'>Edit Profile</div>
                    </div>
                    <div className='flex justify-center items-center custom-bg-lg px-2 rounded-sm text-white pb-[2px] cursor-pointer'  onClick={handlerProfile}>Save</div>
                </div>
                <div className='flex flex-col relative z-0'>
                    <div className='flex flex-col justify-center overflow-hidden relative max-h-[200px] h-full'>
                        <div className='w-full bg-center bg-cover bg-no-repeat overflow-hidden'>
                            <img src={`${banner ? banner : "https://private-user-images.githubusercontent.com/77003390/250310935-518c1dd8-472f-47e7-9cf9-7244ab106f22.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE5NDQ2MTgsIm5iZiI6MTcwMTk0NDMxOCwicGF0aCI6Ii83NzAwMzM5MC8yNTAzMTA5MzUtNTE4YzFkZDgtNDcyZi00N2U3LTljZjktNzI0NGFiMTA2ZjIyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA3VDEwMTgzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1NThjNGQ2ODgxNmE0NWNlM2M5ZTZlM2EzYjEwZDYzNTUzOGRjOWZjNWEwZmIwMGE0NWY4MTQ0NWNkNDE5YjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xfrz5l3baQIKYAIvOC24mTLPL_ZCT6KTbLNtOiOhuTA"}`} alt=""
                            className='w-full h-full bg-no-repeat overflow-hidden max-w-[700px]' />
                        </div>
                        <div className='flex justify-center items-center w-full h-full absolute top-0'>
                            <div className='flex flex-row justify-center items-center'>
                                <label htmlFor="imageInput"  className='flex justify-center items-center' style={{backdropFilter:'blur(10px)', backgroundColor: 'rgba(15, 20, 25, 0.75)', minWidth: '44px', minHeight: '44px', borderRadius: '999px' }}>
                                    <input type="file"
                                        style={{display:"none"}} 
                                        accept='image/*'
                                        id='imageInput'
                                        onChange={handleBannerImg}    
                                    />
                                    <ImagePlus size={18} color='white'/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center relative h-[100px] max-w-[100px] mt-[-3rem] ml-[1rem] rounded-md mb-3'>
                        <div className='flex justify-center items-center w-full h-full absolute top-0'>
                            <div className='flex flex-row justify-center items-center'>
                                <label htmlFor="avatarInput"  className='flex justify-center items-center' style={{backdropFilter:'blur(4px)', backgroundColor: 'rgba(15, 20, 25, 0.75)', minWidth: '34px', minHeight: '34px', borderRadius: '999px' }}>
                                    <ImagePlus size={18} color='white'/>
                                </label>
                                <input type="file"
                                        className='absolute'
                                        style={{ width: '0.1px', height: '0.1px', zIndex: '-1', opacity: '0',display:'none' }} 
                                        accept='image/*'
                                        id='avatarInput'
                                        onChange={handleAvatarImg}    
                                />
                            </div>
                        </div>
                        <div className='rounded-md'>
                            <img src={`${avatar ? avatar : "https://avatars.githubusercontent.com/u/77003390?v=4"}`} alt="" className=' rounded-md' />
                        </div>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="name" className='font-semibold'>Name:</label>
                        <input 
                            type="text" 
                            id='name' 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                         />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="bio" className='font-semibold'>Bio:</label>
                        <textarea 
                            id="bio" rows="2" 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={bio}
                            onChange={(e)=>setBio(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="about" className='font-semibold'>About:</label>
                        <textarea id="about" rows="2" 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={about}
                            onChange={(e)=>setAbout(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="edu" className='font-semibold'>Education:</label>
                        <textarea id="edu" rows="2" 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={education}
                            onChange={(e)=>setEducation(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="exp" className='font-semibold'>Experience:</label>
                        <textarea id="exp" rows="2" 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={experience}
                            onChange={(e)=>setExperience(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='px-3 py-1'>
                        <hr className='border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="skills" className='font-semibold'>Add skills:</label>
                        <input type="text" id='skills' className='px-2 py-2 rounded-md shadow-md outline-none border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 pb-2 flex justify-end'>
                        <button className='custom-bg-lg px-2 rounded-sm text-white cursor-pointer'>Add Skill</button>
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

export default CandidateForm