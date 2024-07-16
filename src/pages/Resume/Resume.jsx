import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react';
import { useGetTemplateQuery, usePostTemplateMutation, useUpdateTemplateMutation } from 'src/features/Resume/SelectTemplate/templateApis';
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { useGetAllResourceQuery } from 'src/features/Resume/getResume/getRes';

const Resume = () => {
    const [postTemplate] = usePostTemplateMutation();
    const [updateTemplate] = useUpdateTemplateMutation();
    const { data } = useSelector((state) => state.login.loginUser)
    const resp = useGetAllResourceQuery({ name: data?.name })
    const navigation = useNavigate()

    const handlerSelectTemplate = async (e, data) => {
        e.preventDefault()
        let allData = { template_name: `${data}` }
        const res = await postTemplate(allData)

        if (res?.data?.data?.length > 0) {
            toast.success("You have been selected template!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            navigation('/edit/resume')
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

    const updateResumeTemplate = async (e, data) => {
        e.preventDefault()
        let allData = { id: resp?.data?.data?.[0]?.resumeTemplate?.[0].template_id, template_name: `${data}` }
        const res = await updateTemplate(allData)

        if (res?.data?.data?.length > 0) {
            toast.success("Template Updated!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            navigation('/edit/resume')
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
        <div className='py-6 px-10 max-sm:px-4 transition-all w-full'>
            <div className='flex flex-col'>
                <div className='text-[25px] font-bold cal_ft'>
                    Create Resume
                </div>
                {resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name &&
                    <div className='font-mono font-extrabold'>Selected Template: {resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name}</div>}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 px-5 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>
                    <div className='border-2 border-solid rounded-lg border-3 shadow-xl relative transition-all h-[270px] max-sm:w-[267px]'
                        onClick={(e) => {
                            if (resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name) {
                                updateResumeTemplate(e, 'minimal')
                            } else if (resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name == null) {
                                handlerSelectTemplate(e, 'minimal')
                            }
                        }
                        }>
                        <img src="./temp007.png" alt="template-1" className='aspect-square rounded-lg cursor-pointer h-full' />
                        <div className='absolute inset-0 flex justify-center items-center rounded-lg hover:backdrop-blur-sm transition-all cursor-pointer max-sm:w-[267px]'>
                            <div className='hover:bg-[#111] rounded'>
                                <Plus className='hover:text-[#fff]' />
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-solid rounded-lg border-3 shadow-xl relative transition-all h-[270px] max-sm:w-[267px]'
                        onClick={(e) => {
                            if (resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name) {
                                updateResumeTemplate(e, 'IT')
                            } else if (resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name == null) {
                                handlerSelectTemplate(e, 'IT')
                            }
                        }
                        }>
                        <img src="./r_template2.png" alt="template-1"
                            className='aspect-square rounded-lg cursor-pointer h-full' />
                        <div className='absolute inset-0 flex justify-center items-center rounded-lg hover:backdrop-blur-sm transition-all cursor-pointer max-sm:w-[267px]'>
                            <div className='hover:bg-[#111] rounded'>
                                <Plus className='hover:text-[#fff]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
