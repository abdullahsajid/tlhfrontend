import React, { useState, useEffect } from 'react'
import { Link2, Building2, MapPin, Mails } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { SquarePlus } from 'lucide-react';
import { setJobPanel,setOrgPostToggle } from 'src/features/skillAssessment/AssessmentSlice';
import { Button } from 'src/components/ui/button';
import { Link, Outlet, useLocation } from 'react-router-dom';
import * as moment from 'moment';

const Org_profile = () => {
  const { data } = useSelector((state) => state.getOrgProfile.getOp)
  const userData = useSelector((state) => state.candidateProfile.candidateProfile)
  const [fakeLoading, setFakeLoading] = useState(true)
  const dispatch = useDispatch()
  const currentPath = useLocation().pathname
  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
  }, [])


  return (
    <div className='py-6 px-10 max-sm:px-2 transition-all w-full'>
      <div className='flex flex-col transition-all'>
        <div className='relative w-full z-[0] transition-all'>
          <div className='w-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{ height: "300px", width: '100%', border: '2px solid #fff' }} /> : !(data?.banner_url) ?
              <Skeleton style={{ height: "300px", width: '100%', border: '2px solid #fff' }} /> :
              <img src={`${data?.banner_url}`}
                className='bg-center bg-no-repeat bg-cover rounded-md w-full min-h-[300px] max-h-[300px] object-cover' />
            }
          </div>
          <div className='absolute left-24 max-sm:left-16 z-[100] custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{ width: '8rem', height: '8rem', borderRadius: '0.375rem', border: '2px solid #fff' }} /> : !(data?.avatar_url) ?
              <Skeleton style={{ width: '8rem', height: '8rem', borderRadius: '0.375rem', border: '2px solid #fff' }} /> :
              <img src={`${data?.avatar_url}`} className='w-32 h-32 max-sm:w-28 max-sm:h-28 rounded-md object-cover' />}
          </div>
          <div className='flex max-sm:hidden max-w-xs w-[320px] absolute -right-32 z-[100] custom-position-center bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] shadow-2xl hover:border-[#383838] transition-all'>
            <div className='flex flex-col px-3 py-2 w-full'>
              <div className='text-[10px] pb-0 mb-0'>Created by</div>
              <div className='py-2 pt-0 flex gap-x-2'>
                <div className='min-w-[2.5rem] min-h-[2.5rem] mt-1'>
                  {fakeLoading ? <Skeleton style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.375rem', border: "3px solid #fff" }} /> : !(userData?.data?.avatar_url) ?
                    <Skeleton style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.375rem', border: "3px solid #fff" }} />
                    : <img src={`${userData?.data?.avatar_url && userData?.data?.avatar_url}`}
                      className='w-12 h-10 rounded-lg bg-center bg-no-repeat bg-cover' />}
                </div>
                <div className='flex flex-col w-full'>
                  <div>{fakeLoading ? <Skeleton width={100} style={{ border: "3px solid #fff" }} /> : !(userData?.data?.name) ? <Skeleton width={100} style={{ border: "3px solid #fff" }} /> : userData?.data?.name}</div>
                  <div className='text-xs'>{fakeLoading ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} /> : !(userData?.data?.bio) ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} /> : userData?.data?.bio}</div>
                </div>
              </div>
              <div className='text-lg font-semibold'>Bio</div>
              <div className='text-sm w-full'>{fakeLoading ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} count={3} /> : !(data?.description) ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} count={3} /> : data?.description}</div>
            </div>
          </div>
        </div>

        <div className='flex justify-between mt-20 ml-7 max-sm:ml-0 max-sm:justify-start max-sm:flex-col'>
          <div className='flex flex-col gap-y-2'>
            <div className='flex text-2xl font-semibold'>
              {fakeLoading ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : !(data?.org_name) ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : data?.org_name}
            </div>
            <div className='text-[14px]'>
              <span className='font-bold'>Founded: </span>
              {fakeLoading ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : !(data?.founded_date) ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : ( <span className='font-bold'>{moment(data?.founded_date).format('YYYY')}</span>)}
            </div>
            <div className='flex w-96 flex-wrap gap-3 '>
              <div className='flex flex-row justify-center items-center gap-x-2 bg-[#FFF] rounded-md border border-dashed shadow px-2 py-1 text-sm border-[#383838]'>
                <span><Building2 size={15} /></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : !(data?.industry) ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : data?.industry}</span>
              </div>
              <div className='flex flex-row justify-center items-center gap-x-2 bg-[#FFF] rounded-md border border-dashed  shadow px-2 py-1 text-sm border-[#383838]'>
                <span><MapPin size={15} /></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : !(data?.location) ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : data?.location}</span>
              </div>
              <div className='flex flex-row justify-center items-center gap-x-2 bg-[#FFF] rounded-md border border-dashed shadow px-2 py-1 text-sm border-[#383838]'>
                <span><Mails size={15} /></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : !(data?.org_email) ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : data?.org_email}</span>
              </div>
              <a href={`${data?.org_website ? data?.org_website : "#"}`} className='flex flex-row justify-center items-center gap-x-2 relative z-[100] bg-[#FFF] rounded-md border border-dashed shadow px-2 py-1 text-sm border-[#383838]'>
                <span><Link2 size={15} /></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : !(data?.org_website) ? <Skeleton width={200} style={{ border: '2px solid #fff' }} /> : data?.org_website}</span>
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-2 items-end justify-end'>
            <Button className='flex gap-2 mt-5 mr-5 px-2 py-1 shadow-md cursor-pointer border rounded-md h-9'
              onClick={() => dispatch(setJobPanel(true))}>
              <SquarePlus size={'18px'}/> Create Job
            </Button>
            <Button className="flex px-2 py-1 mr-5 h-9 text-[14px] border rounded-md shadow-md"
              onClick={() => dispatch(setOrgPostToggle(true))}
            >
              Create Post
            </Button>
          </div>
        </div>

        <div className='flex gap-x-3 w-full max-sm:flex-col-reverse'>
          <div className='flex w-full mt-5 ml-7 max-sm:ml-0 bg-[#FFF] rounded-md border-2 border-[#f6f6f7] shadow relative z-[100]'>
            <div className='flex flex-col gap-y-2 px-3 py-2 w-[650px]'>
              <div className='text-base font-semibold'>Posts</div>
              <div className='flex flex-col gap-3'>
                {/* {fakeLoading && <Skeleton count={3} width={"100%"} style={{ border: '2px solid #fff' }} />} */}
                <div className='flex gap-2'>
                  <Link to={'/orgProfile/orgpost'} className={`border-2 px-3 py-0.5 rounded-md hover:bg-slate-900/10 
                  ${currentPath === '/orgProfile/orgpost' && "bg-slate-900/10"} `}>
                    Post
                  </Link>
                  <Link to={'/orgProfile/orgjob'} className={`border-2 px-3 py-0.5 rounded-md hover:bg-slate-900/10
                  ${currentPath === '/orgProfile/orgjob' && "bg-slate-900/10"}`}>
                    Jobs
                  </Link>
                </div>
                <div>
                  <Outlet/>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <div className='flex flex-col px-3 py-2 gap-y-2 mt-5 h-auto bg-[#FFF] rounded-md w-full border-2 border-dashed border-[#FFF] shadow hover:border-[#383838] relative z-[100]'>
              <div className=' text-1xl font-semibold'>Social Links</div>
              {data?.socialLinks ? data?.socialLinks.map((item, i) => (
                <a href={`${item?.link}`} className='flex items-center gap-x-2' key={i}>
                  <div>
                    <Link2 size={20} />
                  </div>
                  <div className='w-full'>
                    {fakeLoading ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} /> : !(item?.link) ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} /> : item?.link}
                  </div>
                </a>
              )) :
                <div className='flex items-center gap-x-2 w-full'>
                  <div><Link2 size={20} /></div>
                  <div className='w-full'><Skeleton count={3} width={"100%"} style={{ border: "3px solid #fff" }} /></div>
                </div>}
            </div>

            <div className='flex  w-full mt-5 bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] hover:border-[#383838] shadow relative z-[100]'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>About</div>
                <div>{fakeLoading ? <Skeleton count={3} width={"100%"} style={{ border: '2px solid #fff' }} /> : !(data?.about) ? <Skeleton width={"100%"} count={3} style={{ border: '2px solid #fff' }} /> : data?.about}</div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Org_profile
