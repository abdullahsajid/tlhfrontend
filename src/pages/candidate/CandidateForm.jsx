import React, { useEffect, useState } from 'react'
import { XSquare, ImagePlus } from 'lucide-react'
import { candidateProfile } from '../../features/CandidateProfile/candidateProfileService'
import { addCandidateSkills } from '../../features/getProfile/candidateSkills/addCsService'
import { useDispatch, useSelector } from 'react-redux'
import { addCandidateLinks } from '../../features/getProfile/candidateLinks/addClService'
import Skeleton from 'react-loading-skeleton'
import toast from 'react-hot-toast'
import { getCandidateProfile } from '../../features/getProfile/getCpService'
import { updateProfileService } from '../../features/CandidateProfile/updateProfile/updateProfileService'
import { Input } from 'src/components/ui/input'
import { Textarea } from 'src/components/ui/textarea'

const CandidateForm = ({ handler }) => {
    const dispatch = useDispatch()
    const [banner, setBanner] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [about, setAbout] = useState('')
    const [education, setEducation] = useState('')
    const [experience, setExperience] = useState('')
    const [skill, setSkills] = useState('')
    const [link, setLinks] = useState('')
    const [socialName, setSocialName] = useState('')

    const { data } = useSelector((state) => state.candidateProfile.candidateProfile)

    const handleBannerImg = (e) => {
        const selectfile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectfile)
        reader.onload = () => {
            if (reader.readyState === 2) {
                setBanner(reader.result)
            }
        }
    }

    const handleAvatarImg = (e) => {
        const selectfile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectfile)
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result)
            }
        }
    }

    const handlerProfile = async (e) => {
        e.preventDefault()
        if (name === '' && bio === '' && about === '' && education === '' && experience === '' && (!banner || banner === null) && (!avatar || avatar === null)) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(candidateProfile({ name, bio, about, education, banner, avatar, experience }))
            if (data) {
                handler()
                toast.success("profile added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getCandidateProfile())
                return
            } else {
                toast.error("something went wrong try again!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

    const handlerSkill = async (e) => {
        e.preventDefault()
        if (skill == '') {
            toast.error("please fill field!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(addCandidateSkills({ skill }))
            if (data) {
                setSkills('')
                handler()
                toast.success("Skill added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getCandidateProfile())
            } else {
                toast.error("something went wrong try again!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

    const handlerSocialLink = async (e) => {
        e.preventDefault()
        if (link == '' || socialName == '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(addCandidateLinks({ link, socialName }))
            console.log("social: ", data)
            if (data) {
                setLinks('')
                setSocialName('')
                handler()
                toast.success("social link added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getCandidateProfile())
            } else {
                toast.error("something went wrong try again!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()
        const data = await dispatch(updateProfileService({ name, bio, about, education, banner, avatar, experience }))
        if (data) {
            handler()
            toast.success("profile Successfully updated!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            dispatch(getCandidateProfile())
        } else {
            toast.error("something went wrong try again!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
        }
    }

    useEffect(() => {
        if (data) {
            const imgBanner = new Image()
            const avatarImg = new Image()
            imgBanner.src = data.banner_url
            avatarImg.src = data.avatar_url
            imgBanner.onload = () => {
                setBanner(data.banner_url)
            }
            avatarImg.onload = () => {
                setAvatar(data.avatar_url)
            }
            setName(data.name)
            setBio(data.bio)
            setAbout(data.about)
            setEducation(data.education)
            setExperience(data.experience)
        }
    }, [])

    return (
        <div className={`fixed top-5 flex justify-center items-center w-screen h-full transition-all`}>
            <div className='min-w-[700px] max-w-[80vw] h-[650px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
    shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
                <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
                    <div className='flex justify-between w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                        <div className='flex gap-x-2'>
                            <div onClick={() => handler()} className='cursor-pointer'><XSquare /></div>
                            <div className='flex font-semibold'>Edit Profile</div>
                        </div>
                        <div className='flex justify-center items-center custom-bg-lg px-2 rounded-sm text-white pb-[2px] cursor-pointer' onClick={data?.id ? updateProfile : handlerProfile}>{`${data?.id ? "Update" : "Save"}`}</div>
                    </div>
                    <div className='flex flex-col relative z-0'>
                        <div className='flex flex-col justify-center overflow-hidden relative max-h-[200px] h-full'>
                            <div className='w-full h-full relative'>
                                {banner ?
                                    <img src={`${banner && banner}`}
                                        className='overflow-hidden max-w-[700px] object-cover' />
                                    : <Skeleton width={"100%"} height={"320px"} />
                                }
                            </div>
                            <div className='flex justify-center items-center w-full h-full absolute top-0 z-[100]'>
                                <div className='flex flex-row justify-center items-center'>
                                    <label htmlFor="imageInput" className='flex justify-center items-center' style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(15, 20, 25, 0.75)', minWidth: '44px', minHeight: '44px', borderRadius: '999px' }}>
                                        <Input type="file"
                                            style={{ display: "none" }}
                                            accept='image/*'
                                            id='imageInput'
                                            onChange={handleBannerImg}
                                        />
                                        <ImagePlus size={18} color='white' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center relative h-[100px] max-w-[100px] mt-[-3rem] ml-[1rem] rounded-md mb-3 z-[100]'>
                            <div className='flex justify-center items-center w-full h-full absolute top-0 z-[100]'>
                                <div className='flex flex-row justify-center items-center'>
                                    <label htmlFor="avatarInput" className='flex justify-center items-center' style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(15, 20, 25, 0.75)', minWidth: '34px', minHeight: '34px', borderRadius: '999px' }}>
                                        <ImagePlus size={18} color='white' />
                                    </label>
                                    <Input type="file"
                                        className='absolute'
                                        style={{ width: '0.1px', height: '0.1px', zIndex: '-1', opacity: '0', display: 'none' }}
                                        accept='image/*'
                                        id='avatarInput'
                                        onChange={handleAvatarImg}
                                    />
                                </div>
                            </div>
                            <div className='rounded-md  h-[100px] max-w-[100px]'>
                                {avatar ?
                                    <img src={`${avatar && avatar}`} className='h-full w-full rounded-md object-cover' />
                                    : <Skeleton width={"100%"} height={"100px"} style={{ border: "3px solid #fff", borderRadius: "0.375rem" }} />}
                            </div>
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="name" className='font-semibold'>Name:</label>
                            <Input
                                type="text"
                                id='name'
                                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="bio" className='font-semibold'>Bio:</label>
                            <Textarea
                                id="bio" rows="2"
                                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="about" className='font-semibold'>About:</label>
                            <Textarea id="about" rows="2"
                                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="edu" className='font-semibold'>Education:</label>
                            <Textarea id="edu" rows="2"
                                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="exp" className='font-semibold'>Experience:</label>
                            <Textarea id="exp" rows="2"
                                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            />
                        </div>
                        <div className='px-3 py-1'>
                            <hr className='border-solid border-2 border-slate-300' />
                        </div>
                        {data?.skill && <div className='px-3 py-1 text-xs'>Your skills*</div>}
                        <div className='px-3 py-1 flex gap-x-3'>
                            {data?.skill && data?.skill?.map((item, i) => (
                                <div className='custom-bg-lg px-2 rounded-sm text-white cursor-pointer' key={i}>{item.skill}</div>
                            ))}
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="skills" className='font-semibold'>Add skills:</label>
                            <Input
                                type="text"
                                id='skills'
                                className='px-2 py-2 rounded-md shadow-md outline-none border-solid border-2 border-slate-300'
                                value={skill}
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </div>
                        <div className='px-3 pb-2 flex justify-end'>
                            <button className='custom-bg-lg px-2 rounded-sm text-white cursor-pointer' onClick={handlerSkill}>Add Skill</button>
                        </div>
                        <div className='px-3 py-1'>
                            <hr className='border-solid border-2 border-slate-300' />
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="socialName" className='font-semibold'>Add Socials name:</label>
                            <Input
                                type="text"
                                id='socialName'
                                className='px-2 py-2 rounded-md shadow-md outline-none border-solid border-2 border-slate-300'
                                value={socialName}
                                onChange={(e) => setSocialName(e.target.value)}
                            />
                        </div>
                        <div className='px-3 py-3 flex flex-col gap-y-2'>
                            <label htmlFor="socialLink" className='font-semibold'>Add Socials link:</label>
                            <Input
                                type="text"
                                id='socialLink'
                                className='px-2 py-2 rounded-md shadow-md outline-none border-solid border-2 border-slate-300'
                                value={link}
                                onChange={(e) => setLinks(e.target.value)}
                            />
                        </div>
                        <div className='px-3 pb-2 flex justify-end'>
                            <button className='custom-bg-lg px-2 rounded-sm text-white cursor-pointer' onClick={handlerSocialLink}>Add Link</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateForm
