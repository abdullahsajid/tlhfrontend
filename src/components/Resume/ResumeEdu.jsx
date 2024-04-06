import React, { useEffect, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { Button } from 'src/components/ui/button'
import { BadgePlus, ChevronsRight } from 'lucide-react'
import toast from 'react-hot-toast'
import BtnLoader from 'src/components/Loader/BtnLoader'
import { useGetResEduQuery,usePostResEduMutation,useUpdateResEduMutation,useDeleteResEduMutation } from 'src/features/Resume/ResumeEdu/ResEduApis'

const ResumeEdu = () => {
    const [isEditable, setIsEditable] = useState(false)
    const [education, setEducation] = useState([])
    const [updateLoading, setUpdateLoading] = useState([])
    const [deleteLoading, setDeleteLoading] = useState([])
    const {data} = useGetResEduQuery()
    const [postResEdu] = usePostResEduMutation()
    const [updateResEdu] = useUpdateResEduMutation()
    const [deleteResEdu] = useDeleteResEduMutation()

    useEffect(() => {
        if (data && data?.data?.length > 0) {
            setEducation(data?.data)
            setUpdateLoading(new Array(data?.data?.length).fill(false))
            setDeleteLoading(new Array(data?.data?.length).fill(false))
        } else {
            setEducation([
                {
                    institution_name: "",
                    program_name: "",
                    description: ""
                }
            ])
        }
    }, [data])



    const addEducation = () => {
        setEducation([...education,{
            institution_name: "",
            program_name: "",
            description: ""
        }])
    }

    const handleInstitutionChange = (e, index) => {
        const newEducation = [...education]
        newEducation[index] = {
            ...newEducation[index],
            institution_name: e.target.value
        }
        setEducation(newEducation)
    }

    const handlerProgramChange = (e, index) => {
        const newEducation = [...education]
        newEducation[index] = {
            ...newEducation[index],
            program_name: e.target.value
        }
        setEducation(newEducation)
    }

    const handlerDescriptionChange = (e, index) => {
        const newEducation = [...education]
        newEducation[index] = {
            ...newEducation[index],
            description: e.target.value
        }
        setEducation(newEducation)
    }

    
    const handlerResEdu = async (e,index) => {
        e.preventDefault()
        const {institution_name,program_name,description} = education[index]
        if (!institution_name.trim() && !program_name.trim() && !description.trim()) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let allData = { institution_name, program_name, description }
            const data = await postResEdu(allData)
            if (data) {
                toast.success("Resume Experience added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
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

    const handlerResEduUpdate = async (e,index,id) => {
        e.preventDefault()
        const {institution_name,program_name,description} = education[index]
        if (!institution_name.trim() && !program_name.trim() && !description.trim()) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let updateLoad = [...updateLoading]
            updateLoad[index] = true
            setUpdateLoading(updateLoad)
            let allData = {id, institution_name, program_name, description }
            const data = await updateResEdu(allData)
            if (data) {
                toast.success("Updated!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
                updateLoad[index] = false
                setUpdateLoading(updateLoad)
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

    const handlerResEduDelete = async (e,index,id) => {
        e.preventDefault()
        let updateLoad = [...deleteLoading]
        updateLoad[index] = true
        setDeleteLoading(updateLoad)
            let allData = {id}
            const data = await deleteResEdu(allData)
            if (data) {
                toast.success("Updated!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
                updateLoad[index] = false
                setDeleteLoading(updateLoad)
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

    return (
        <>
            <div className='flex flex-col' >
                <div className='text-2xl font-bold pl-10'>
                    Education
                </div>
                {education.map((edu, index) => (
                    <div key={index}>
                    <>
                        <div className='mt-3'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='flex items-center pl-3'>
                                    <div className='mr-2'>
                                        <ChevronsRight size={20} />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <ContentEditable
                                            className={`font-semibold text-[17px] outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                            html={edu.institution_name}
                                            onChange={(e) => handleInstitutionChange(e, index)}
                                            placeholder='Your institution name'
                                            onFocus={() => setIsEditable(!isEditable)}
                                        />
                                    </div>
                                </div>
                                {/* <div>
                                2021 - 2024
                            </div> */}
                            </div>
                            <div className='pl-10'>
                                <ContentEditable
                                    className={`tracking-wider mt-1 outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={edu.program_name}
                                    onChange={(e) => handlerProgramChange(e, index)}
                                    placeholder='Your program name'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                            <div className='pl-10'>
                                <ContentEditable
                                    className={`tracking-wider mt-1 outline-none  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={edu.description}
                                    onChange={(e) => handlerDescriptionChange(e, index)}
                                    placeholder='Your description here...'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                        </div>
                        {(isEditable && data?.data?.length === 0) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResEdu(e,index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        {(isEditable && data?.data?.length > 0 && !edu.res_edu_id) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResEdu(e, index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        <div className='flex items-end justify-end gap-2'>
                            {(isEditable && data?.data?.length > 0 && edu.res_edu_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${updateLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={updateLoading[index]}
                                        onClick={(e) => handlerResEduUpdate(e, index, edu.res_edu_id)}>
                                        {updateLoading[index] ? <BtnLoader /> : 'Update'}
                                    </Button>
                                </div>
                            }
                            {(isEditable && data?.data?.length > 0 && edu.res_edu_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${deleteLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={deleteLoading[index]}
                                        onClick={(e) => handlerResEduDelete(e, index, edu.res_edu_id)}
                                        variant="destructive"
                                    >
                                        {deleteLoading[index] ? <BtnLoader /> : 'Delete'}
                                    </Button>
                                </div>
                            }
                        </div>
                    </>
                    </div>
                ))}
            </div>
            {isEditable &&
                <div className='w-full flex mt-3 pl-10'>
                    <div className='flex items-center w-full cursor-pointer' onClick={addEducation}>
                        <BadgePlus />
                        <hr className='border border-[#000] border-solid w-full' />
                    </div>
                </div>
            }
        </>
    )
}

export default ResumeEdu
