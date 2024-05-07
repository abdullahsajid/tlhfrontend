import React, { lazy } from 'react'
const PositionCard = lazy(() => import('./PositionCard'))

const JobContainer = () => {
    return (
        <div className='bg-[#DFF3FE] m-2 rounded-md transition-all hover:custom-shadow mt-4 border-2 border-[#676768]' id="explore">
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6'>
                <div className='w-full flex flex-col gap-2 items-center justify-center'>
                    <h1 className='text-[40px] font-bold tracking-wide max-sm:text-[30px]'>Explore position for you</h1>
                    <span className='text-[14px] text-[#68647B]'>Explore position curated specifically for you based on your skills and preferences</span>
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-5'>
                    <PositionCard
                        img={'./butt.jpg'}
                        name={'Hamza Sadiq'}
                        time={'Jun 18, 2021'}
                        city={'Islamabad, Pakistan'}
                        timing={'full time'}
                        role={'Data Scientist'}
                        skills={{programming:['Python', 'Machine Learning', 'Data Analysis']}}
                    />
                    <PositionCard
                        img={'https://avatars.githubusercontent.com/u/96902562?s=100&v=4'}
                        name={'Muhammad Umair'}
                        time={'Jun 18, 2021'}
                        city={'Islamabad, Pakistan'}
                        timing={'Part time'}
                        role={'Backend Dev'}
                        skills={{programming:['Node js', 'Express js', 'MongoDB']}}
                    />
                    <PositionCard
                        img={'https://avatars.githubusercontent.com/u/128592715?s=100&v=4'}
                        name={'Hassan Tariq'}
                        time={'Jun 18, 2021'}
                        city={'Islamabad, Pakistan'}
                        timing={'Part time'}
                        role={'Full Stack Dev'}
                        skills={{programming:['React js', 'Node js', 'MongoDB']}}
                    />
                    <PositionCard
                        img={'./bilal.jpg'}
                        name={'Bilal Talib'}
                        time={'Jun 18, 2021'}
                        city={'Islamabad, Pakistan'}
                        timing={'Part time'}
                        role={'Designer'}
                        skills={{programming:['Figma', 'Adobe XD', 'Illustrator']}}
                    />
                    <PositionCard
                        img={'https://avatars.githubusercontent.com/u/77003390?v=4'}
                        name={'Abdullah Sajid'}
                        time={'Jun 18, 2021'}
                        city={'Islamabad, Pakistan'}
                        timing={'Part time'}
                        role={'Frontend Dev'}
                        skills={{programming:['React js', 'Redux', 'Tailwind CSS']}}
                    />
                </div>
            </div>
        </div>
    )
}

export default JobContainer
