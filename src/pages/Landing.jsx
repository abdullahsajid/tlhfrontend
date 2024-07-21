import React, { lazy, useState, useEffect } from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from "universal-cookie";
const Footer = lazy(() => import('../components/Footer/Footer'))
const Feedback = lazy(() => import('../components/Feedback/Feedback'))
const JobContainer = lazy(() => import('../components/Positions/JobContainer'))
const Nav = lazy(() => import('../components/nav/Nav'))
const Hero = lazy(() => import('../components/Hero/Hero'))
const Activity = lazy(() => import('../components/Activity/Activity'))
const Procedure = lazy(() => import('../components/Procedure/Procedure'))
const cookie = new Cookies()

const Landing = () => {
    const [showEditPanel, setShowEditPanel] = useState(false);
    const { loginUser } = useSelector((state) => state.login);
    const navigate = useNavigate();
    const token = cookie.get("tlhtoken");
    useEffect(() => {
        if (token) {
            return navigate("/home");
        }
    }, []);
    const handleShowPanel = (val) => {
        setShowEditPanel(val);
    };

    return (
        <>
            {/* <div
                className={` ${showEditPanel === 0 ||
                    showEditPanel === 1
                    ? "fixed inset-x-0 h-full backdrop-blur z-[9999]"
                    : ""
                    }`}
            >
                {showEditPanel === 0 && (
                    <Signup handler={handleShowPanel} />)}
                {showEditPanel === 1 && (
                    <Login handler={handleShowPanel} />)}
            </div> */}
            <div className={`rounded-md  hover:custom-shadow ${(showEditPanel === 0) ||
                (showEditPanel === 1) ? 'mt-0' : ''}`}>
                <Nav handler={handleShowPanel} />
                <Hero handler={handleShowPanel} />
            </div>
            <Activity />
            <Procedure />
            <JobContainer />
            <Feedback />
            <Footer handler={handleShowPanel} />
        </>
    )
}

export default Landing
