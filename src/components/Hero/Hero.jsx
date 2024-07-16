import React from 'react'
import { motion } from "framer-motion"
import AnimatedShinyText from 'src/components/ui/AnimatedShinyText'

const Hero = ({ handler }) => {

    return (
        <div className='mx-auto px-4 w-full max-w-[1440px] py-6 max-sm:pt-1' id="home">
            <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2 px-3'>
                <div className='flex flex-col'>
                    <div className='max-sm:flex max-sm:justify-center'>
                        <h1 className='!text-[clamp(30px,_7.45vw,_60px)] xl:text-[clamp(52px,_7.8vw,_70px)] text-shadow-gray font-bold
                            leading-tight max-sm:leading-snug'>
                            <span>Find career that</span><br />
                            <span>Fits your ambitions</span><br />
                            <span>only at
                                {/* <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                    <span className='custom-text-border text-gray-50 font-serif'> TechLinkHub</span>
                                </AnimatedShinyText> */}
                                 <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 max-sm:px-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                    <span className='font-serif'>TechLinkHub</span>
                                </AnimatedShinyText>
                            </span>
                        </h1>
                    </div>
                    <div className='max-w-[80%] my-3 max-sm:max-w-full'>
                        <span className='text-[#68647B] text-lg max-sm:text-[16px]'>
                            With TechLinkHub, we provide platform that understands how important it is to achieve career that
                            align your dreams.
                        </span>
                    </div>
                    <div className='flex items-center my-3 gap-3'>
                        <div>
                            <button className='py-3 px-8 bg-[#000] text-[#fff] rounded-md h-full text-lg font-bold max-sm:py-2'>320K</button>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href='https://www.linkedin.com/in/aabdullahsajid/'
                                    target='_blank'
                                >
                                    <img src="https://avatars.githubusercontent.com/u/77003390?v=4"
                                        className='w-[35px] h-[35px] object-cover rounded-full max-sm:w-[30px] max-sm:h-[30px]' />
                                </motion.a>
                                <motion.a 
                                    className='ml-[-5px]'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href='https://www.linkedin.com/in/muhammad-umair-b28b29227/'
                                    target='_blank'
                                >
                                    <img src="https://avatars.githubusercontent.com/u/96902562?s=100&v=4"
                                        className='w-[35px] h-[35px] object-cover rounded-full max-sm:w-[30px] max-sm:h-[30px]' />
                                </motion.a>
                                <motion.a 
                                    className='ml-[-5px]'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href='https://www.linkedin.com/in/bilal-talib-121ch/'
                                    target='_blank'
                                >
                                    <img src="./bilal.jpg"
                                        className='w-[35px] h-[35px] object-cover rounded-full max-sm:w-[30px] max-sm:h-[30px]' />
                                </motion.a>
                            </div>
                            <div className='text-[14px] font-bold max-sm:text-[12px]'>Active Users</div>
                        </div>
                    </div>
                    {/* <div className='flex gap-2 mt-5'>
                        <button className='text-[#fff] border border-[#00AA76] bg-[#00AA76] py-1 px-3 rounded-md transition-all hover:text-[#00AA76] hover:bg-[#010101]'
                            onClick={() => handler(1)}>Login</button>
                        <button className='text-[#00AA76] border border-[#00AA76] py-1 px-3 rounded-md transition-all hover:text-[#fff] hover:bg-[#00AA76]'
                            onClick={() => handler(0)}>Register</button>
                    </div> */}
                </div>
                <div className='flex bg-[#d2f1d2] rounded-3xl p-9 h-full max-sm:px-3 max-sm:flex-col'>
                    <div className='flex flex-col max-sm:items-center max-sm:justify-center'>
                        <div className='font-bold text-[35px] max-sm:text-[30px]'>
                            What type of job <br />
                            you are looking
                        </div>
                        <div className='flex flex-wrap gap-x-2 gap-y-3 mt-5 w-[300px] max-sm:items-center max-sm:justify-center'>
                            <motion.div 
                                    drag
                                    dragConstraints={{
                                      top: -10,
                                      left: -10,
                                      right: 10,
                                      bottom: 10,
                                    }}
                                className='rounded-xl px-5 py-2 bg-[#fff]'>
                                Design  
                            </motion.div>
                            <motion.div 
                                drag
                                dragConstraints={{
                                top: -10,
                                left: -10,
                                right: 10,
                                bottom: 10,
                                }}
                                className='rounded-xl px-5 py-2 bg-[#fff]'>
                                Development  
                            </motion.div>
                            <motion.div 
                                 drag
                                 dragConstraints={{
                                 top: -10,
                                 left: -10,
                                 right: 10,
                                 bottom: 10,
                                 }}
                                className='rounded-xl px-5 py-2 bg-[#fff]'>
                                Admin & Customer support  
                            </motion.div>
                            <motion.div 
                                drag
                                dragConstraints={{
                                top: -10,
                                left: -10,
                                right: 10,
                                bottom: 10,
                                }}
                                className='rounded-xl px-5 py-2 bg-[rgba(20,20,19)] text-[#fff]'>
                                Finance  
                            </motion.div>
                            <motion.div
                                drag
                                dragConstraints={{
                                top: -10,
                                left: -10,
                                right: 10,
                                bottom: 10,
                                }} 
                                className='rounded-xl px-5 py-2 bg-[rgba(20,20,19)] text-[#fff]'>
                                Architecture  
                            </motion.div>
                        </div>
                    </div>
                    <div className='max-sm:hidden'>
                        <img src="./img.png" className='object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
