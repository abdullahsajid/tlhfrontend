import React, { lazy } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllResourceQuery } from 'src/features/Resume/getResume/getRes'
const Header = lazy(() => import('../../components/Resume/myresume/Header'))
const Skills = lazy(() => import('../../components/Resume/myresume/Skills'))
const Experience = lazy(() => import('../../components/Resume/myresume/Experience'))
const Education = lazy(() => import('../../components/Resume/myresume/Education'))
const Projects = lazy(() => import('../../components/Resume/myresume/Projects'))
const Certificate = lazy(() => import('../../components/Resume/myresume/Certificate'))
const Language = lazy(() => import('../../components/Resume/myresume/Languages'))
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


  if (data?.data?.[0]?.resumeTemplate?.[0].template_name === 'minimal') {
    return (
      <div className='relative p-16 bg-resume max-sm:p-8'>
        <div className='mx-auto max-w-3xl border-2 p-3 shadow-lg rounded-md bg-tone'>
          <Header data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          <Skills data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          <Experience data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          <Education data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          <Projects data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          <Certificate data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <Language data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
            <Interests data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          </div>
        </div>
      </div>
    )
  } else if (data?.data?.[0]?.resumeTemplate?.[0].template_name === 'IT') {
    return (
      <div className='relative p-16 max-sm:p-8'>
        <div className='mx-auto max-w-5xl border-4 rounded-lg p-3'>
          <Header data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
          <div className='flex max-sm:flex-col gap-2 mt-3 justify-between'>
            <div className='flex flex-col flex-1 w-[666px]'>
              <Experience data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
              <Education data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
              <Certificate data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
            </div>
            {(data?.data?.[0]?.resSkill?.[0]?.skills?.length > 0 ||
              data?.data?.[0]?.resProj ||
              data?.data?.[0]?.resLanguages?.[0]?.lang?.length ||
              data?.data?.[0]?.resInterests?.[0]?.interest?.length) &&
              (<div className='flex flex-col bg-[#2D343C] p-5 gap-3 rounded-md w-[230px] h-full'>
                <Skills data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
                <Projects data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
                <Language data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
                <Interests data={data?.data?.[0]} templateSty={data?.data?.[0]?.resumeTemplate?.[0].template_name} />
              </div>)
            }
          </div>
        </div>
      </div>
    )
  } else {
    return <div className='flex justify-center items-center h-screen font-mono text-lg font-extrabold'>Reach out later or may be you haven't selected a template!</div>
  }
}

export default MyResume
