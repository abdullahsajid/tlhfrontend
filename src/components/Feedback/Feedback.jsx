import React from 'react'
import FeedbackCard from './FeedbackCard'

const Feedback = () => {
    return (
        <div className='bg-[#ECEFF4] m-2 rounded-md transition-all hover:custom-shadow mt-4 border-2 border-[#676768]'>
            <div className='mx-auto px-4 w-full max-w-[1440px] py-6'>
                <div className='w-full flex flex-col gap-2 items-center justify-center'>
                    <h1 className='text-[36px] font-bold tracking-wide max-sm:text-[30px]'>TechLinkHub customer Feedback</h1>
                    <span className='text-[14px] text-[#68647B]'>
                        This review provide a direct insight into the advantages of job searching through techlinkhub
                    </span>
                </div>
                <div className='flex flex-wrap gap-3 mt-5'>
                    <FeedbackCard
                        img={"./bilal.jpg"}
                        name={"Muhammad Bilal"} 
                        date={"Jun 18, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"}
                    />
                    <FeedbackCard 
                        img={"https://avatars.githubusercontent.com/u/96902562?s=100&v=4"}
                        name={"Muhammad Umair"} 
                        date={"Feb 18, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."}
                    />
                    <FeedbackCard
                        img={"https://avatars.githubusercontent.com/u/128592715?s=100&v=4"} 
                        name={"Hassan Tariq"} 
                        date={"Jun 25, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
                    />
                    <FeedbackCard
                        img={"./butt.jpg"} 
                        name={"Bilal Talib"} 
                        date={"May 18, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"}
                    />
                    <FeedbackCard 
                        img={"https://avatars.githubusercontent.com/u/77003390?v=4"}
                        name={"Abdullah Sajid"} 
                        date={"Jun 10, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"}
                    />
                    <FeedbackCard 
                        img={"./bilal.jpg"}
                        name={"Muhammad Ali"} 
                        date={"Jun 18, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"}
                        align={'mt-[-100px]'}
                    />
                    <FeedbackCard 
                        img={"https://avatars.githubusercontent.com/u/77003390?v=4"}
                        name={"Abdullah Sajid"} 
                        date={"Jun 19, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"}
                        align={'mt-[-50px]'}
                    />
                    <FeedbackCard 
                        img={"https://avatars.githubusercontent.com/u/96902562?s=100&v=4"}
                        name={"Muhammad Taha"} 
                        date={"Jun 20, 2024"}
                        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Feedback
