import React, { useEffect, useState } from 'react'
import { XSquare, ImagePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { Input } from 'src/components/ui/input'
import { Textarea } from 'src/components/ui/textarea'
import { ResumeEduService } from 'src/features/Resume/ResumeEdu/ResumeEduService'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { getResumeEdu } from 'src/features/Resume/ResumeEdu/ResEduGetService'
import { useSelector } from 'react-redux'
const ResumeEduForm = ({ setShowPanel }) => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.getResEdu.getResEdu)
    const [institution_name, setIName] = useState('')
    const [program_name, setPName] = useState('')
    const [description, setDescription] = useState('')

    const handlerResEdu = async (e) => {
        e.preventDefault()
        if (institution_name === '' && program_name === '' && description === '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(ResumeEduService({ institution_name, program_name, description }))
            if (data) {
                setShowPanel()
                toast.success("Resume Experience added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getResumeEdu())
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
        setPName(data?.[0]?.program_name)
        setDescription(data?.[0]?.description)
        setIName(data?.[0]?.institution_name)
    }, [])

    return (
        <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
            <div className='min-w-[700px] max-w-[80vw] h-[400px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
            shadow-lg shrink overflow-x-hidden overflow-y-hidden p-3 transition-all'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <div className='cursor-pointer' onClick={() => setShowPanel()}><XSquare /></div>
                        <div className='flex font-semibold'>Edit Education</div>
                    </div>
                    <div>
                        <Button onClick={handlerResEdu}>
                            Save
                        </Button>
                    </div>
                </div>

                <div className='flex flex-col gap-3 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="i_name" className="font-semibold">
                            Institution name:
                        </Label>
                        <Input
                            id="i_name"
                            type="text"
                            placeholder="Enter your Institution name"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={institution_name}
                            onChange={(e) => setIName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="program_name" className="font-semibold">
                            Program Name:
                        </Label>
                        <Input
                            id="program_name"
                            type="text"
                            placeholder="Enter your Program Name"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={program_name}
                            onChange={(e) => setPName(e.target.value)}
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

export default ResumeEduForm
