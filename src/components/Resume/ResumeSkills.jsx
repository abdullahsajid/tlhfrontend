import React, { useEffect, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { Button } from 'src/components/ui/button'
import { BadgePlus, X } from 'lucide-react'
import { useGetResSkillQuery, useCreateSkillMutation, useUpdateSkillsMutation } from 'src/features/Resume/ResumeSkill/ResSkillApis'
import toast from 'react-hot-toast'
import Loader from 'src/components/Loader/Loader'
const ResumeSkills = () => {
    const { data,isLoading } = useGetResSkillQuery()
    const [createSkill] = useCreateSkillMutation()
    const [updateSkills] = useUpdateSkillsMutation()
    const [isEditable, setIsEditable] = useState(false)
    const [skill, setSkills] = useState([])

    useEffect(() => {
        if (data?.data[0]?.skill_name && data?.data[0]?.skill_name.length > 0) {
            setSkills(data?.data[0]?.skill_name)
        } else {
            setSkills([
                { skill: 'Skill Name' }
            ])
        }
    }, [data])

    const handleSkillChange = (e, index) => {
        const newSkill = [...skill]
        newSkill[index] = {
            ...newSkill[index],
            skill: e.target.value
        }
        setSkills(newSkill)
    }

    const addSkills = () => {
        setSkills([...skill, { skill: 'Skill Name' }])
    }

    const handlerResSkill = async (e) => {
        e.preventDefault()
        let validateField = skill.every((item) => item.skill === '')
        if (validateField) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let allSkills = { skill_name: skill }
            const data = await createSkill(allSkills)
            if (data) {
                toast.success("Skill added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
                return
            } else {
                toast.error("something went wrong try again!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

    const handlerUpdateResSkill = async (e) => {
        e.preventDefault()
        let validateField = skill.every((item) => item.skill === '')
        if (validateField) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let allSkills = { skill_name: skill }
            const data = await updateSkills(allSkills)
            if (data) {
                setIsEditable(false)
                return
            } else {
                toast.error("something went wrong try again!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

    const handlerUpdatedSkill = async (skill) => {
            let allSkills = { skill_name: skill }
            const data = await updateSkills(allSkills)
            if (data) {
                setIsEditable(false)
                return
            } else {
                toast.error("something went wrong try again!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
    }

    const handlerRemoveSkill = (i) => {
        setSkills((prev) => { 
           const mostRecent = prev.filter((_, index) => index !== i)
           handlerUpdatedSkill(mostRecent)
           return mostRecent
        })
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold pl-10 text-[#fff]'>
                    Skills
                </div>
                <div className='flex gap-2 ml-10'>
                    {isLoading ? <div className='flex items-center justify-center w-full'><Loader/></div> : skill.map((skill, index) => (
                        <>
                            <div className={`flex gap-1 items-center border border-solid border-[#fff] rounded-md text-sm px-[3px] py-[2px] outline-none text-[#fff] ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                onFocus={() => setIsEditable(!isEditable)}>
                                <ContentEditable
                                    html={skill.skill}
                                    onChange={(e) => handleSkillChange(e, index)}
                                    placeholder='Skill Name'

                                />
                                {isEditable && <X size={"15px"}
                                    className='hover:bg-[rgba(247,249,249,0.1)] hover:rounded-md cursor-pointer'
                                    onClick={() => handlerRemoveSkill(index)}
                                />}
                            </div>
                        </>
                    ))}
                </div>
                {(isEditable && data?.data?.length === 0) &&
                    <div className='w-full flex items-end justify-end mt-3 pl-10'>
                        <Button className="h-[32px] " onClick={handlerResSkill}>
                            Save
                        </Button>
                    </div>
                }
                {(isEditable && data?.data[0]?.skill_name.length > 0) &&
                    <div className='w-full flex items-end justify-end mt-3 pl-10'>
                        <Button className="h-[32px] " onClick={handlerUpdateResSkill}>
                            update
                        </Button>
                    </div>
                }
            </div>
            {isEditable &&
                <div className='w-full flex mt-3 pl-10'>
                    <div className='flex items-center w-full cursor-pointer' onClick={addSkills}>
                        <BadgePlus className='text-[#fff]' />
                        <hr className='border border-[#fff] border-solid w-full' />
                    </div>
                </div>
            }
        </>
    )
}

export default ResumeSkills
