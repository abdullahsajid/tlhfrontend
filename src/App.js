import { useEffect, useState } from "react";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/SIdebar";
import CandidateForm from "./pages/candidate/CandidateForm";
import Home from "./pages/Home";
import Profile from "./pages/candidate/Profile";
import { Route, Routes, useNavigate } from "react-router-dom";
import Org_profile from "./pages/organization/Org_profile";
import OrgForm from "./pages/organization/OrgForm";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Auth from "./auth/ProtectAuth";
import Dummy from "./components/DummyData";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [showOption, setShowOptions] = useState(false);
  const {loginUser} = useSelector((state) => state.login)
  const handleShowPanel = (val) => {
    setShowEditPanel(val);
    setShowOptions(false);
  };
  const handleShowOptions = () => {
    setShowOptions(!showOption);
  };
  // useEffect(() => {
  //   dispatch(getCandidateProfile());
  //   dispatch(getOrganizationProfile());
  // }, [dispatch]);

  // useEffect(() => {
  //   if(loginUser && loginUser.token){
  //     navigate('/home')
  //   }
  // },[loginUser,navigate])

  // useEffect(() => {
  //   console.log("Outer")
  //   toast.success("Just test to see!")
  //   console.log("inner")
  // },[])

  return (
    <>
      <div
        className={`fixed inset-x-0 h-full ${
          showEditPanel === 0 ||
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
            <Routes>
              
              <Route path="/" element={<Dummy />} />
              {/* <Route element={<Auth />}> */}
                <Route path="/home" element={<Auth><Home /></Auth>} />
                <Route path="/profile" element={<Auth><Profile/></Auth>} />
                <Route path="/organization_profile" element={<Auth><Org_profile/></Auth>} />
              {/* </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

