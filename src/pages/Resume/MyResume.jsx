import React, { lazy } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllResourceQuery } from 'src/features/Resume/getResume/getRes'
const Header = lazy(() => import('../../components/Resume/myresume/Header'))
const Skills = lazy(() => import('../../components/Resume/myresume/Skills'))
const Experience = lazy(() => import('../../components/Resume/myresume/Experience'))
const Education = lazy(() => import('../../components/Resume/myresume/Education'))
const Projects = lazy(() => import('../../components/Resume/myresume/Projects'))
const Certificate = lazy(() => import('../../components/Resume/myresume/Certificate'))
const Languages = lazy(() => import('../../components/Resume/myresume/Languages'))
const Interests = lazy(() => import('../../components/Resume/myresume/Interests'))

const MyResume = () => {
  const { name } = useParams()
  const { data, isLoading, isError } = useGetAllResourceQuery({ name })
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }


  return (
    <div className='container mx-auto relative p-16'>
      <div className='mx-auto max-w-2xl'>
        <Header data={data?.data?.[0]} />
        <Skills data={data?.data?.[0]} />
        <Experience data={data?.data?.[0]} />
        <Education data={data?.data?.[0]} />
        <Projects data={data?.data?.[0]} />
        <Certificate data={data?.data?.[0]} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          <Languages data={data?.data?.[0]} />
          <Interests data={data?.data?.[0]} />
        </div>
      </div>
    </div>
  )
}

export default MyResume
