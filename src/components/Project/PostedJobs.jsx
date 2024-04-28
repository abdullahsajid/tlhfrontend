import React from 'react'
import { useSummonAllProjectsByUserQuery } from 'src/features/Projects/getProjectsApis'
import Loader from '../../components/Loader/Loader'
import ProjectCard from './ProjectCard'

const PostedJobs = () => {
    const {data,isLoading} = useSummonAllProjectsByUserQuery()
  return (
    <div className='py-6 px-10 transition-all w-full'>
      <div className='flex flex-col'>
        <div className='font-bold text-[20px] mt-3'>Posted Jobs</div>
            {data?.data?.length === 0 ? <div className='text-center mt-5 font-semibold text-base'>No Jobs Posted Yet</div>:
              <div className='grid grid-cols-2 gap-2'>
                  {isLoading ? <div><Loader/></div> : 
                      data?.data?.map((items, i) => (
                          <ProjectCard key={i} render={true} details={items}/>
                      ))
                  }
              </div>
            }
      </div>
    </div>
  )
}

export default PostedJobs
