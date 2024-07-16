import React from 'react'
import OrgSpecificPost from './OrgSpecificPost'
import OrgCommentContainer from './OrgCommentContainer'
import { useLocation, useParams } from 'react-router-dom'
// import UserProfile from 'src/pages/posts/UserProfile'
const OrgPostContainer = () => {
    const params = useParams()
    const location = useLocation()
  return (
    <div className='flex gap-x-7'>
      <div className='py-6 pl-16 max-sm:pl-4 max-sm:px-4 w-[50rem] max-sm:w-full flex flex-col gap-y-2 relative z-[100]'>
            <OrgSpecificPost postId={params.id} />
            <OrgCommentContainer id={params.id}/>
      </div>
      <div className='relative max-sm:hidden'>
          <div className='w-80 pt-6 flex flex-col gap-y-4 sticky top-14 z-10'>
            {/* <UserProfile data={location.state.details}/> */}
          </div>
      </div>
    </div>
  )
}

export default OrgPostContainer
