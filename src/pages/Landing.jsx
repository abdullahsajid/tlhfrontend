import React, { lazy } from 'react'
const Footer = lazy(() => import('../components/Footer/Footer'))
const Feedback = lazy(() => import('../components/Feedback/Feedback'))
const JobContainer = lazy(() => import('../components/Positions/JobContainer'))
const Nav = lazy(() => import('../components/nav/Nav'))
const Hero = lazy(() => import('../components/Hero/Hero'))
const Activity = lazy(() => import('../components/Activity/Activity'))
const Procedure = lazy(() => import('../components/Procedure/Procedure'))

const Landing = () => {
    return (
        <>
            <div className='bg-[#D9D0FF] m-2 rounded-md transition-all hover:custom-shadow'>
                <Nav />
                <Hero />
            </div>
            <Activity />
            <Procedure />
            <JobContainer />
            <Feedback/>
            <Footer/>
        </>
    )
}

export default Landing
