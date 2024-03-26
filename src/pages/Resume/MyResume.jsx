import React, { lazy, useEffect, useState } from 'react'
import { getResumeHeader } from 'src/features/Resume/ResumeHeader/ResHeaderGetService'
import { getResumeContact } from 'src/features/Resume/ResumeContact/ResContactGetService'
import { getResumeExp } from 'src/features/Resume/ResumeExp/ResExpGetService'
import { getResumeEdu } from 'src/features/Resume/ResumeEdu/ResEduGetService'
import { getResumePerlProj } from 'src/features/Resume/ResumePerProj/ResPerlProjGetService'
import { useDispatch } from 'react-redux'
const ResumeHeader = lazy(() => import("../../components/Resume/ResumeHeader"))
const ResumeContact = lazy(() => import("../../components/Resume/ResumeContact"))
const WorkExp = lazy(() => import("../../components/Resume/WorkExp"))
const ResumeEdu = lazy(() => import("../../components/Resume/ResumeEdu"))
const ResumeProj = lazy(() => import("../../components/Resume/ResumeProj"))
const ResumeHeaderForm = lazy(() => import("../../pages/Resume/ResumeHeaderForm"))
const ResumeContactForm = lazy(() => import("../../pages/Resume/ResumeContactForm"))
const ResumeExpForm = lazy(() => import("../../pages/Resume/ResumeExpForm"))
const ResumeEduForm = lazy(() => import(("../../pages/Resume/ResumeEduForm")))
const ResumeProjForm = lazy(() => import("../../pages/Resume/ResumeProjForm"))

const MyResume = () => {
    const dispatch = useDispatch()
    const [showPanel, setShowPanel] = useState(false)
    useEffect(() => {
        dispatch(getResumeHeader())
        dispatch(getResumeContact())
        dispatch(getResumeExp())
        dispatch(getResumeEdu())
        dispatch(getResumePerlProj())
    }, [dispatch])
    return (
        <>
            <div className='py-6 px-10 pt-24 transition-all w-full flex flex-col justify-center items-center'>
                <div className='w-[1182px] mx-auto flex flex-col gap-2'>
                    <div className='font-bold text-2xl'>Create/Resume</div>
                    <div className='border border-[#000] border-solid rounded-lg px-10 py-3' onClick={() => setShowPanel(0)}>
                        <ResumeHeader />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg px-10 py-3' onClick={() => setShowPanel(1)}>
                        <ResumeContact />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg px-10 py-3' onClick={() => setShowPanel(2)}>
                        <WorkExp />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg px-10 py-3' onClick={() => setShowPanel(3)}>
                        <ResumeEdu />
                    </div>
                    <div className='border border-[#000] border-solid rounded-lg px-10 py-3' onClick={() => setShowPanel(4)}>
                        <ResumeProj />
                    </div>
                </div>
            </div>
            <div className={`${((showPanel === 0) || (showPanel === 1) || (showPanel === 2) || (showPanel === 3) || (showPanel === 4)) && "fixed inset-x-0 h-full backdrop-blur !z-[9999]"}`}>
                {(showPanel === 0) && (<ResumeHeaderForm setShowPanel={setShowPanel} />)}
                {(showPanel === 1) && (<ResumeContactForm setShowPanel={setShowPanel} />)}
                {(showPanel === 2) && (<ResumeExpForm setShowPanel={setShowPanel} />)}
                {(showPanel === 3) && (<ResumeEduForm setShowPanel={setShowPanel} />)}
                {(showPanel === 4) && (<ResumeProjForm setShowPanel={setShowPanel} />)}
            </div>
        </>
    )
}

export default MyResume
