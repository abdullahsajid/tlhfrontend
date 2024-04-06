import React, { useEffect, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { X, BadgePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import Loader from 'src/components/Loader/Loader'
import { useGetInterestQuery, useUpdateInterestMutation, usePostInterestMutation } from 'src/features/Resume/ResumeInterests/interestApis'
import toast from 'react-hot-toast'
const ResumeInterest = () => {
    const [isEditable, setIsEditable] = useState(false)
    const [Interests, setInterest] = useState([])
    const { data, isLoading } = useGetInterestQuery()
    const [updateInterest] = useUpdateInterestMutation()
    const [postInterest] = usePostInterestMutation()

    useEffect(() => {
        if (data?.data[0]?.interest_name && data?.data[0]?.interest_name.length > 0) {
            setInterest(data?.data[0]?.interest_name)
        } else {
            setInterest([
                { interest: '' }
            ])
        }
    }, [data])

    const handlerInterestChange = (e, index) => {
        const newInterest = [...Interests]
        newInterest[index] = {
            ...newInterest[index],
            interest: e.target.value
        }
        setInterest(newInterest)
    }

    const handlerUpdateInterest = async (val) => {
        let interest = { interest_name: val }
        const data = await updateInterest(interest)
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

    const handlerRemoveInterest = (index) => {
        setInterest((interest) => {
            const mostRecent = interest.filter((_, i) => i !== index)
            handlerUpdateInterest(mostRecent)
            return mostRecent
        })
    }

    const handlerResInterest = async (e) => {
        e.preventDefault()
        let validateField = Interests.every((item) => item.interest === '')
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
            let allInterest = { interest_name: Interests }
            const data = await postInterest(allInterest)
            if (data) {
                toast.success("Interest added!", {
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

    const handlerUpdateResInterest = async (e) => {
        e.preventDefault()
        let validateField = Interests.every((item) => item.interest === '')
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
            let allInterest = { interest_name: Interests }
            const data = await updateInterest(allInterest)
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

    const addInterest = () => {
        setInterest([...Interests, { interest: '' }])
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold text-[#000]'>
                    Interests
                </div>
                <div className='flex gap-2 flex-wrap'>
                    {isLoading ? <div className='flex items-center justify-center w-full'><Loader /></div> :
                        Interests.map((int, index) => (
                            <div key={index}>
                            <>
                                <div  className={`flex gap-1 items-center border border-solid border-[#000] rounded-md text-sm px-[3px] py-[2px] outline-none text-[#000] ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    onFocus={() => setIsEditable(!isEditable)}>
                                    <ContentEditable
                                        html={int.interest}
                                        onChange={(e) => handlerInterestChange(e, index)}
                                        placeholder='Your Interest'

                                    />
                                    {isEditable && <X size={"15px"}
                                        className='hover:bg-[rgba(247,249,249,0.1)] hover:rounded-md cursor-pointer'
                                        onClick={() => handlerRemoveInterest(index)}
                                    />}
                                </div>
                            </>
                            </div>
                        ))}
                </div>
                {(isEditable && data?.data?.length === 0) &&
                    <div className='w-full flex items-end justify-end mt-3 pl-10'>
                        <Button className="h-[32px] " onClick={handlerResInterest}>
                            Save
                        </Button>
                    </div>
                }
                {(isEditable && data?.data[0]?.interest_name.length > 0) &&
                    <div className='w-full flex items-end justify-end mt-3 pl-10'>
                        <Button className="h-[32px] " onClick={handlerUpdateResInterest}>
                            update
                        </Button>
                    </div>
                }
            </div>
            {isEditable &&
                <div className='w-full flex mt-3'>
                    <div className='flex items-center w-full cursor-pointer' onClick={addInterest}>
                        <BadgePlus />
                        <hr className='border border-[#000] border-solid w-full' />
                    </div>
                </div>
            }
        </>
    )
}

export default ResumeInterest
