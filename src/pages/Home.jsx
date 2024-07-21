'use strict'
import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

const Home = () => {
  const [postData,setPostData] = useState([])
  const [page,setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const userSkill = useSelector((state) => state.candidateProfile?.candidateProfile?.data?.skill)
  const userProfile = useSelector((state) => state.userProfiles.profiles.data)
  const allComment = useSelector((state) => state.getComments.allComments.data)
  let skill
  if(userSkill !== null){
    skill = userSkill?.map((val) => val?.skill)
  }else if(userSkill == null){
    skill = ['reactjs','php','git','nodejs','laravel','azure','devops']
  }
  
  const appendUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/rpy/recommend?skills=${skill?.join(',')}&page=${page}`);
      const loadedData = response?.data;
      if (loadedData && loadedData?.posts) {
        setPostData((prev) => [...prev, ...loadedData?.posts]);
        if (loadedData?.posts?.length <= 0) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching recommended posts:", error);
    }
  };

  const handlerScroll = () => {
    const {scrollTop,clientHeight,scrollHeight} = document.documentElement
    if(scrollTop + clientHeight >= scrollHeight - 5 && hasMore && page <= 5){
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    appendUsers()
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll',handlerScroll)
    return () => {
      window.removeEventListener('scroll',handlerScroll)
    }
  },[hasMore])

  useEffect(() => {
    dispatch(getCandidateProfile());
    dispatch(getOrganizationProfile());
    dispatch(getAllProfiles())
    dispatch(loginUserPost())
    dispatch(summonAllComments())
  }, [dispatch]);


  return (
    <>
      <div className='flex gap-x-7'>
        <div className='py-6 pl-16  w-[50rem] flex flex-col gap-y-2 relative z-[100] max-sm:w-full max-sm:pl-0 max-sm:justify-center max-sm:items-center'>
          <CreatePost /> 
            {postData?.map((item,index) => {
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
              )})}
        </div>
        <div className='relative max-sm:hidden'>
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


{/* <InfiniteScroll 
//     dataLength={data?.posts?.length && data?.posts?.length}
//     next={fetchData}
//     hasMore={hasMore}
//     // loader={<Loader />}
//     className='flex flex-col gap-y-2'
// > */}

//  </InfiniteScroll>

  // const fetchData = () => {
  //   setPage((prev) => prev + 1);
  //   console.log("page",page);
  // };

    // console.log(userSkill);
  // const {data,isLoading} = useRecommendPostsQuery(skill)
  // // console.log(data);

  // useEffect(() => {
  //   setPostData(data?.posts)
  // },[data])


    // console.log(data);
  // console.log(data?.posts?.length);
  // console.log("page",page*4);

   {/* {isLoading || (data && data) == undefined ? <div className='w-full h-full flex items-center justify-center'><Loader/></div> : ( */}