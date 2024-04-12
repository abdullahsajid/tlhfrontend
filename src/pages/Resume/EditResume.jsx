import React, { lazy } from 'react'
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetAllResourceQuery } from 'src/features/Resume/getResume/getRes';
const ResumeHeader = lazy(() => import("../../components/Resume/ResumeHeader"))
const ResumeContact = lazy(() => import("../../components/Resume/ResumeContact"))
const WorkExp = lazy(() => import("../../components/Resume/WorkExp"))
const ResumeEdu = lazy(() => import("../../components/Resume/ResumeEdu"))
const ResumeProj = lazy(() => import("../../components/Resume/ResumeProj"))
const ResumeCertificate = lazy(() => import("../../components/Resume/ResumeCertificate"))
const ResumeSkills = lazy(() => import("../../components/Resume/ResumeSkills"))
const ResumeInterest = lazy(() => import("../../components/Resume/ResumeInterest"))
const ResumeLang = lazy(() => import("../../components/Resume/ResumeLang"))

const EditResume = () => {
    const { data } = useSelector((state) => state.login.loginUser)
    const resp = useGetAllResourceQuery({ name: data?.name })
    return (
        <>
            <div className='py-6 px-10 pt-24 transition-all w-full flex flex-col justify-center items-center'>
                <div className='w-[1182px] mx-auto flex flex-col gap-2'>
                    <div className='flex justify-between items-center'>
                        <div className='font-bold text-2xl flex flex-col'>
                            <div>
                                Create/Resume
                            </div>
                            {resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name &&
                                <div className='font-mono text-sm font-extrabold'>Selected Template: {resp?.data?.data?.[0]?.resumeTemplate?.[0].template_name}</div>}
                        </div>
                        <Link to={`/resume/${data.name}`} className='border border-solid border-[#000] rounded-md flex justify-center items-center w-[30px] h-[30px]' target='_blank'>
                            <ArrowUpRight />
                        </Link>
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg px-10 py-3'>
                        <ResumeHeader />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg px-10 py-3'>
                        <ResumeContact />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg pr-10 py-3 bg-[#313C4E]'>
                        <ResumeSkills />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg pr-10 py-3'>
                        <WorkExp />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg pr-10 py-3'>
                        <ResumeEdu />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg pr-10 py-3'>
                        <ResumeProj />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg pr-10 py-3'>
                        <ResumeCertificate />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className=' border border-[#000] border-solid rounded-lg px-10 py-3'>
                            <ResumeInterest />
                        </div>
                        <div className=' border border-[#000] border-solid rounded-lg px-10 py-3'>
                            <ResumeLang />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditResume
