import React from 'react'
import CreatePost from '../components/homeComponents/CreatePost'
import Posts from '../components/homeComponents/Posts'
import ProfileDetail from '../components/homeComponents/ProfileDetail'
import ReleventUser from '../components/homeComponents/ReleventUser'
const Home = () => {
  return (
    <div className='flex gap-x-7'>
        <div className='py-6 pl-16 max-sm:pl-8 w-[50rem] flex flex-col gap-y-2 relative z-[100]'>
            <CreatePost/>
            <Posts/>
            <Posts/>
            <Posts/>
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
