import React, { useEffect, useState } from 'react'
import { XSquare, ImagePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { Input } from 'src/components/ui/input'
import { Textarea } from 'src/components/ui/textarea'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { ResumeExpService } from 'src/features/Resume/ResumeExp/ResumeExpService'
import { getResumeExp } from 'src/features/Resume/ResumeExp/ResExpGetService'
import { useSelector } from 'react-redux'

const ResumeExpForm = ({ setShowPanel }) => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.getResExp.getResExp)
    const [job_title, setTitle] = useState('')
    const [job_type, setType] = useState('')
    const [company_name, setCompany] = useState('')
    const [description, setDescription] = useState('')

    const handlerResExp = async (e) => {
        e.preventDefault()
        if (job_title === '' && job_type === '' && company_name === '' && description === '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(ResumeExpService({ job_title, job_type, company_name, description }))
            if (data) {
                setShowPanel()
                toast.success("Resume Experience added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getResumeExp())
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

    useEffect(() => {
        if(data){
            setCompany(data?.[0]?.company_name)
            setDescription(data?.[0]?.description)
            setTitle(data?.[0]?.job_title)
            setType(data?.[0]?.job_type)
        }
    }, [])

    return (
        <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
            <div className='min-w-[700px] max-w-[80vw] h-[450px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
          shadow-lg shrink overflow-x-hidden overflow-y-hidden p-3 transition-all'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <div className='cursor-pointer' onClick={() => setShowPanel()}><XSquare /></div>
                        <div className='flex font-semibold'>Edit Experience</div>
                    </div>
                    <div>
                        <Button onClick={handlerResExp}>
                            Save
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="company" className="font-semibold">
                            Company name:
                        </Label>
                        <Input
                            id="company"
                            type="text"
                            placeholder="Enter your company name"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={company_name}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="type" className="font-semibold">
                            Job Type:
                        </Label>
                        <Input
                            id="type"
                            type="text"
                            placeholder="Enter your job type"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={job_type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="title" className="font-semibold">
                            Job title:
                        </Label>
                        <Input
                            id="title"
                            type="text"
                            placeholder="Enter your job title"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={job_title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-3'>
                        <Label htmlFor="desc" className="font-semibold">
                            Description
                        </Label>
                        <Textarea
                            id="desc"
                            type="text"
                            rows="2"
                            placeholder="Short paragraph About yourself"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeExpForm
