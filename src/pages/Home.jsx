import React, { useEffect } from 'react'
import CreatePost from '../components/homeComponents/CreatePost'
import Posts from '../components/homeComponents/Posts'
import ProfileDetail from '../components/homeComponents/ProfileDetail'
import ReleventUser from '../components/homeComponents/ReleventUser'
import { useDispatch } from "react-redux";
import { getCandidateProfile } from '../features/getProfile/getCpService'
import { getOrganizationProfile } from '../features/getProfile/getOrgpService'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCandidateProfile());
    dispatch(getOrganizationProfile());
  }, [dispatch]);
  return (
    <div className='flex gap-x-7'>
        <div className='py-6 pl-16 max-sm:pl-8 w-[50rem] flex flex-col gap-y-2 relative z-[100]'>
            <CreatePost/>
            <Posts link={"https://avatars.githubusercontent.com/u/96902562?v=4"} name={'Muhammad Umair'} postImg={'https://www.veeforu.com/wp-content/uploads/2023/07/youtube-banner-background-futuristic-2048x1152-1-1024x576.jpg'}/>
            <Posts link={"https://avatars.githubusercontent.com/u/77003390?v=4"} name={'Abdullah Sajid'} postImg={'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg'}/>
            
        </div>
        <div className='relative'>
          <div className='w-80 pt-6 flex flex-col gap-y-4 sticky top-14 z-10'>
            <ProfileDetail/>
            <ReleventUser/>
          </div>
        </div>
    </div>
  )
}

export default Home
