import React, { useEffect,useState } from 'react'
import { loginUserPost } from '../../features/candidatePost/getAuthPost/loginUserPostService'
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../homeComponents/Posts'
import Skeleton from 'react-loading-skeleton'
const CandidatePost = () => {
    const dispatch = useDispatch()
    const[posts,setPosts] = useState([])
    const {data} = useSelector((state) => state.candidateProfile?.candidateProfile)
    const currentPost = useSelector((state) => state.post?.loginUserPost?.data)

    useEffect(() => {
      const fetchData = async () => {
        await dispatch(loginUserPost());
      };
      fetchData(); 
    }, [dispatch]);
  
    useEffect(() => {
      
      if (currentPost?.loginUserPosts) {
        setPosts(currentPost?.loginUserPosts?.slice().reverse());
      }
    }, [currentPost]);

  return (
    <>
      {currentPost?.loginUserPosts ? posts.map((item,i) => (
                <Posts 
                  key={i}
                  postId={item?.id}
                  link={data?.avatar_url} 
                  name={data?.name} postImg={item?.postImg} content={item?.content}
                  time={item?.createdAt} data={data} comment={item?.comments}
                  like={item?.likes}
                />
              )) :  <div className='flex flex-col text-lg font-medium bg-[#f6f6f7] p-4 rounded-md gap-y-3 border border-solid border-[#f6f6f7] 
              shadow-md w-full hover:custom-border transition-all'>
                No Posts
                <Skeleton width={"100%"} count={5}/>
                </div>}
    </>
  )
}

export default CandidatePost
