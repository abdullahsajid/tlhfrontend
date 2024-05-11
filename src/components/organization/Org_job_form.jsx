import React, { useState } from 'react'
import { XSquare,X, FastForward } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setJobPanel } from 'src/features/skillAssessment/AssessmentSlice'
import { useCreateJobMutation } from 'src/features/organizationApis/orgApis'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { Textarea } from 'src/components/ui/textarea'
import toast from 'react-hot-toast'
import BtnLoader from 'src/components/Loader/BtnLoader'

const Org_job_form = () => {
    const orgId = useSelector((state) => state.getOrgProfile.getOp.data)
    const [btnLoader,setBtnLoader] = useState(false)
    const [createJob] = useCreateJobMutation()
    const dispatch = useDispatch()
    const [job,setJobs] = useState({
        title:'',
        category:'',
        location:'',
        type:'',
        desc:'',
        resp:'',
        requirement:'',
        qual:'',
        skill:[],
    })
    const [skill,setSkills] = useState('')
    const handleJobChange = (name,value) => {
        setJobs((job) => {
            return {
                ...job,
                [name]:value
            }
        })
    }
    const handleSkills = () => {
        if(skill.trim !== ''){
            setJobs((jb) => {
                if(job.skill.length === 0 || !job.skill.find((item) => item.item === skill)){
                    return {
                        ...jb,
                        skill:[
                            ...job.skill,
                            {item:skill}
                        ]
                    }
                }
                return jb
            })
            setSkills('')
        }
    }
    const handleDelete = (index) => {
        setJobs((jb) => {
            return {
                ...jb,
                skill:jb.skill.filter((item,i) => i !== index)
            }
        })
    }
    const handleCreateJob = async () => {
        setBtnLoader(true)
        if(!job.title.trim() || !job.category.trim() || !job.location.trim() || !job.type.trim() 
            || !job.desc.trim() || !job.resp.trim() || !job.requirement.trim() || !job.qual.trim() || job.skill.length === 0){
            toast.error("Field are required to fill!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            setBtnLoader(false)
        }else{
            let id = orgId?.id
            const detail = {id,job}
            const {data} = await createJob(detail)
            if(data.success === true){
                dispatch(setJobPanel(false))
                setBtnLoader(false)
            }else{
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
    
  return (
    <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
        <div className='w-[680px] h-[550px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
            shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
                <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
                    <div className='flex items-center justify-between w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                        <div className='flex items-center gap-x-2'>
                            <div onClick={() => dispatch(setJobPanel(false))} className='cursor-pointer rounded-full p-1 hover:hoverbg'><X /></div>
                            <div className='flex font-bold'>Create Job</div>
                        </div>
                        <div className={`flex justify-center items-center bg-slate-900 hover:bg-slate-900/90 px-2 rounded-md text-slate-50 p-1 cursor-pointer ${btnLoader && "bg-slate-900/90"}`}
                            disabled={btnLoader}
                            onClick={handleCreateJob}
                        >
                            create {btnLoader && <BtnLoader/>}
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3 px-5 py-3'>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="title" className='font-bold'>Job Title*</Label>
                            <Input
                                id="title"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Job Title'
                                value={job?.title ? job?.title : ''}
                                onChange={(e) => handleJobChange('title',e.target.value)}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor="category" className='font-bold'>Job Category*</Label>
                                <Input
                                    id="category"
                                    className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                    placeholder='Job Category'
                                    value={job?.category ? job?.category : ''}
                                    onChange={(e) => handleJobChange('category',e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor="location" className='font-bold'>Job Location*</Label>
                                <Input
                                    id="location"
                                    className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                    placeholder='Job Location'
                                    value={job?.location ? job?.location : ''}
                                    onChange={(e) => handleJobChange('location',e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="type" className='font-bold'>Job Type*</Label>
                            <Input
                                id="type"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Job Category'
                                    value={job?.type ? job?.type : ''}
                                    onChange={(e) => handleJobChange('type',e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="expertise" className='font-bold'>Expertise*</Label>
                            <Input
                                id="expertise"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='skills'
                                value={skill ? skill : ''}
                                onChange={(e) => setSkills(e.target.value)}
                                onKeyPress={(e) => {
                                    if(e.key === 'Enter'){
                                        e.preventDefault()
                                        handleSkills()
                                    }
                                }}
                            />
                            <div className='mt-3 flex flex-wrap w-full gap-2'>
                                {job?.skill?.map((items,index) => (
                                <div className='border-2 px-3 py-1 rounded-md flex items-center gap-1' key={index}>
                                    <span>{items.item}</span>
                                    <X 
                                        size={'15px'}
                                        className='hover:bg-[rgba(247,249,249,0.1)] hover:rounded-md cursor-pointer'
                                        onClick={() => handleDelete(index)}
                                    />
                                </div>))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="description" className='font-bold'>Job Type*</Label>
                            <Textarea
                                id="description"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Job description'
                                value={job?.desc ? job?.desc : ''}
                                onChange={(e) => handleJobChange('desc',e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="Responsibility" className='font-bold'>Job Responsibility*</Label>
                            <Textarea
                                id="Responsibility"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Job description'
                                value={job?.resp ? job?.resp : ''}
                                onChange={(e) => handleJobChange('resp',e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="Requirement" className='font-bold'>Job Requirement*</Label>
                            <Textarea
                                id="Requirement"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Job description'
                                value={job?.requirement ? job?.requirement : ''}
                                onChange={(e) => handleJobChange('requirement',e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="qualification" className='font-bold'>Job qualification*</Label>
                            <Textarea
                                id="qualification"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Job description'
                                value={job?.qual ? job?.qual : ''}
                                onChange={(e) => handleJobChange('qual',e.target.value)}
                            />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Org_job_form
