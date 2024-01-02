import React,{useState,useEffect}from 'react'
import { Link2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { getCandidateProfile } from '../../features/getProfile/getCpService'
import { getAllProfiles } from '../../features/CandidateProfile/getProfiles/UsersProfileService'
import { loginUserPost } from '../../features/candidatePost/getAuthPost/loginUserPostService'
import CandidatePost from '../../components/Posts/CandidatePost'
import { getOrganizationProfile } from '../../features/getProfile/getOrgpService'

const Profile = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.candidateProfile?.candidateProfile)
  // const {loginUserPosts} = useSelector((state) => state.post?.loginUserPost?.data)
  const[fakeLoading,setFakeLoading] = useState(true)
  // const[posts,setPosts] = useState([])
  // console.log(loginUserPosts)
  useEffect(() => {
    setTimeout(()=> {
      setFakeLoading(false)
    },2000)
    dispatch(getCandidateProfile())
    dispatch(getAllProfiles())
    dispatch(loginUserPost())
    dispatch(getOrganizationProfile())
  },[dispatch])

  return (
    <div className='py-6 px-10 transition-all w-full'>
      <div className='flex flex-col transition-all'>
        <div className='relative w-full z-[-1] transition-all'>
          <div className='w-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{height:"300px",width:'100%',border:'2px solid #fff'}}/> : !(data?.banner_url) ?
              <Skeleton style={{height:"300px",width:'100%',border:'2px solid #fff'}} /> : 
              <img src={`${data?.banner_url}`}
              className='bg-center bg-no-repeat bg-cover rounded-md w-full max-h-[300px] object-cover'/>
            }
          </div>

          <div className='absolute left-24 z-[100] custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{width:'8rem',height:'8rem',borderRadius:'0.375rem',border:'2px solid #fff'}}/> : !(data?.avatar_url) ?
              <Skeleton style={{width:'8rem',height:'8rem',borderRadius:'0.375rem',border:'2px solid #fff'}}/>
              : <img src={`${data?.avatar_url}`} className='w-32 h-32 rounded-md object-cover' />
            }
          </div>

          <div className='flex w-[320px] absolute -right-32 z-[100] custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow-2xl hover:custom-border transition-all'>
            <div className='flex flex-col px-3 py-2 w-full'>
              <div className='text-base font-semibold'>Bio</div>
              <div className='text-sm w-full'>{fakeLoading ? <Skeleton width={"100%"} style={{border:"3px solid #fff"}} count={3}/> 
                : !(data?.bio) ? <Skeleton width={"100%"} style={{border:"3px solid #fff"}} count={3}/> : data?.bio}</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 mt-20 ml-7'>
          <div className='flex text-2xl font-semibold'>
            {fakeLoading ? <Skeleton width={200}/> : !(data?.name) ? <Skeleton width={200}/> : data?.name}
          </div>
          <div className='flex w-96 flex-wrap gap-3 '>
            {data?.skill ? data?.skill.map((item,i) => (
              <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border' key={i}>
                {fakeLoading ? <Skeleton width={80} style={{border:"3px solid #fff"}}/> : !(item?.skill) ? <Skeleton width={80} style={{border:"3px solid #fff"}}/> : item?.skill}
              </div>  
            )) :
            <>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
              <Skeleton width={80}/>
            </div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
              <Skeleton width={80}/>
            </div>
            <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
              <Skeleton width={80}/>
            </div>
            </> 
            }
            
          </div>
        </div>

        <div className='flex gap-x-3 relative z-[100] w-full'>
          <div className='flex w-full mt-5 ml-7'>
            <div className='flex flex-col gap-y-2 w-[650px]'>
              <CandidatePost/>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            
            <div className='flex w-full mt-5 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>About</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{width:'100%',border:'3px solid #fff'}}/> : !(data?.about) ? 
                 <Skeleton count={3} style={{width:'100%',border:'3px solid #fff'}} /> : data?.about }</div>
              </div>
            </div>

            <div className='flex w-full mt-5 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow relative z-[100]'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>Education</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{width:'100%',border:'3px solid #fff'}}/> :
                  !(data?.education) ? <Skeleton count={3} style={{width:'100%',border:'3px solid #fff'}}/> : data?.education }</div>
              </div>
            </div>

            <div className='flex w-full mt-5 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow relative z-[100]'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>Experience</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{width:'100%',border:'3px solid #fff'}}/> :
                !(data?.experience) ? <Skeleton count={3} style={{width:'100%',border:'3px solid #fff'}}/> : data?.experience }</div>
              </div>
            </div>

            <div className='flex flex-col px-3 py-2 gap-y-2 mt-5 bg-[#f6f6f7] rounded-md w-full h-auto border border-solid border-[#f6f6f7] shadow hover:custom-border'>
              <div className=' text-1xl font-semibold'>Social Links</div>
              {data?.socialLink ? data?.socialLink.map((item,i) => (
                <a href={`${item?.link}`} className='flex items-center gap-x-2' key={i}>
                <div>
                  <Link2 size={20}/>
                </div>
                <div className='w-full'>
                  {fakeLoading ? <Skeleton width={"100%"} style={{border:"3px solid #fff"}}/> : !(item?.link) ? <Skeleton width={"100%"}/>
                  : item?.link } 
                </div>
              </a>
              )):
                <div className='flex items-center gap-x-2 w-full'>
                  <div><Link2 size={20}/></div>
                  <div className='w-full'><Skeleton count={3} width={"100%"} style={{border:"3px solid #fff"}}/></div>
                </div>}
            </div>
          </div>

        </div>

       

        
      </div>
    </div>
  )
}

export default Profile
