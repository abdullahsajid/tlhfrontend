import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { Link2 } from 'lucide-react'
import { useGetUserProfileDetailsQuery } from 'src/features/Search/searchApis'
const SearchProfile = () => {
    const param = useParams()
    const [fakeLoading, setFakeLoading] = useState(true)
    const {data} = useGetUserProfileDetailsQuery({id:param.id})

    useEffect(() => {
        setTimeout(() => {
          setFakeLoading(false)
        }, 2000)
      }, [])
  return (
<div className='py-6 px-10 transition-all w-full'>
      <div className='flex flex-col transition-all'>
        <div className='relative w-full z-[0] transition-all'>
          <div className='w-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{ height: "300px", width: '100%', border: '2px solid #fff' }} /> : !(data?.data?.banner_url) ?
              <Skeleton style={{ height: "300px", width: '100%', border: '2px solid #fff' }} /> :
              <img src={`${data?.data?.banner_url}`}
                className='bg-center bg-no-repeat bg-cover rounded-md w-full max-h-[300px] object-cover' />
            }
          </div>

          <div className='absolute left-24 z-[100] custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{ width: '8rem', height: '8rem', borderRadius: '0.375rem', border: '2px solid #fff' }} /> : !(data?.data?.avatar_url) ?
              <Skeleton style={{ width: '8rem', height: '8rem', borderRadius: '0.375rem', border: '2px solid #fff' }} />
              : <img src={`${data?.data?.avatar_url}`} className='w-32 h-32 rounded-md object-cover' />
            }
          </div>

          {/* <div className='flex w-[320px] absolute -right-32 z-[100] custom-position-center bg-[#FFF] rounded-md border border-dashed border-[#f6f6f7] shadow-2xl hover:border-[#383838] transition-all'>
            <div className='flex flex-col px-3 py-2 w-full'>
              <div className='text-base font-semibold'>Bio</div>
              <div className='text-sm w-full'>{fakeLoading ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} count={3} />
                : !(data?.data?.bio) ? <Skeleton width={"100%"} style={{ border: "3px solid #fff" }} count={3} /> : data?.data?.bio}</div>
            </div>
          </div> */}
        </div>

        <div className='flex flex-col gap-y-2 mt-20 ml-7'>
          <div className='flex text-2xl font-semibold'>
            {fakeLoading ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : !(data?.data?.name) ? <Skeleton width={200} style={{ border: "3px solid #fff" }} /> : data?.data?.name}
          </div>
          <div className='flex w-96 flex-wrap gap-3 '>
            {data?.data?.skill ? data?.data?.skill.map((item, i) => (
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
          {/* {data?.data?.length > 0 && (
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
          )} */}
        </div>

        <div className='flex gap-x-3 relative z-[100] w-full'>
          <div className='flex flex-col w-full'>
            <div className='flex w-full mt-5 bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] hover:border-[#383838] shadow'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>About</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : !(data?.data?.about) ?
                  <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : data?.data?.about}</div>
              </div>
            </div>

            <div className='flex w-full mt-5 bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] hover:border-[#383838] shadow relative z-[100]'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>Education</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> :
                  !(data?.data?.education) ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : data?.data?.education}</div>
              </div>
            </div>

            <div className='flex w-full mt-5 bg-[#FFF] rounded-md border-2 border-dashed border-[#f6f6f7] hover:border-[#383838] shadow relative z-[100]'>
              <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
                <div className='text-base font-semibold'>Experience</div>
                <div>{fakeLoading ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> :
                  !(data?.data?.experience) ? <Skeleton count={3} style={{ width: '100%', border: '3px solid #fff' }} /> : data?.data?.experience}</div>
              </div>
            </div>

            <div className='flex flex-col px-3 py-2 gap-y-2 mt-5 bg-[#FFF] rounded-md w-full h-auto border-2 border-dashed border-[#f6f6f7] shadow hover:border-[#383838]'>
              <div className=' text-1xl font-semibold'>Social Links</div>
              {data?.data?.socialLink ? data?.data?.socialLink.map((item, i) => (
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

export default SearchProfile
