
import React, { useEffect, useState } from 'react'
import SidebarItems from './SidebarItems'
import { Home, Building2, Bell, ClipboardList, NotebookText,Layers,MessageCircleMore} from 'lucide-react'
import { Link,useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { setSideBarToggle } from "src/features/skillAssessment/AssessmentSlice";
import { useDispatch } from 'react-redux'
const Sidebar = () => {
    const dispatch = useDispatch()
    const org = useSelector((state) => state.getOrgProfile.getOp)
    const { loginUser } = useSelector((state) => state.login)
    const [toggleUser, setToggleUser] = useState(false)
    const [active, setActive] = useState(0)
    const [profileBarToggle,setProfileBarToggle] = useState(false)
    const [sidebarData, setSidebarData] = useState([]);
    const { data } = useSelector((state) => state.candidateProfile.candidateProfile)
    const [fakeLoading, setFakeLoading] = useState(true)
    const currentPath = useLocation().pathname;

    useEffect(() => {
        setTimeout(() => {
            setFakeLoading(false)
        }, 2000)
    }, [])


    useEffect(() => {
        if (org.data && org.data.id && loginUser?.token) {
            setSidebarData([
                {
                    id: 0,
                    label: "Home",
                    icon: Home,
                    endpoint: '/home'
                },
                {
                    id: 1,
                    label: "Organization",
                    icon: Building2,
                    endpoint: '/orgProfile/orgpost'
                },
                {
                    id: 2,
                    label: "Create Resume",
                    icon: NotebookText,
                    endpoint: '/createResume'
                },
                {
                    id: 3,
                    label: "Skill Assessment",
                    icon: NotebookText,
                    endpoint: '/skilltype'   
                },
                {
                    id: 4,
                    label: "Projects",
                    icon: Layers,
                    endpoint: '/projects'
                },
                {
                    id: 5,
                    label: "Messages",
                    icon: MessageCircleMore,
                    endpoint: '/message'
                }
            ]);
        }
        else if (loginUser?.token) {
            setSidebarData([
                {
                    id: 0,
                    label: "Home",
                    icon: Home,
                    endpoint: '/home'
                },
                {
                    id: 1,
                    label: "Create Resume",
                    icon: Building2,
                    endpoint: '/createResume'
                },
                {
                    id: 2,
                    label: "Skill Assessment",
                    icon: NotebookText,
                    endpoint: '/skilltype'   
                },
                {
                    id: 3,
                    label: "Projects",
                    icon: Layers,
                    endpoint: '/projects'
                },
                // {
                //     id: 4,
                //     label: "Messages",
                //     icon: MessageCircleMore,
                //     endpoint: '/message'
                // }
            ]);
        } else {
            setSidebarData([
                {
                    id: 0,
                    label: "Home",
                    icon: Home,
                    endpoint: '/'
                },
                {
                    id: 1,
                    label: "Jobs",
                    icon: ClipboardList,
                    endpoint: '/'
                }
            ]);
        }
    }, [loginUser, org.data])

    const handlerActive = (id) => {
        setActive(id)
        setProfileBarToggle(false)
    }

    const handlerProfileToggle = () => {
        setActive(false)
        setProfileBarToggle(!profileBarToggle)
    }

    useEffect(() => {
        loginUser?.token ? setToggleUser(true) : setToggleUser(false)
    }, [loginUser, toggleUser])
    // {`/${loginUser?.data?.name}`} 
    return (
        <div className='h-full border-r flex flex-col overflow-y-auto bg-[#F2F2F2] shadow-md'
            style={{ boxShadow: '9px 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}>
            <div className='flex justify-between flex-col w-full h-full p-3 pl-0'>
                <div className='flex flex-col gap-y-2'>
                    {sidebarData.map((items, i) => (
                        <SidebarItems key={i} id={items.id} label={items.label} Icon={items.icon}
                            active={items.id === active} onActive={() => handlerActive(items.id)} endpoint={items.endpoint} />
                    ))}
                </div>
                {toggleUser && <Link to={`/profile`} className={`flex flex-row items-center bg-[#FFF] px-3 py-2 rounded-md gap-y-3 border-2 hover:border-dashed border-[#f6f6f7] 
                    shadow-lg w-full hover:border-[#383838] transition-all 
                    ${currentPath === '/profile' ? "bg-slate-900 !text-[#fff] hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90" : ""}`}
                    onClick={() => {
                        handlerProfileToggle()
                        dispatch(setSideBarToggle(false))
                    }}>
                    <div className='mr-3 min-w-[40px]'>
                        {fakeLoading ? <Skeleton style={{ width: '2.5rem', height: '2.5rem', borderRadius: "0.375rem", border: "3px solid #fff" }} /> : data?.avatar_url ?
                            <img src={`${data?.avatar_url}`} alt="" className='w-12 h-10 rounded-md object-cover' /> : <Skeleton style={{ width: '2.5rem', height: '2.5rem', borderRadius: "0.375rem", border: "3px solid #fff" }} />}
                    </div>
                    <div className='uppercase font-semibold w-full text-[14px]'>
                        {fakeLoading ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} /> : data?.name ? data?.name : <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} />}
                    </div>
                </Link>}
            </div>
        </div>
    )
}

export default Sidebar
