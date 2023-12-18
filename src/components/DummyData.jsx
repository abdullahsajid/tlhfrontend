import React from 'react'
import Posts from './homeComponents/Posts'
const Dummy = () => {
  return (
    <div className='flex gap-x-7'>
        <div className='py-6 pl-16 max-sm:pl-8 w-[50rem] flex flex-col gap-y-2 relative z-[100]'>
            <Posts link={"https://avatars.githubusercontent.com/u/77003390?v=4"} name={'Abdullah Sajid'} postImg={'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg'} />
            <Posts link={"https://avatars.githubusercontent.com/u/77003390?v=4"} name={'Umair'} postImg={'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg'}/>

        </div>
        {/* <div className='relative'>
          <div className='w-80 pt-6 flex flex-col gap-y-4 sticky top-14 z-10'>
            <ProfileDetail/>
            <ReleventUser/>
          </div>
        </div> */}
    </div>
  )
}

export default Dummy
