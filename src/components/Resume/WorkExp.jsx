import React, { useEffect, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { ChevronsRight, BadgePlus } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import toast from 'react-hot-toast'
import { useGetResExpQuery, usePostResExpMutation, useUpdateResExpMutation, useDeleteResExpMutation } from 'src/features/Resume/ResumeExp/ResExpApis';
import BtnLoader from 'src/components/Loader/BtnLoader';

const WorkExp = () => {
    const { data } = useGetResExpQuery()
    const [postResExp] = usePostResExpMutation()
    const [updateResExp] = useUpdateResExpMutation()
    const [deleteResExp] = useDeleteResExpMutation()
    const [isEditable, setIsEditable] = useState(false)
    const [experience, setExperience] = useState([])
    const [updateLoading, setUpdateLoading] = useState([])
    const [deleteLoading, setDeleteLoading] = useState([])

    const addExperience = () => {
        setExperience([...experience, {
            job_title: "",
            job_type: "",
            company_name: "",
            description: ""
        }])
    }

    useEffect(() => {
        if (data && data?.data?.length > 0) {
            setExperience(data?.data)
            setUpdateLoading(new Array(data?.data?.length).fill(false))
            setDeleteLoading(new Array(data?.data?.length).fill(false))
        } else {
            setExperience([
                {
                    job_title: "",
                    job_type: "",
                    company_name: "",
                    description: ""
                }
            ])
        }
    }, [data])


    const handlerTitleChange = (e, index) => {
        const newExperience = [...experience]
        newExperience[index] = {
            ...newExperience[index],
            job_title: e.target.value
        }
        setExperience(newExperience)
    }

    const handleTypeChange = (e, index) => {
        const updatedExperience = [...experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            job_type: e.target.value
        }
        setExperience(updatedExperience);
    };

    const handleCompanyChange = (e, index) => {
        const updatedExperience = [...experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            company_name: e.target.value
        }
        setExperience(updatedExperience);
    };

    const handleDescriptionChange = (e, index) => {
        const updatedExperience = [...experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            description: e.target.value
        }
        setExperience(updatedExperience);
    };

    const handlerResExp = async (e, index) => {
        e.preventDefault()
        const { job_title, job_type, company_name, description } = experience[index]
        if (!job_title.trim() && !job_type.trim() && !company_name.trim() && !description.trim()) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let allData = { job_title, job_type, company_name, description }
            const data = await postResExp(allData)
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

    const handlerResExpUpdate = async (e, index, id) => {
        e.preventDefault()
        const { job_title, job_type, company_name, description } = experience[index]
        let updateLoad = [...updateLoading]
        updateLoad[index] = true
        setUpdateLoading(updateLoad)
        let allData = { id, job_title, job_type, company_name, description }
        const data = await updateResExp(allData)
        if (data) {
            toast.success("Resume Experience updated!", {
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

    const handlerDeleteExp = async (e, index, id) => {
        e.preventDefault()
        let updateLoad = [...deleteLoading]
        updateLoad[index] = true
        setDeleteLoading(updateLoad)
        let allData = { id }
        const data = await deleteResExp(allData)
        if (data) {
            toast.success("Deleted!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
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
            <div className='flex flex-col'>
                <div className='text-2xl font-bold pl-10'>
                    Work Experience
                </div>
                {experience.map((exp, index) => (
                    <div key={index}>
                    <>
                        <div className='mt-3'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='flex items-center pl-3'>
                                    <div className='mr-2'>
                                        <ChevronsRight size={20} />
                                    </div>
                                    <div className='flex gap-2'>
                                        <ContentEditable
                                            tagName='div'
                                            placeholder='Job Title'
                                            className={`font-semibold text-[17px]  outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                            html={exp.job_title}
                                            onChange={(e) => handlerTitleChange(e, index)}
                                            onFocus={() => setIsEditable(!isEditable)}
                                        />
                                        <ContentEditable
                                            className={`border border-solid border-[#000] rounded-md text-sm resumeTag px-[2px] outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                            html={exp.job_type}
                                            onChange={(e) => handleTypeChange(e, index)}
                                            placeholder='Job Type'
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
                                    className={`tracking-wider mt-1 mb-2 outline-none w-max  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={exp.company_name}
                                    onChange={(e) => handleCompanyChange(e, index)}
                                    placeholder='Company Name'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                            <div className='pl-10'>
                                <ContentEditable
                                    className={`tracking-wider mt-1 mb-2 outline-none  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={exp.description}
                                    onChange={(e) => handleDescriptionChange(e, index)}
                                    placeholder='Add Experience'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                        </div>
                        {(isEditable && data?.data?.length === 0) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResExp(e, index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        {(isEditable && data?.data?.length > 0 && !exp.res_exp_id) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResExp(e, index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        <div className='flex items-end justify-end gap-2'>
                            {(isEditable && data?.data?.length > 0 && exp.res_exp_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${updateLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={updateLoading[index]}
                                        onClick={(e) => handlerResExpUpdate(e, index, exp.res_exp_id)}>
                                        {updateLoading[index] ? <BtnLoader /> : 'Update'}
                                    </Button>
                                </div>
                            }
                            {(isEditable && data?.data?.length > 0 && exp.res_exp_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${deleteLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={deleteLoading[index]}
                                        onClick={(e) => handlerDeleteExp(e, index, exp.res_exp_id)}
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
                    <div className='flex items-center w-full cursor-pointer' onClick={addExperience}>
                        <BadgePlus />
                        <hr className='border border-[#000] border-solid w-full' />
                    </div>
                </div>
            }

        </>
    )
}

export default WorkExp
