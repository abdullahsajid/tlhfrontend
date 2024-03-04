import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#010101] m-2 rounded-md transition-all hover:custom-shadow mt-4'>
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6 custom__bg'>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 mb-5'>
                    <div className='text-[35px] text-[#fff] font-bold tracking-wide'>
                        Tribute towards <br />
                        our ideal career
                    </div>
                    <div>
                        <span className='text-[#68647B]'>
                            Moving forward towards your ideal career inst easy <br />
                            but every step brings you closer to achieving your dreams
                        </span>
                        <div className='flex gap-2 mt-5'>
                            <button className='text-[#fff] border border-[#00AA76] bg-[#00AA76] py-1 px-3 rounded-md transition-all hover:text-[#00AA76] hover:bg-[#010101]'>Login</button>
                            <button className='text-[#00AA76] border border-[#00AA76] py-1 px-3 rounded-md transition-all hover:text-[#fff] hover:bg-[#00AA76]'>Register</button>
                        </div>
                    </div>
                </div>
                <div className='border border-t-2 border-[#68647B]'></div>
            </div>
        </div>
    )
}

export default Footer
