import React, { useState, useEffect } from 'react'
import { Link2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { getCandidateProfile } from '../../features/getProfile/getCpService'
import { getAllProfiles } from '../../features/CandidateProfile/getProfiles/UsersProfileService'
import { loginUserPost } from '../../features/candidatePost/getAuthPost/loginUserPostService'
import CandidatePost from '../../components/Posts/CandidatePost'
import { getOrganizationProfile } from '../../features/getProfile/getOrgpService'
import { useGetBadgesQuery } from 'src/features/skillAssessment/AssessmentApis'
import { useGetUserProfileDetailsQuery } from 'src/features/Search/searchApis'
const Profile = () => {
  const dispatch = useDispatch()
  const { data: detail } = useSelector((state) => state.candidateProfile?.candidateProfile)
  const { data, isLoading } = useGetBadgesQuery()
  
  // const {loginUserPosts} = useSelector((state) => state.post?.loginUserPost?.detail)
  const [fakeLoading, setFakeLoading] = useState(true)
  const getName = JSON.parse(localStorage.getItem('loginUser'))
  // const[posts,setPosts] = useState([])
  // console.log(loginUserPosts)
  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
    dispatch(getCandidateProfile())
    dispatch(getAllProfiles())
    dispatch(loginUserPost())
    dispatch(getOrganizationProfile())
  }, [dispatch])
  
  return (
    <div className='py-6 px-10 max-sm:px-4 transition-all w-full'>
      <div className='flex flex-col transition-all'>
        <div className='relative w-full z-[0] transition-all'>
          <div className='w-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{ height: "300px", width: '100%', border: '2px solid #fff' }} /> :
              <img src={`${!(detail?.banner_url) ? './aura-dark.jpg' : detail?.banner_url}`}
                className='bg-center bg-no-repeat bg-cover rounded-md w-full max-h-[300px] object-cover' />
            }
          </div>

          <div className='absolute left-24 max-sm:left-20 z-[100] custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{ width: '8rem', height: '8rem', borderRadius: '0.375rem', border: '2px solid #fff' }} /> : 
             <img src={`${!(detail?.avatar_url) ? './avatar.jpg' : detail?.avatar_url}`} className='w-32 h-32 rounded-md object-cover' />
            }
          </div>

          <div className='flex w-[320px] absolute -right-32 z-[100] custom-position-center max-sm:hidden bg-[#FFF] rounded-md border border-dashed border-[#f6f6f7] shadow-2xl hover:border-[#383838] transition-all'>
            <div className='flex flex-col px-3 py-2 w-full'>
              <div className='text-base font-semibold'>Bio</div>
              <div className='text-sm w-full'>{fakeLoading ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} count={3} />
                : !(detail?.bio) ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} count={3} /> : detail?.bio}</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 mt-20 ml-7 max-sm:ml-0'>
          <div className='flex text-2xl font-semibold'>
            {fakeLoading ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : !(detail?.name) ? getName?.data?.name : detail?.name}
          </div>
          <div className='flex w-96 flex-wrap gap-3 '>
            {detail?.skill ? detail?.skill.map((item, i) => (
              <div className='bg-[#FFF] rounded-md border-2 border-dashed shadow px-2 py-1 text-sm border-[#383838]' key={i}>
                {fakeLoading ? <Skeleton width={80} style={{ border: "3px solid #fff" }} /> : !(item?.skill) ? <Skeleton width={80} style={{ border: "3px solid #fff" }} /> : item?.skill}
              </div>
            )) :
              <>
                <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                  <Skeleton width={80} />
                </div>
                <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                  <Skeleton width={80} />
                </div>
                <div className='bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                  <Skeleton width={80} />
                </div>
              </>
            }

          </div>
          {data?.data?.length > 0 && (
            <div className='flex flex-col gap-2 w-fit'>
              <div className='font-extrabold'>Badges</div>
              <div className="flex flex-wrap gap-2">
                {data?.data?.map((item, index) => (
                  <div className='bg-[#ddd] rounded-lg px-3 py-1 border flex flex-col items-center text-xs' key={index}>
                    {isLoading ? <Skeleton width={80} style={{ border: "3px solid #fff" }} /> :
                    <><span className='font-bold'>{item?.skillTypes[0]?.skill}</span>
                    <span>{item.badge}</span></>
                    }
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='flex gap-x-3 relative z-[100] w-full'>
          <div className='flex w-full mt-5 ml-7 max-sm:ml-0'>
            <div className='flex flex-col gap-y-2 w-[650px] max-sm:!w-full'>
              <CandidatePost />
            </div>
          </div>

          <div className='flex flex-col w-full max-sm:hidden'>

            <div className='flex w-full mt-5 bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] hover:border-[#383838] shadow'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>About</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : !(detail?.about) ?
                  <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : detail?.about}</div>
              </div>
            </div>

            <div className='flex w-full mt-5 bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] hover:border-[#383838] shadow relative z-[100]'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>Education</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> :
                  !(detail?.education) ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : detail?.education}</div>
              </div>
            </div>

            <div className='flex w-full mt-5 bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] hover:border-[#383838] shadow relative z-[100]'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>Experience</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> :
                  !(detail?.experience) ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : detail?.experience}</div>
              </div>
            </div>

            <div className='flex flex-col px-3 py-2 gap-y-2 mt-5 bg-[#FFF] rounded-md w-full h-auto border-2 border-dashed border-[#f6f6f7] shadow hover:border-[#383838]'>
              <div className=' text-1xl font-semibold'>Social Links</div>
              {detail?.socialLink ? detail?.socialLink.map((item, i) => (
                <a href={`${item?.link}`} className='flex items-center gap-x-2' key={i}>
                  <div>
                    <Link2 size={20} />
                  </div>
                  <div className='w-full'>
                    {fakeLoading ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} /> : !(item?.link) ? <Skeleton width={"100%"} />
                      : item?.link}
                  </div>
                </a>
              )) :
                <div className='flex items-center gap-x-2 w-full'>
                  <div><Link2 size={20} /></div>
                  <div className='w-full'><Skeleton count={3} width={"100%"} style={{ border: "3px solid #fff" }} /></div>
                </div>}
            </div>
          </div>

        </div>




      </div>
    </div>
  )
}

export default Profile
