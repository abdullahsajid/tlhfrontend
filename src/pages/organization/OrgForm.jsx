import React, { useEffect, useState } from 'react'
import {XSquare,ImagePlus} from 'lucide-react' 
import { organizationProfile } from '../../features/organizationProfile/organizationProfileService'
import { useDispatch, useSelector } from 'react-redux'
import { addOrgSocialLinks } from '../../features/getProfile/orgLinks/addOrgLService'
import { getOrganizationProfile } from '../../features/getProfile/getOrgpService'
import Skeleton from 'react-loading-skeleton'
import toast from 'react-hot-toast'
import { updateOpService } from '../../features/organizationProfile/updateOrgProfile/updateOpService'

const OrgForm = ({handler}) => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.getOrgProfile.getOp)
    const[name,setName] = useState('')
    const[industry,setIndustry] = useState('')
    const[Email,setEmail] = useState('')
    const[weblink,setWebLink] = useState('')
    const[location,setLocation] = useState('')
    const[Bio,setBio] = useState('')
    const[about,setAbout] = useState('')
    const[banner,setBanner] = useState(null)
    const[avatar,setAvatar] = useState(null)
    const[socialName,setSocialName] = useState('')
    const[link,setLinks] = useState('')

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

    const handleOrgProfile = async (e) => {
        e.preventDefault()
        const data = await dispatch(organizationProfile({name,industry,Email,weblink,location,Bio,banner,avatar,about}))
        if(data){
            handler()
            toast.success("profile added!",{
                style:{
                    backgroundColor:'#f6f6f7',
                    border:'3px solid #fff',
                    boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            dispatch(getOrganizationProfile())
        }else{
            toast.error("something went wrong try again!",{
                style:{
                    backgroundColor:'#f6f6f7',
                    border:'3px solid #fff',
                    boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
        }
    }

    const socialLinkHandler = async (e) => {
        e.preventDefault()
        if(socialName == '' || link == ''){
            toast.error("please fill all fields!",{
                style:{
                    backgroundColor:'#f6f6f7',
                    border:'3px solid #fff',
                    boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        }else{
            // console.log("Test to see!",socialName,link)
            const socialData = await dispatch(addOrgSocialLinks({socialName,link,data}))
            if(socialData.payload){
                handler()
                toast.success("social link added!",{
                    style:{
                        backgroundColor:'#f6f6f7',
                        border:'3px solid #fff',
                        boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getOrganizationProfile())
            }else{
                toast.error("something went wrong try again!",{
                    style:{
                        backgroundColor:'#f6f6f7',
                        border:'3px solid #fff',
                        boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()
        const data = await dispatch(updateOpService({name,industry,Email,weblink,location,Bio,banner,avatar,about}))
        if(data){
            handler()
            toast.success("update profile successfully!",{
                style:{
                    backgroundColor:'#f6f6f7',
                    border:'3px solid #fff',
                    boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            dispatch(getOrganizationProfile())
        }else{
            toast.error("something went wrong try again!",{
                style:{
                    backgroundColor:'#f6f6f7',
                    border:'3px solid #fff',
                    boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
        }

    }

    useEffect(()=>{
        if(data){
            setAvatar(data?.avatar_url)
            setBanner(data?.banner_url)
            setName(data?.org_name)
            setEmail(data?.org_email)
            setIndustry(data?.industry)
            setWebLink(data?.org_website)
            setBio(data?.description)
            setLocation(data?.location)
            setAbout(data?.about)
        }
    },[])

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
                    <div className='flex justify-center items-center custom-bg-lg px-2 rounded-sm text-white pb-[2px] cursor-pointer' onClick={data?.id ? updateProfile : handleOrgProfile}>{`${data?.id ? "Update":"Save"}`}</div>
                </div>
                <div className='flex flex-col relative z-0'>
                    <div className='flex flex-col justify-center overflow-hidden relative max-h-[200px] h-full'>
                        <div className='w-full h-full relative'>
                            {banner ? <img src={`${banner ? banner : <Skeleton width={"100%"} height={"320px"}/>}`}
                                className='overflow-hidden max-w-[700px] object-cover' />:
                            <Skeleton width={"100%"} height={"320px"}/>}
                        </div>
                        <div className='flex justify-center items-center w-full h-full absolute top-0 z-[100]'>
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
                    <div className='flex flex-col justify-center relative h-[100px] max-w-[100px] mt-[-3rem] ml-[1rem] rounded-md mb-3 z-[100]'>
                        <div className='flex justify-center items-center w-full h-full absolute top-0 z-[100]'>
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
                        <div className='rounded-md  h-[100px] max-w-[100px]'>
                            {avatar ?
                                <img src={`${avatar && avatar}`}
                                className='h-full w-full rounded-md object-cover' /> :
                                <Skeleton width={"100%"} height={"100px"} style={{border:"3px solid #fff",borderRadius:"0.375rem"}} />
                            }
                        </div>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="name" className='font-semibold'>Name:</label>
                        <input 
                            type="text" 
                            id='name' 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="industry" className='font-semibold'>Industry:</label>
                        <input 
                            type="text" 
                            id='industry' 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="email" className='font-semibold'>Email:</label>
                        <input 
                            type="email" 
                            id='email' 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' 
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="link" className='font-semibold'>Website link:</label>
                        <input 
                            type="text" 
                            id='link' 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' 
                            value={weblink}
                            onChange={(e)=>setWebLink(e.target.value)}
                        />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="location" className='font-semibold'>Location:</label>
                        <input 
                            type="text" 
                            id='location' 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300' 
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                        />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="bio" className='font-semibold'>Bio:</label>
                        <textarea 
                            id="bio" 
                            rows="2" 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={Bio}
                            onChange={(e)=>setBio(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="about" className='font-semibold'>About:</label>
                        <textarea 
                            id="about" 
                            rows="2" 
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={about}
                            onChange={(e)=>setAbout(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='px-3 py-1'>
                        <hr className='border-solid border-2 border-slate-300' />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="skills" className='font-semibold'>Add Socials Name:</label>
                        <input 
                            type="text" 
                            id='skills' 
                            className='px-2 py-2 rounded-md shadow-md outline-none border-solid border-2 border-slate-300' 
                            value={socialName}
                            onChange={(e)=>setSocialName(e.target.value)}
                        />
                    </div>
                    <div className='px-3 py-3 flex flex-col gap-y-2'>
                        <label htmlFor="skills" className='font-semibold'>Add Socials Link:</label>
                        <input 
                            type="text" 
                            id='skills' 
                            className='px-2 py-2 rounded-md shadow-md outline-none border-solid border-2 border-slate-300' 
                            value={link}
                            onChange={(e)=>setLinks(e.target.value)}
                        />
                    </div>
                    <div className='px-3 pb-2 flex justify-end'>
                        <button className='custom-bg-lg px-2 rounded-sm text-white cursor-pointer' onClick={socialLinkHandler}>Add Link</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrgForm
