'use strict'
import React, { useEffect } from 'react'
import CreatePost from '../components/homeComponents/CreatePost'
import Posts from '../components/homeComponents/Posts'
import ProfileDetail from '../components/homeComponents/ProfileDetail'
import ReleventUser from '../components/homeComponents/ReleventUser'
import { useDispatch, useSelector } from "react-redux";
import { getCandidateProfile } from '../features/getProfile/getCpService'
import { getOrganizationProfile } from '../features/getProfile/getOrgpService'
import { getAllProfiles } from '../features/CandidateProfile/getProfiles/UsersProfileService'
import { loginUserPost } from '../features/candidatePost/getAuthPost/loginUserPostService'
import { useRecommendPostsQuery } from 'src/features/candidatePost/recommendation/recommendApis'
import { summonAllComments } from 'src/features/Comments/candidateComment/getComments/getCommentService'
import Loader from 'src/components/Loader/Loader'

const Home = () => {
  const userSkill = useSelector((state) => state.candidateProfile?.candidateProfile?.data?.skill)
  const userProfile = useSelector((state) => state.userProfiles.profiles.data)
  const allComment = useSelector((state) => state.getComments.allComments.data)
  let skill
  if(userSkill !== null){
    skill = userSkill?.map((val) => val.skill)
  }else if(userSkill == null){
    skill = ['react js','php','git']
  }
  // console.log(userSkill);
  const {data,isLoading} = useRecommendPostsQuery(skill)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCandidateProfile());
    dispatch(getOrganizationProfile());
    dispatch(getAllProfiles())
    dispatch(loginUserPost())
    dispatch(summonAllComments())
  }, [dispatch]);
  // console.log(data);


  return (
    <>
      <div className='flex gap-x-7'>
        <div className='py-6 pl-16 max-sm:pl-8 w-[50rem] flex flex-col gap-y-2 relative z-[100]'>
          <CreatePost />
          {isLoading || (data && data) == undefined ? <div className='w-full h-full flex items-center justify-center'><Loader/></div> : 
            data?.map((item,index) => {
              const profile = userProfile?.find((val) => val?.user_id === item?.userPost_id) 
              const comments = allComment?.filter((val) => val?.IdPost === item?.post_id) 
              // console.log(comments);
              return(
                <Posts link={profile?.avatar_url}
                      name={profile?.name} 
                      postImg={item?.url} 
                      content={item?.content}
                      time={item?.createdAt}
                      postId={item?.post_id}
                      data={profile}
                      comment={comments}
                      key={index}
                />
              )
            })}
        </div>
        <div className='relative'>
          <div className='w-80 pt-6 flex flex-col gap-y-4 sticky top-14 z-10'>
            <ProfileDetail />
            {/* <ReleventUser /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
