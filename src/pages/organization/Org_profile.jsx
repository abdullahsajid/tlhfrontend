import React,{useState,useEffect} from 'react'
import { Link2,Building2,MapPin,Mails} from 'lucide-react'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
const Org_profile = () => {
  const {data} = useSelector((state) => state.getOrgProfile.getOp)
  const userData = useSelector((state) => state.candidateProfile.candidateProfile)
  const[fakeLoading,setFakeLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(()=> {
      setFakeLoading(false)
    },2000)
  },[])

  return (
    <div className='py-6 px-10 transition-all w-full'>
      <div className='flex flex-col transition-all'>
        <div className='relative w-full z-[-1] transition-all'>
          <div className='w-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{height:"300px",width:'100%',border:'2px solid #fff'}}/> : data?.banner_url ? 
            <img src={`${data?.banner_url}`}
            className='bg-center bg-no-repeat bg-cover rounded-md w-full min-h-[300px] max-h-[300px] object-cover'/> : <Skeleton style={{height:"300px",width:'100%',border:'2px solid #fff'}}/>}

          </div>
          <div className='absolute left-24 z-[100] custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            {fakeLoading ? <Skeleton style={{width:'8rem',height:'8rem',borderRadius:'0.375rem',border:'2px solid #fff'}}/> : data?.avatar_url ?
            <img src={`${data?.avatar_url}`} className='w-32 h-32 rounded-md object-cover' />
            : <Skeleton style={{width:'8rem',height:'8rem',borderRadius:'0.375rem',border:'2px solid #fff'}}/> }
          </div>
          <div className='flex max-w-xs w-[320px] absolute -right-32 z-[100] custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow-2xl hover:custom-border transition-all'>
            <div className='flex flex-col px-3 py-2 w-full'>
                <div className='text-[10px] pb-0 mb-0'>Created by</div>
                <div className='py-2 pt-0 flex gap-x-2'>
                    <div className='min-w-[2.5rem] min-h-[2.5rem] mt-1'>
                      {fakeLoading ? <Skeleton style={{width:'2.5rem',height:'2.5rem',borderRadius:'0.375rem',border:"3px solid #fff"}}/> : userData?.data?.avatar_url ?
                      <img src={`${userData?.data?.avatar_url && userData?.data?.avatar_url}`}
                      className='w-12 h-10 rounded-lg bg-center bg-no-repeat bg-cover' />: <Skeleton style={{width:'2.5rem',height:'2.5rem',borderRadius:'0.375rem',border:"3px solid #fff"}}/>}</div>
                    <div className='flex flex-col w-full'>
                        <div>{fakeLoading ? <Skeleton width={100} style={{border:"3px solid #fff"}}/> : userData?.data?.name ? userData?.data?.name : <Skeleton width={100} style={{border:"3px solid #fff"}}/>}</div>
                        <div className='text-xs'>{fakeLoading ? <Skeleton width={"100%"} style={{border:"3px solid #fff"}} />  : userData?.data?.bio ? userData?.data?.bio :<Skeleton width={"100%"} style={{border:"3px solid #fff"}} />}</div>
                    </div>
                </div>
              <div className='text-lg font-semibold'>Bio</div>
              <div className='text-sm w-full'>{fakeLoading ? <Skeleton width={"100%"} style={{border:"3px solid #fff"}} count={3}/> : data?.description ? data?.description : <Skeleton width={"100%"} style={{border:"3px solid #fff"}} count={3}/>}</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 mt-20 ml-7'>
          <div className='flex text-2xl font-semibold'>
            {fakeLoading ? <Skeleton width={200}/> : data?.org_name ? data?.org_name : <Skeleton width={200}/> }
          </div>
          <div className='flex w-96 flex-wrap gap-3 '>
            <div className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><Building2 size={15} /></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{border:'2px solid #fff'}}/> : data?.industry ? data?.industry : <Skeleton width={200} style={{border:'2px solid #fff'}}/>}</span>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><MapPin size={15} /></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{border:'2px solid #fff'}}/>  : data?.location ? data?.location : <Skeleton width={200} style={{border:'2px solid #fff'}}/> }</span>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><Mails size={15} /></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{border:'2px solid #fff'}}/> : data?.org_email ? data?.org_email : <Skeleton width={200} style={{border:'2px solid #fff'}}/> }</span>
            </div>
            <a href={`${data?.org_website ? data?.org_website : "#"}`} className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><Link2 size={15}/></span>
                <span>{fakeLoading ? <Skeleton width={200} style={{border:'2px solid #fff'}}/> : data?.org_website ? data?.org_website : <Skeleton width={200} style={{border:'2px solid #fff'}}/> }</span>
            </a>
         
          </div>
        </div>

        <div className='flex gap-x-3 w-full'>
          <div className='flex  w-full mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow relative z-[100]'>
            <div className='flex flex-col gap-y-2 px-3 py-2 w-full'>
              <div className='text-base font-semibold'>About</div>
              <div>{fakeLoading ? <Skeleton count={3} width={"100%"} style={{border:'2px solid #fff'}}/>  : data?.about ? data?.about : <Skeleton width={"100%"} count={3} style={{border:'2px solid #fff'}}/>}</div>
            </div>
          </div>

          <div className='flex flex-col px-3 py-2 gap-y-2 mt-5 h-full bg-[#f6f6f7] rounded-md w-3/5 border border-solid border-[#f6f6f7] shadow hover:custom-border relative z-[100]'>
            <div className=' text-1xl font-semibold'>Social Links</div>
            {data?.socialLinks ? data?.socialLinks.map((item)=>(
              <a href={`${item?.link}`} className='flex items-center gap-x-2'>
                <div>
                  <Link2 size={20}/>
                </div>
                <div className='w-full'>
                  {fakeLoading ? <Skeleton width={"100%"} style={{border:"3px solid #fff"}}/> : item?.link ? item?.link : <Skeleton width={"100%"} style={{border:"3px solid #fff"}}/> } 
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
  )
}

export default Org_profile
