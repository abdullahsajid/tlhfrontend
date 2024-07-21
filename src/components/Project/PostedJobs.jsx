import React from 'react'
import { useSummonAllProjectsByUserQuery } from 'src/features/Projects/getProjectsApis'
import Loader from '../../components/Loader/Loader'
import ProjectCard from './ProjectCard'

const PostedJobs = () => {
    const {data,isLoading} = useSummonAllProjectsByUserQuery()
    const colorList = ['#e3dbfa','#fbe2f4','#ffe1cc','#d4f6ed']
  return (
    <div className='py-6 px-10 max-sm:px-4 transition-all w-full'>
      <div className='flex flex-col'>
        <div className='font-bold text-[20px] mt-3'>Posted Jobs</div>
            {data?.data?.length === 0 ? <div className='text-center mt-5 font-semibold text-base'>No Jobs Posted Yet</div>:
              <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
                  {isLoading ? <div><Loader/></div> : 
                      data?.data?.map((items, i) => (
                          <ProjectCard key={i} render={true} details={items} colorList={colorList}/>
                      ))
                  }
              </div>
            }
      </div>
    </div>
  )
}

export default PostedJobs