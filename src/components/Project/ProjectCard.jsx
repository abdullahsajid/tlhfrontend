import React from 'react'
import * as moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { Banknote,MapPin,LaptopMinimal} from 'lucide-react';
import { Button } from 'src/components/ui/button';
import {setUpdateJobPostPanel,setJobPostedData} from 'src/features/skillAssessment/AssessmentSlice'
import { useDispatch } from 'react-redux';
import { useDeleteProjectMutation } from 'src/features/Projects/getProjectsApis';
import { toast } from 'react-hot-toast';


const ProjectCard = ({details,render,colorList,colorIndex}) => {
    const navigator = useNavigate()
    const dispatch = useDispatch()
    const [deleteProject] = useDeleteProjectMutation() 
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    const handlerNavigator = () => {
        navigator(`/projects/${details.project_id}`)
    }
    
    const handlerUpdate = () => {
        dispatch(setJobPostedData(details))
        dispatch(setUpdateJobPostPanel(true))
    }
    const handlerDelete = async () => {
        let projectID = {id:[details.project_id]}
        const {data} = await deleteProject(projectID)
        if(!data.success || data.success === false){
            toast.error("something went wrong try again!", {
                style: {
                  backgroundColor: '#f6f6f7',
                  border: '3px solid #fff',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
        }
    }
  return (
    <div className='flex flex-col gap-2 mt-5 border-2 border-[#D0D0D0] p-3 rounded-xl shadow-md'>
        <div className={`flex flex-col gap-y-2 p-2 rounded-xl`} style={{backgroundColor:randomColor}}>
            <div className="bg-[#fff] w-max p-2 rounded-lg font-bold border-2 border-[#D0D0D0]">
                <span className='text-[14px]'>{moment(details.createdAt)?.format('MMMM Do YYYY')}</span>
            </div>
            <div className='flex flex-col'>
                <Link to={`/projects/${details.project_id}`} className='text-[24px] hover:underline font-bold'>{details.project_title}</Link>
            </div>
            {render && (<div className='two-line-ellipsis'>
                {details.project_description}
            </div>)}
            {render && (
                <div className='grid grid-cols-3 my-3'>
                    <div className='flex flex-row gap-2'>
                        <Banknote/>
                        <span>${details?.project_budget}</span>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <MapPin/>
                    <span>{details?.project_type}</span> 
                    </div>
                    <div className='flex flex-row gap-2'>
                        <LaptopMinimal/>
                        <span>{details?.project_status}</span>
                    </div>
                </div>
            )}
            <div className='flex gap-3 flex-wrap'>
                {details.project_skills.map((items, i) => (
                    <div key={i} 
                        className='border-[#333] border flex items-center justify-center px-3 py-1 rounded-lg text-xs font-bold'>
                        {items.item}
                    </div>
                ))}
            </div>
        </div>
        <hr className='border border-[#D0D0D0] mt-3' />
        {!render && (<div className='flex justify-between items-center px-2 mt-3'>
            <div className='font-bold text-[17px]'>${details?.project_budget}</div>
            <Button className="h-9 rounded-xl" onClick={() => handlerNavigator()}>Details</Button>
        </div>)}
        {render && (
            <div className='flex flex-row gap-2 mt-2'>
                <Button className="px-3 !py-1 h-9" onClick={()=>handlerUpdate()}>Update</Button>
                <Button className="px-3 !py-1 h-9" variant="destructive" onClick={() => handlerDelete()}>Delete</Button>
            </div>
        )}
    </div>
  )
}

export default ProjectCard
