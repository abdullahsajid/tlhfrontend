import React from 'react'

const StepsCard = ({User,head,desc}) => {
  return (
    <div className='flex flex-col py-3 px-3 gap-2 custom-card-border rounded-md'>
        <div className='flex items-center gap-2'>
            <User className='text-[#fff] border rounded p-1' />
            <div className='text-[#fff] text-[18px] font-bold'>{head}</div>
        </div>
        <div className='text-[#fff] text-[14px]'>{desc}</div>
    </div>
  )
}

export default StepsCard
