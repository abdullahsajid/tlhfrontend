import React, {lazy, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css"
const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/candidate/Profile"));
const Org_profile = lazy(() => import("./pages/organization/Org_profile"));
const Auth = lazy(() => import("./auth/ProtectAuth"));
const Dummy = lazy(() => import("./components/DummyData"));
const PostContainer = lazy(() => import("./pages/posts/PostContainer"));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  
  const {loginUser} = useSelector((state) => state.login)

  

  // useEffect(() => {
  //   dispatch(getCandidateProfile());
  //   dispatch(getOrganizationProfile());
  //   dispatch(getAllProfiles())
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
      <React.Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Dummy />} />
          <Route path="/landingpage" element={<Landing/>}/>
          <Route path="/home" element={<Auth><Home /></Auth>} />
          <Route path={`/${loginUser?.data?.name}`} element={<Auth><Profile/></Auth>} />
          <Route path="/organization_profile" element={<Auth><Org_profile/></Auth>} />
          <Route path="/post" element={<Auth><PostContainer/></Auth>} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;