import React from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {

    return (
        <div className='py-6 px-10 transition-all w-full'>
            <div className='flex flex-col'>
                <div className='text-[25px] font-bold cal_ft'>
                    Create Resume
                </div>
                <div className='grid grid-cols-3 gap-3 mt-5 px-5'>
                    <Link to={'/myresume'} className='border border-solid rounded-lg border-[#000] p-5'>
                        <img src="./template-1.png" alt="template-1" className='aspect-square' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Resume
