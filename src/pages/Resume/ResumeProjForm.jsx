import React, { useEffect, useState } from 'react'
import { XSquare, ImagePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { Input } from 'src/components/ui/input'
import { Textarea } from 'src/components/ui/textarea'
import { useDispatch,useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { ResumePerlProjService } from 'src/features/Resume/ResumePerProj/ResumeProjService'
import { getResumePerlProj } from 'src/features/Resume/ResumePerProj/ResPerlProjGetService'

const ResumeProjForm = ({ setShowPanel }) => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.getResProj.getResProj)
    const [proj_name, setPName] = useState('')
    const [proj_description, setDescription] = useState('')
    const [proj_link, setLink] = useState('')

    const handlerResProj = async (e) => {
        e.preventDefault()
        if (proj_name === '' && proj_description === '' && proj_link === '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(ResumePerlProjService({ proj_description, proj_name, proj_link }))
            if (data) {
                setShowPanel()
                toast.success("Resume Experience added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getResumePerlProj())
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
        setDescription(data?.[0]?.proj_description)
        setLink(data?.[0]?.proj_link)
        setPName(data?.[0]?.proj_name)
    },[])

    return (
        <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
            <div className='min-w-[700px] max-w-[80vw] h-[400px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
            shadow-lg shrink overflow-x-hidden overflow-y-hidden p-3 transition-all'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <div className='cursor-pointer' onClick={() => setShowPanel()}><XSquare /></div>
                        <div className='flex font-semibold'>Edit Personal Projects</div>
                    </div>
                    <div>
                        <Button onClick={handlerResProj}>
                            Save
                        </Button>
                    </div>
                </div>

                <div className='flex flex-col gap-3 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="p_name" className="font-semibold">
                            Project Name:
                        </Label>
                        <Input
                            id="p_name"
                            type="text"
                            placeholder="Enter your Project Name"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={proj_name}
                            onChange={(e) => setPName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="program_name" className="font-semibold">
                            Link:
                        </Label>
                        <Input
                            id="program_name"
                            type="url"
                            placeholder="Enter your project link"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={proj_link}
                            onChange={(e) => setLink(e.target.value)}
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
                            value={proj_description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeProjForm
