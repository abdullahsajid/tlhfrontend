import React, { useEffect, useState } from 'react'
import { XSquare,X } from 'lucide-react'
import { Input } from '../../components/ui/input'
import { useCreateProjectMutation,useUpdateProjectMutation,useSummonProjectByIdQuery} from 'src/features/Projects/getProjectsApis'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {setUpdateJobPostPanel} from 'src/features/skillAssessment/AssessmentSlice'

const CreateProject = ({handler}) => {
    const dispatch = useDispatch()
    const [createProject] = useCreateProjectMutation()
    const [updateProject] = useUpdateProjectMutation()
    const updateData = useSelector((state) => state.assessment.jobPostDetails)
    //console.log(updateData);
    //const {data,isLoading} = useSummonProjectByIdQuery(updateData?.project_id)
    //console.log("data",data.data);
    const [project,setProjects] = useState({
        title:'',
        description:'',
        skills:[],
        budget:'',
        status:'',
        type:''
    })
    const [skill,setSkills] = useState('')
    const handleProjectChange = (name,value) => {
        setProjects((proj) => {
            return {
                ...proj,
                [name]:value
            }
        })
    }

    const handleSkills = () => {
        if(skill.trim !== ''){
            setProjects((proj) => {
                if(proj.skills.length === 0 || !proj.skills.find((item) => item.item === skill)){
                    return {
                        ...proj,
                        skills:[
                            ...proj.skills,
                            {item:skill}
                        ]
                    }
                }
                return proj
            })
            setSkills('')
        }
    }
    
    const handleDelete = (index) => {
        setProjects((proj) => {
            return {
                ...proj,
                skills:proj.skills.filter((item,i) => i !== index)
            }
        })
    }
    
    const handleCreateProject = async () => {
        const {data} = await createProject(project)
        if(data.success === true){
            dispatch(setUpdateJobPostPanel(false))
        }else{
            toast.error("something went wrong try again!", {
                style: {
                  backgroundColor: '#f6f6f7',
                  border: '3px solid #fff',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
        }
    }

    const handlerUpdate = async () => {
        project.id = updateData?.project_id
        const {data} = await updateProject(project)
        if(data.success === true){
            dispatch(setUpdateJobPostPanel(false))
        }else{
            toast.error("something went wrong try again!", {
                style: {
                  backgroundColor: '#f6f6f7',
                  border: '3px solid #fff',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
        }
    }

   useEffect(() => {
         if(updateData){
              setProjects({
                    title:updateData?.project_title,
                    description:updateData?.project_description,
                    skills:updateData?.project_skills,
                    budget:updateData?.project_budget,
                    status:updateData?.project_status,
                    type:updateData?.project_type
              })
         }
    },[updateData])
 
  return (
    <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
        <div className='w-[600px] h-[550px] max-h-[90vh] min-h-[400px] max-sm:w-full flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
            shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
            <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
                <div className='flex justify-between w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                    <div className='flex gap-x-2'>
                        <div onClick={() => dispatch(setUpdateJobPostPanel(false))} className='cursor-pointer'><XSquare /></div>
                        <div className='flex font-semibold'>{updateData ? "Update Project" : "Create Project"}</div>
                    </div>
                    <div className='flex justify-center items-center bg-slate-900 hover:bg-slate-900/90 px-2 py-1 rounded-md text-white cursor-pointer'
                        onClick={updateData ? handlerUpdate : handleCreateProject}>
                        {updateData ? "Update" : "Create"}
                    </div>
                </div>
                <div className='flex flex-col gap-y-3 px-5 py-3'>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Project Title</div>
                        <Input
                            className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                            placeholder='Project Title'
                            value={project?.title ? project?.title : ''}
                            onChange={(e) => handleProjectChange('title',e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Project Description</div>
                        <Input
                            className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                            placeholder='Project description'
                            value={project?.description ? project?.description : ''}
                            onChange={(e) => handleProjectChange('description',e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Expertise</div>
                        <Input
                            className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                            placeholder='Expertise'
                            value={skill ? skill : ''}
                            onChange={(e) => setSkills(e.target.value)}
                            onKeyPress={(e) => {
                                if(e.key === 'Enter'){
                                    e.preventDefault()
                                    handleSkills()
                                }
                            }}
                        />
                        <div className='mt-3 flex flex-wrap w-full gap-2'>
                            {project?.skills?.map((items,index) => (
                            <div className='border-2 px-3 py-1 rounded-md flex items-center gap-1' key={index}>
                                <span>{items.item}</span>
                                <X 
                                    size={'15px'}
                                    className='hover:bg-[rgba(247,249,249,0.1)] hover:rounded-md cursor-pointer'
                                    onClick={() => handleDelete(index)}
                                />
                            </div>))}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='font-bold'>Budget</div>
                            <Input
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Budget'
                                value={project?.budget ? project?.budget : ''}
                                onChange={(e) => handleProjectChange('budget',e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='font-bold'>Status</div>
                            <Input
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Status'
                                value={project?.status ? project?.status : ''}
                                onChange={(e) => handleProjectChange('status',e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='font-bold'>Type</div>
                            <Input
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Type'
                                value={project?.type ? project?.type : ''}
                                onChange={(e) => handleProjectChange('type',e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateProject
