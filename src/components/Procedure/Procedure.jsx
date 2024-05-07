import React, { lazy, useEffect, useState } from 'react'
import { User, Search, File, Briefcase } from 'lucide-react';
const StepsCard = lazy(() => import('./StepsCard'))

const Procedure = () => {
    const[toggleBr,setToggleBr] = useState(false)
    useEffect(() => {
        if(window.innerWidth < 500){
            setToggleBr(!toggleBr)
        }
    },[])
    return (
        <div className='bg-[#010101] m-2 rounded-md transition-all hover:custom-shadow mt-4' id="feature">
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6 pb-10 custom__bg'>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5'>
                    <div className='flex flex-col max-sm:gap-4'>
                        <div>
                            <h1 className='text-[#fff] text-[50px] font-bold'>Get Employed by {toggleBr ? '' :<br />} renowned companies</h1>
                        </div>
                        <div className='text-[#8A8A8A] mt-4 leading-relaxed'>
                            Explore exciting career openings at industry-leading companies <br />
                            known for innovation and growth Join a dynamic team and be part <br />
                            of groundbreaking initiative that redefine success
                        </div>
                        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-3 mt-5 max-sm:gap-5'>
                            <StepsCard User={User} head={'Create an Account'}
                                desc={"Signup for the job applicant profile mention your application post experience and expertise and scope your interests"} />
                            <StepsCard User={Search} head={'Search Job'}
                                desc={"Signup for the job applicant profile mention your application post experience and expertise and scope your interests"} />
                            <StepsCard User={File} head={'Upload CV/Resume'}
                                desc={"Signup for the job applicant profile mention your application post experience and expertise and scope your interests"} />
                            <StepsCard User={Briefcase} head={'Get Job'}
                                desc={"Signup for the job applicant profile mention your application post experience and expertise and scope your interests"} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src="./office_img.jpg" className='h-[500px] object-cover rounded-md shadow-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Procedure

