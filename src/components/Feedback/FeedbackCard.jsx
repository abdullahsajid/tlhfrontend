import React from 'react'

const FeedbackCard = () => {
    return (
        <div className='flex flex-col border-[#fff] p-3 rounded-md bg-[#fff] shadow-lg transition-all hover:custom-shadow'>
            <div className='flex items-center gap-3'>
                <div>
                    <img src="./butt.jpg" className='w-[40px] h-[40px] object-cover rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-[17px] font-bold'>Ali</h1>
                    <span className='text-[14px]'>Frontend Dev</span>
                </div>
            </div>
            <div className='mt-3'>
                <span className='text-[14px] text-[#68647B]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque repellat eius modi beatae quidem ipsum qui harum placeat, quis repellendus, non, dolore nostrum numquam.
                </span>
            </div>
        </div>
    )
}

export default FeedbackCard
