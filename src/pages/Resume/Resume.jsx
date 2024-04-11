import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react';
import { usePostTemplateMutation } from 'src/features/Resume/SelectTemplate/templateApis';
import toast from 'react-hot-toast'

const Resume = () => {
    const [postTemplate] = usePostTemplateMutation();
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
    return (
        <div className='py-6 px-10 transition-all w-full'>
            <div className='flex flex-col'>
                <div className='text-[25px] font-bold cal_ft'>
                    Create Resume
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 px-5'>
                    <div className='border-2 border-solid rounded-lg border-3 shadow-xl relative transition-all h-[320px]'
                        onClick={(e) => handlerSelectTemplate(e, 'minimal')}>
                        <img src="./temp007.png" alt="template-1" className='aspect-square rounded-lg cursor-pointer h-full' />
                        <div className='absolute inset-0 flex justify-center items-center rounded-lg hover:backdrop-blur-sm transition-all cursor-pointer'>
                            <div className='hover:bg-[#111] rounded'>
                                <Plus className='hover:text-[#fff]' />
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-solid rounded-lg border-3 shadow-xl relative transition-all h-[320px]'
                        onClick={(e) => handlerSelectTemplate(e, 'IT')}>
                        <img src="https://d.novoresume.com/images/doc/preview/it-resume-template.png" alt="template-1"
                            className='aspect-square rounded-lg cursor-pointer h-full' />
                        <div className='absolute inset-0 flex justify-center items-center rounded-lg hover:backdrop-blur-sm transition-all cursor-pointer'>
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
