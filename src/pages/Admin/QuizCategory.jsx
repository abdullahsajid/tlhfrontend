import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import toast from 'react-hot-toast'
import { useCreateAssessmentMutation } from 'src/features/skillAssessment/AssessmentApis'

const QuizCategory = () => {
    const navigation = useNavigate()
    const [category, setCategory] = useState('')
    const [createAssessment] = useCreateAssessmentMutation()

    const handlerCategory = async (e) => {
        e.preventDefault()
        if (category === '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let assessment = { st_type: category }
            const data = await createAssessment(assessment)
            if (data?.data?.data.length > 0) {
                toast.success("Assessment created successfully", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                navigation('/admin/createQues', { state: { st_id: data.data.data[0].st_id, st_category: data.data.data[0].st_type, user_id: data.data.data[0].user_id } })
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

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='flex flex-col gap-3 border-4 p-5 px-10 rounded-lg shadow-md'>
                <Label htmlFor="category" className="mb-3 font-bold">
                    Add Category
                </Label>
                <Input
                    type="text"
                    id='category'
                    className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <Button onClick={handlerCategory}>add</Button>
            </div>
        </div>
    )
}

export default QuizCategory

