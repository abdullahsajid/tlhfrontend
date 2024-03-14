import React, { lazy, useState, useEffect } from "react";
import {
  RouterProvider,
  Outlet,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import Loader from "./components/Loader/Loader";
import Auth from "./auth/ProtectAuth";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/SIdebar";
const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/candidate/Profile"));
const Org_profile = lazy(() => import("./pages/organization/Org_profile"));
const PostContainer = lazy(() => import("./pages/posts/PostContainer"));
const CandidateForm = lazy(() => import("./pages/candidate/CandidateForm"))
const OrgForm = lazy(() => import('./pages/organization/OrgForm'))

function App() {
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

  // return (
  //   <>
  //     <React.Suspense fallback={<div>loading...</div>}>
  //       <Routes>
  //         <Route path="/" element={<Dummy />} />
  //         <Route path="/landingpage" element={<Landing />} />
  //         <Route
  //           path="/home"
  //           element={
  //             <Auth>
  //               <Home />
  //             </Auth>
  //           }
  //         />
  //         <Route
  //           path={`/${loginUser?.data?.name}`}
  //           element={
  //             <Auth>
  //               <Profile />
  //             </Auth>
  //           }
  //         />
  //         <Route
  //           path="/organization_profile"
  //           element={
  //             <Auth>
  //               <Org_profile />
  //             </Auth>
  //           }
  //         />
  //         <Route
  //           path="/post"
  //           element={
  //             <Auth>
  //               <PostContainer />
  //             </Auth>
  //           }
  //         />
  //       </Routes>
  //     </React.Suspense>
  //   </>
  // );

  const Layout = () => {
    const [showEditPanel, setShowEditPanel] = useState(false);
    const [showOption, setShowOptions] = useState(false);
    const { loginUser } = useSelector((state) => state.login);
    const navigate = useNavigate();
    useEffect(() => {
      if (loginUser?.token) {
        return navigate("/home");
      }
    }, []);
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
          className={`fixed inset-x-0 h-full ${
            showEditPanel === 0 ||
            showEditPanel === 1 ||
            showEditPanel === 2 ||
            showEditPanel === 3
              ? "backdrop-blur"
              : ""
          }`}
        >
          {showEditPanel === 0 && (
            <React.Suspense 
            fallback={<div className="flex justify-center items-center w-full h-screen">
              <Loader />
              </div>}>
              <CandidateForm handler={handleShowPanel} />
            </React.Suspense>
          )}
          {showEditPanel === 1 && (
            <React.Suspense 
              fallback={<div className="flex justify-center items-center w-full h-screen">
                <Loader />
              </div>}>
              <OrgForm handler={handleShowPanel} />
            </React.Suspense>
          )}
          {/* {showEditPanel === 2 && (
            <React.Suspense 
              fallback={<div className="flex justify-center items-center w-full h-screen">
                <Loader />
              </div>}>
              <Signup handler={handleShowPanel} />
            </React.Suspense>
          )}
          {showEditPanel === 3 && (
            <React.Suspense 
              fallback={<div className="flex justify-center items-center w-full h-screen">
                <Loader />
              </div>}>
              <Login handler={handleShowPanel} />
            </React.Suspense>
          )} */}
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
        {/* </React.Suspense> */}
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div>Something went wrong!</div>,
      element: (
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-screen">
              <Loader />
            </div>
          }
        >
          <Landing />
        </React.Suspense>
      ),
    },
    {
      path: "",
      element: <Layout />,
      errorElement: <div>Something went wrong!</div>,
      children: [
        {
          path: "home",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <Home />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "organization_profile",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <Org_profile />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "post",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <PostContainer />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "profile",
          element: (
            <Auth>
              <React.Suspense fallback={<div className="flex justify-center items-center w-full h-screen"><Loader /></div>}>
                <Profile />
              </React.Suspense>
            </Auth>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
