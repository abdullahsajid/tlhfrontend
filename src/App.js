import React, { lazy, useState, useEffect, useMemo } from "react";
import {
  RouterProvider,
  Outlet,
  createBrowserRouter,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
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
const CandidateForm = lazy(() => import("./pages/candidate/CandidateForm"));
const OrgForm = lazy(() => import("./pages/organization/OrgForm"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const EditResume = lazy(() => import("./pages/Resume/EditResume"));
const MyResume = lazy(() => import("./pages/Resume/MyResume"));
const AdminLayout = lazy(() => import("./layout/AdminLayout"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const QuizCategory = lazy(() => import("./pages/Admin/QuizCategory"));
const CreateQuestion = lazy(() => import("./pages/Admin/CreateQuestion"));
const SkillType = lazy(() => import("./pages/skillAssessment/SkillType"));
const Mcqs = lazy(() => import("./components/Assessment/Mcqs"));
const ResultAssessment = lazy(() =>
  import("src/components/Assessment/ResultAssessment")
);
const Projects = lazy(() => import("./pages/Projects/SmallProject"));
const ProjectDetails = lazy(() => import("./components/Project/ProjectDetails"));
const CreateProject = lazy(() => import("./components/Project/CreateProject"));
const PostedJobs = lazy(() => import("./components/Project/PostedJobs"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));  
const Org_job_form = lazy(() => import("./components/organization/Org_job_form"))
const OrgPostForm = lazy(() => import("./components/organization/OrgPost_form"))
const OrgPosts = lazy(() => import("./components/organization/OrgPosts"))
const OrgPostContainer = lazy(() => import("./components/organization/OrgPostContainer"))
const Orgjobs = lazy(() => import('./components/organization/OrgJobs'))
const SearchProfile = lazy(() => import('../src/pages/Search/SearchProfile'))
const OrgSearchProfile = lazy(() => import('../src/pages/Search/OrgSearchProfile'))
const SearchAllResult = lazy(() => import('../src/pages/Search/SearchAllResult'))
const Message = lazy(() => import("./pages/Message"))
const ChatPanel = lazy(() => import("./pages/ChatPanel"))
const cookie = new Cookies()
function App() {
  
  // const socket = useMemo(() => io('http://localhost:8001'),[])
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
    const togglePanel = useSelector((state) => state.assessment.togglePanel)
    const toggleUpdatePanel = useSelector((state) => state.assessment.updateJobPostPanel)
    const jobPanelToggle = useSelector((state) => state.assessment.jobPanelToggle)
    const orgPostToggle = useSelector((state) => state.assessment.orgPostToggle)
    let token = cookie.get('token')
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    useEffect(() => {
      if (loginUser?.data?.name === "admin007" && token) {
        return navigate("/admin");
      } else {
        if (!token) {
          return navigate("/");
        }
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
          className={`${
            showEditPanel === 0 ||
            showEditPanel === 1 ||
            showEditPanel === 2 ||
            toggleUpdatePanel ||
            jobPanelToggle || 
            orgPostToggle
              ? "fixed inset-x-0 h-full custom-bg-op !z-[9999]"
              : ""
          }`}
        >
          {showEditPanel === 0 && (
            <React.Suspense
              fallback={
                <div className="flex justify-center items-center w-full h-screen">
                  <Loader />
                </div>
              }
            >
              <CandidateForm handler={handleShowPanel} showEditPanel={showEditPanel} />
            </React.Suspense>
          )}
          {showEditPanel === 1 && (
            <React.Suspense
              fallback={
                <div className="flex justify-center items-center w-full h-screen">
                  <Loader />
                </div>
              }
            >
              <OrgForm handler={handleShowPanel} />
            </React.Suspense>
          )}
          {toggleUpdatePanel && (
            <React.Suspense
              fallback={
                <div className="flex justify-center items-center w-full h-screen">
                  <Loader />
                </div>
              }
            >
              <CreateProject handler={handleShowPanel} />
            </React.Suspense>
          )}
          {togglePanel && (
            <React.Suspense
              fallback={
                <div className="flex justify-center items-center w-full h-screen">
                  <Loader />
                </div>
              }
            >
              <ResultAssessment />
            </React.Suspense>
          )}
          {jobPanelToggle && (
            <React.Suspense
              fallback={
                <div className="flex justify-center items-center w-full h-screen">
                  <Loader />
                </div>
              }
            >
              <Org_job_form/>
            </React.Suspense>
          )}
          {orgPostToggle && (
            <React.Suspense
              fallback={
                <div className="flex justify-center items-center w-full h-screen">
                  <Loader />
                </div>
              }
            >
              <OrgPostForm/>
            </React.Suspense>
          )}
        </div>
        <div className="bg-[#F2F2F2] min-h-screen">
          <div className="h-[60px] fixed inset-y-0 z-[110] w-full pt-[5px] backdrop-blur !bg-[#F2F2F2]">
            <Navbar
              handler={handleShowPanel}
              showBar={handleShowOptions}
              showOption={showOption}
            />
          </div>
          <div className="max-w-[90rem] mx-auto h-full bg-[#F2F2F2]">
            {currentPath !== "/edit/resume" && (
              <div className="hidden md:flex pt-[73px] w-64 flex-col fixed inset-y-0 z-50 h-full">
                <Sidebar />
              </div>
            )}
            <div
              className={`md:pl-64 pt-[60px] h-full flex w-full ${
                currentPath === "/edit/resume" && "!pl-0 !pt-0"
              }`}
            >
              <Outlet />
            </div>
          </div>
        </div>
        {/* </React.Suspense> */}
      </>
    );
  };
// const socket = "http://localhost:8001"
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
      path: "/login",
      errorElement: <div>Something went wrong!</div>,
      element: (
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-screen">
              <Loader />
            </div>
          }
        >
          <Login/>
        </React.Suspense>
      ),
    },
    {
      path: "/signup",
      errorElement: <div>Something went wrong!</div>,
      element: (
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-screen">
              <Loader />
            </div>
          }
        >
          <Signup/>
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
          path: "orgProfile",
          element:<Auth>
                    <React.Suspense
                      fallback={
                        <div className="flex justify-center items-center w-full h-screen">
                          <Loader />
                        </div>
                      }
                    >
                      <Org_profile/>
                    </React.Suspense>
                  </Auth>,
          errorElement: <div>Something went wrong!</div>,
          children:[
            {
              path:'orgpost',
              element: (
                <Auth>
                  <React.Suspense
                      fallback={
                        <div className="flex justify-center items-center w-full h-screen">
                          <Loader />
                        </div>
                      }
                    >
                    <OrgPosts/>
                  </React.Suspense>
                </Auth>
              )
            },
            {
              path:'orgjob',
              element: (
                <Auth>
                  <React.Suspense
                      fallback={
                        <div className="flex justify-center items-center w-full h-screen">
                          <Loader />
                        </div>
                      }
                    >
                    <Orgjobs/>
                  </React.Suspense>
                </Auth>
              )
            },
          ]
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
          path:"orgposts/:id",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <OrgPostContainer />
              </React.Suspense>
            </Auth>
          )
        },
        {
          path: "profile",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <Profile />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "createResume",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <Resume />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "edit/resume",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <EditResume />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "skilltype",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <SkillType />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "mcqs/:id",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <Mcqs />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "projects",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <Projects/>
              </React.Suspense>
            </Auth>
          )
        },
        {
          path: "projects/:id",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <ProjectDetails/>
              </React.Suspense>
            </Auth>
          )
        },
        {
          path: "postedjobs",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <PostedJobs/>
              </React.Suspense>
            </Auth>
          )
        },
        {
          path:"profile/:name/:id",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <SearchProfile/>
              </React.Suspense>
            </Auth>
          )
        },
        {
          path:"organization/:name/:id",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <OrgSearchProfile/>
              </React.Suspense>
            </Auth>
          )
        },
        {
          path:"searchfeed/:name",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <SearchAllResult/>
              </React.Suspense>
            </Auth>
          )
        },
        {
          path: "/message",
          errorElement: <div>Something went wrong!</div>,
          element: (
            <React.Suspense
              fallback={
                <div className="flex justify-center items-center w-full h-screen">
                  <Loader />
                </div>
              }
            >
              <Message/>
            </React.Suspense>
          ),
          children: [
            {
              path: "/message/:id1/:id2",
              errorElement: <div>Something went wrong!</div>,
              element: (
                <React.Suspense
                  fallback={
                    <div className="flex justify-center items-center w-full h-screen">
                      <Loader />
                    </div>
                  }
                >
                  <ChatPanel/>
                </React.Suspense>
              ),
            },
          ]
        },
      ],
    },
    {
      path: "resume/:name",
      element: (
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-screen">
              <Loader />
            </div>
          }
        >
          <MyResume />
        </React.Suspense>
      ),
    },
    {
      path: "/admin",
      element: <Auth><AdminLayout /></Auth>,
      errorElement: <div>Something went wrong!</div>,
      children: [
        {
          path: "/admin",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <Admin />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "createquiz",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <QuizCategory />
              </React.Suspense>
            </Auth>
          ),
        },
        {
          path: "createQues",
          element: (
            <Auth>
              <React.Suspense
                fallback={
                  <div className="flex justify-center items-center w-full h-screen">
                    <Loader />
                  </div>
                }
              >
                <CreateQuestion />
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
