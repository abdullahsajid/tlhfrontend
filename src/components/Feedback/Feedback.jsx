import React from 'react'
import FeedbackCard from './FeedbackCard'

const Feedback = () => {
    return (
        <div className='bg-[#E6A7C9] m-2 rounded-md transition-all hover:custom-shadow mt-4'>
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6'>
                <div className='w-full flex flex-col gap-2 items-center justify-center'>
                    <h1 className='text-[36px] font-bold tracking-wide'>TechLinkHub customer Feedback</h1>
                    <span className='text-[14px] text-[#68647B]'>
                        This review provide a direct insight into the advantages of job searching through techlinkhub
                    </span>
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-3 mt-5'>
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                </div>
            </div>
        </div>
    )
}

export default Feedback
