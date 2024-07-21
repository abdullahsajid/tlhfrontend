import React from 'react'
import OrgCommentCount from './OrgCommentCount';
import OrgLike from './OrgLike'
import * as moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Posts = ({details,time,id,content}) => {
    const navigate = useNavigate()
     const handlerNavigator = () => {
        navigate(`/orgposts/${id}`,{state:{details}})
    }
  return (
    <div className='flex flex-col bg-[#FFF] p-4 rounded-md gap-y-3 border-2 border-[#D0D0D0] 
        shadow-md w-full transition-all'>
            <div className='flex items-center'>
                <div>
                    <img src={`${!(details?.avatar_url)? 'https://tlhfrontend.vercel.app/avatar-org.jpg' : details?.avatar_url}`} className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
                </div>
                <div className='flex flex-col ml-2'>
                    <div className='text-sm font-bold'>{details?.org_name}</div>
                    <div className='text-sm font-semibold'>{time && moment(time)?.fromNow()}</div>
                </div>
            </div>
                <div className='flex flex-col gap-y-2 cursor-pointer' onClick={handlerNavigator}>
                    <div className='flex mb-2'>
                        {content ? content : ''}
                    </div>
                    <div className='flex w-full'>
                    {false &&
                        <img src={`#`}
                        className='bg-center bg-no-repeat bg-cover rounded-md object-contain w-full h-[350px]' />
                    }
                    </div>
                </div>

                <div className='flex items-center gap-x-2'>
                    {/* <Like postId={postId} like={like} /> */}
                    <OrgLike id={id}/>
                    <OrgCommentCount id={id}/>
                </div>
    </div>
  )
}

export default Posts
