import React from 'react'
import * as moment from 'moment';

const Comments = ({ avatar, name, content, date }) => {

  return (
    <div className='flex flex-col bg-[#FFF] p-2 rounded-md gap-y-3 border-2 border-dashed border-[#f6f6f7] 
    shadow-md w-full hover:border-[#383838] transition-all'>
      <div className='px-4 pt-4 pb-4'>
        <div className="flex flex-row gap-1">
          {avatar && <div className='me-3 flex min-w-[40px]'>
            <img src={avatar} alt=""
              className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
          </div>}
          <div className='flex flex-col'>
            <div className='flex flex-row items-center'>
              {name && <div className='text-sm font-bold mr-2'>{name}</div>}
              <div className='text-xs font-semibold flex items-center'>{moment(date)?.fromNow()}</div>
            </div>
            <div className='flex'>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments


