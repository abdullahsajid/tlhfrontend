import React, { lazy } from 'react'
const PositionCard = lazy(() => import('./PositionCard'))

const JobContainer = () => {
    return (
        <div className='bg-[#ECEAEB] m-2 rounded-md transition-all hover:custom-shadow mt-4'>
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6'>
                <div className='w-full flex flex-col gap-2 items-center justify-center'>
                    <h1 className='text-[36px] font-bold tracking-wide'>Recommended position for you</h1>
                    <span className='text-[14px] text-[#68647B]'>Explore position curated specifically for you based on your skills and preferences</span>
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-3 mt-5'>
                    <PositionCard 
                        img={'./butt.jpg'}
                        name={'Butt Sahab'}
                        time={'30 min'}
                        city={'Islamabad, Pakistan'}
                        timing={'full time'}
                        role={'Data Scientist'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium?'}
                    />
                    <PositionCard 
                        img={'https://avatars.githubusercontent.com/u/96902562?s=100&v=4'}
                        name={'Muhammad Umair'}
                        time={'1 hour'}
                        city={'Islamabad, Pakistan'}
                        timing={'Part time'}
                        role={'Backend Dev'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, quia?'}
                    />
                    <PositionCard 
                        img={'https://avatars.githubusercontent.com/u/128592715?s=100&v=4'}
                        name={'Hassan Tariq'}
                        time={'5 hour'}
                        city={'Islamabad, Pakistan'}
                        timing={'Part time'}
                        role={'Full Stack Dev'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium? Lorem ipsum dolor sit.'}
                    />
                    <PositionCard 
                        img={'./bilal.jpg'}
                        name={'Bilal Talib'}
                        time={'6 hour'}
                        city={'Islamabad, Pakistan'}
                        timing={'Part time'}
                        role={'Designer'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium? Lorem ipsum dolor sit.'}
                    />
                    <PositionCard
                     img={'https://avatars.githubusercontent.com/u/77003390?v=4'}
                     name={'Abdullah Sajid'}
                     time={'4 hour'}
                     city={'Islamabad, Pakistan'}
                     timing={'Part time'}
                     role={'Frontend Dev'}
                     desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium?'}
                    />
                </div>
            </div>
        </div>
    )
}

export default JobContainer
