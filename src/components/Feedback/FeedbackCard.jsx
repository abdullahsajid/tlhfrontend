import React from 'react'

const FeedbackCard = ({name,date,desc,img,align}) => {
    return (
        <div className={`flex flex-col p-3 rounded-xl bg-[#F7F8F9] shadow-lg transition-all border-2 border-[#101010] custom_wid h-full ${align && align}`}>
            <div className='flex items-center gap-3'>
                <div>
                    <img src={img} className='w-[42px] h-[42px] object-cover rounded-md' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-[17px] font-semibold text-[#374151]'>{name}</h1>
                    <span className='text-[12px] txt-col'>{date}</span>
                </div>
            </div>
            <div className='mt-3'>
                <span className='text-[16px] text-[#374151]'>
                    {desc}
                </span>
            </div>
        </div>
    )
}

export default FeedbackCard
