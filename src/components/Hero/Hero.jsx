import React from 'react'

const Hero = () => {

    return (
        <div className='mx-auto px-4 w-full max-w-[1440px] py-6'>
            <div className='grid grid-cols-2 max-sm:grid-cols-1'>
                <div className='flex flex-col'>
                    <div className='max-sm:flex max-sm:justify-center'>
                        <h1 className='!text-[clamp(38px,_7.45vw,_70px)] xl:text-[clamp(52px,_7.8vw,_70px)] text-shadow-gray font-bold
                        leading-tight'>
                            <span>Find career that</span><br />
                            <span>Fits your ambitions</span><br />
                            <span>only at
                                <span className='custom-text-border text-gray-50'> TechLinkHub</span>
                            </span>
                        </h1>
                    </div>
                    <div className='max-w-[80%] my-3'>
                        <span className='text-[#68647B] text-lg '>
                            With TechLinkHub, we provide platform that understands how important it is to achieve career that
                            align your dreams.
                        </span>
                    </div>
                    <div className='flex items-center my-3 gap-3'>
                        <div>
                            <button className='py-4 px-8 bg-[#000] text-[#fff] rounded-md h-full text-lg font-bold'>320K</button>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <div>
                                    <img src="https://avatars.githubusercontent.com/u/77003390?v=4"
                                        className='w-[35px] h-[35px] object-cover rounded-full' />
                                </div>
                                <div className='ml-[-5px]'>
                                    <img src="https://avatars.githubusercontent.com/u/96902562?s=100&v=4"
                                        className='w-[35px] h-[35px] object-cover rounded-full' />
                                </div>
                                <div className='ml-[-5px]'>
                                    <img src="https://avatars.githubusercontent.com/u/128592715?s=100&v=4"
                                        className='w-[35px] h-[35px] object-cover rounded-full' />
                                </div>
                            </div>
                            <div className='text-[14px] font-bold'>Active Users</div>
                        </div>
                    </div>
                </div>
                <div className='flex item-center justify-center items-center'>
                    <img src="./hero.png" />
                </div>
            </div>
        </div>
    )
}

export default Hero
