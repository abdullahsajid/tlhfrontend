import React, { useEffect, useState } from 'react'
import { ChevronsRight } from 'lucide-react'
import ContentEditable from 'react-contenteditable'
import { BadgePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import toast from 'react-hot-toast'
import { useGetResProjQuery,usePostResProjMutation,useUpdateResProjMutation,useDeleteResProjMutation } from 'src/features/Resume/ResumePerProj/ResProjApis'
import BtnLoader from 'src/components/Loader/BtnLoader'

const ResumeProj = () => {
    const [isEditable, setIsEditable] = useState(false)
    const [projects, setProject] = useState([])
    const [updateLoading, setUpdateLoading] = useState([])
    const [deleteLoading, setDeleteLoading] = useState([])
    const { data } = useGetResProjQuery()
    const [postResProj] = usePostResProjMutation()
    const [updateResProj] = useUpdateResProjMutation()
    const [deleteResProj] = useDeleteResProjMutation()

    useEffect(() => {
        if (data && data?.data?.length > 0) {
            setProject(data?.data)
            setUpdateLoading(new Array(data?.data?.length).fill(false))
            setDeleteLoading(new Array(data?.data?.length).fill(false))
        } else {
            setProject([
                {
                    proj_name: "",
                    proj_description: "",
                    proj_link: ""
                }
            ])
        }
    }, [data])

    const addProject = () => {
        setProject([...projects, {
            proj_name: "",
            proj_description: "",
            proj_link: ""
        }])
    }

    const handleProgramNameChange = (e, index) => {
        const newProject = [...projects]
        newProject[index] = {
            ...newProject[index],
            proj_name: e.target.value
        }
        setProject(newProject)
    }

    const handlerDescriptionChange = (e, index) => {
        const newProject = [...projects]
        newProject[index] = {
            ...newProject[index],
            proj_description: e.target.value
        }
        setProject(newProject)
    }

    const handlerPortfolioLinkChange = (e, index) => {
        const newProject = [...projects]
        newProject[index] = {
            ...newProject[index],
            proj_link: e.target.value
        }
        setProject(newProject)
    }

    const handlerResProj = async (e, index) => {
        e.preventDefault()
        const { proj_name, proj_description, proj_link } = projects[index]
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
            let allData = { proj_description, proj_name, proj_link }
            const data = await postResProj(allData)
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

    const handlerResProjUpdate = async (e, index,id) => {
        e.preventDefault()
        const { proj_name, proj_description, proj_link } = projects[index]
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
            let updateLoad = [...updateLoading]
            updateLoad[index] = true
            setUpdateLoading(updateLoad)
            let allData = {id, proj_description, proj_name, proj_link }
            const data = await updateResProj(allData)
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

    const handlerResProjDelete = async (e, index,id) => {
        e.preventDefault()
        let updateLoad = [...deleteLoading]
        updateLoad[index] = true
        setDeleteLoading(updateLoad)
            let allData = {id}
            const data = await deleteResProj(allData)
            if (data) {
                toast.success("deleted!", {
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
            <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold mb-1 pl-10 max-sm:pl-4'>
                    Projects
                </div>
                {projects.map((proj, index) => (
                    <div key={index}>
                    <>
                        <div className='flex flex-col'>
                            <div className='flex items-center pl-3'>
                                <div className='mr-2'>
                                    <ChevronsRight size={20} />
                                </div>
                                <ContentEditable
                                    tagName='a'
                                    className={`font-semibold  outline-none  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={proj.proj_name}
                                    onChange={(e) => handleProgramNameChange(e, index)}
                                    placeholder='Your Project name'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                            <div className='mt-1 pl-10'>
                                    <ContentEditable
                                        className={`font-semibold  outline-none  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                        html={proj.proj_link}
                                        onChange={(e) => handlerPortfolioLinkChange(e, index)}
                                        placeholder='Your Project link'
                                    />
                            </div>
                            <div className='mt-1 pl-10'>
                                <ContentEditable
                                    className={`outline-none w-full  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={proj.proj_description}
                                    onChange={(e) => handlerDescriptionChange(e, index)}
                                    placeholder='tell them about project Experience'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                        </div>
                        {(isEditable && data?.data?.length === 0) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResProj(e, index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        {(isEditable && data?.data?.length > 0 && !proj.res_proj_id) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResProj(e, index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        <div className='flex items-end justify-end gap-2'>
                            {(isEditable && data?.data?.length > 0 && proj.res_proj_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${updateLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={updateLoading[index]}
                                        onClick={(e) => handlerResProjUpdate(e, index, proj.res_proj_id)}>
                                        {updateLoading[index] ? <BtnLoader /> : 'Update'}
                                    </Button>
                                </div>
                            }
                            {(isEditable && data?.data?.length > 0 && proj.res_proj_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${deleteLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={deleteLoading[index]}
                                        onClick={(e) => handlerResProjDelete(e, index, proj.res_proj_id)}
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
                <div className='w-full flex mt-3 pl-10 max-sm:pl-4'>
                    <div className='flex items-center w-full cursor-pointer' onClick={addProject}>
                        <BadgePlus />
                        <hr className='border border-[#000] border-solid w-full' />
                    </div>
                </div>
            }
        </>
    )
}

export default ResumeProj
