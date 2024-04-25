import React, { lazy } from 'react'
import { useSummonAllProjectsQuery } from 'src/features/Projects/getProjectsApis'
import Loader from '../../components/Loader/Loader'
const ProjectCard = lazy(() => import('src/components/Project/ProjectCard'))

const SmallProject = () => {
    const { data,isLoading } = useSummonAllProjectsQuery()
    console.log(data);
  return (
    <div className='py-6 px-10 transition-all w-full'>
        <div className='text-[25px] font-bold mt-3'>Projects</div>
        <div className='grid grid-cols-2 gap-2'>
            {isLoading ? <div><Loader/></div> : 
                data?.data?.map((items, i) => (
                    <ProjectCard key={i} details={items}/>
                ))
            }
        </div>
    </div>
  )
}

export default SmallProject
