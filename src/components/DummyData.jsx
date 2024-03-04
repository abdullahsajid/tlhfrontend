import React, { lazy, useState, useEffect } from 'react'
import Posts from './homeComponents/Posts'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
const OrgForm = lazy(() => import("../pages/organization/OrgForm"));
const Signup = lazy(() => import("../pages/Signup"));
const Login = lazy(() => import("../pages/Login"));
const Navbar = lazy(() => import("./navbar/Navbar"));
const Sidebar = lazy(() => import("./sidebar/SIdebar"));
const CandidateForm = lazy(() => import("../pages/candidate/CandidateForm"));

const Dummy = () => {
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [showOption, setShowOptions] = useState(false);
  const { loginUser } = useSelector((state) => state.login)
  const navigate = useNavigate()
  useEffect(() => {
    if (loginUser?.token) {
      return navigate('/home')
    }
  }, [])

  const handleShowPanel = (val) => {
    setShowEditPanel(val);
    setShowOptions(false);
  };

  const handleShowOptions = () => {
    setShowOptions(!showOption);
  };

  return (
    <>
      <div
        className={`fixed inset-x-0 h-full ${showEditPanel === 0 ||
          showEditPanel === 1 ||
          showEditPanel === 2 ||
          showEditPanel === 3
          ? "backdrop-blur"
          : ""
          }`}
      >
        {showEditPanel === 0 && <CandidateForm handler={handleShowPanel} />}
        {showEditPanel === 1 && <OrgForm handler={handleShowPanel} />}
        {showEditPanel === 2 && <Signup handler={handleShowPanel} />}
        {showEditPanel === 3 && <Login handler={handleShowPanel} />}
      </div>
      <div className="h-full">
        <div className="h-[60px] fixed inset-y-0 z-[110] w-full">
          <Navbar
            handler={handleShowPanel}
            showBar={handleShowOptions}
            showOption={showOption}
          />
        </div>
        <div className="max-w-[90rem] mx-auto h-full">
          <div className="hidden md:flex pt-[63px] w-64 flex-col fixed inset-y-0 z-50 h-full">
            <Sidebar />
          </div>
          <div className="md:pl-64 pt-[60px] h-full flex w-full">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <div className='flex gap-x-7'>
      <div className='py-6 pl-16 max-sm:pl-8 w-[50rem] flex flex-col gap-y-2 relative z-[100]'>
        <Posts link={"https://avatars.githubusercontent.com/u/77003390?v=4"} name={'Abdullah Sajid'} postImg={'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg'} />
        <Posts link={"https://avatars.githubusercontent.com/u/77003390?v=4"} name={'Umair'} postImg={'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg'} />
      </div>
    </div> */}
    </>
  )
}

export default Dummy
