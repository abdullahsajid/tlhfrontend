import React, { lazy, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRetrieveMcqsQuery } from 'src/features/skillAssessment/AssessmentApis'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useCalculateResultMutation } from 'src/features/skillAssessment/AssessmentApis'
import { useDispatch, useSelector } from 'react-redux'
import { setToggleItem,setRes} from 'src/features/skillAssessment/AssessmentSlice'

const Mcqs = () => {
    const dispatch = useDispatch()
    const togglePanel = useSelector((state) => state.assessment.togglePanel)
    const navigation = useNavigate()
    const [calculateResult] = useCalculateResultMutation()
    const { id } = useParams()
    let payload = { id: id }
    const { data } = useRetrieveMcqsQuery(payload)
    const [answerPayload, setAnswerPayload] = useState([])
    //console.log(data?.data[0]?.mcqsQues);
    
    const handlerRadioChange = (e, index, i) => {
        const updateOptions = [...answerPayload]
        const answerId = data?.data[0]?.mcqsQues[index].sqId
        const answer = data?.data[0]?.mcqsQues[index].options[i].option

        const check = updateOptions.findIndex((item) => item.id === answerId)

        if (check === -1) {
            updateOptions.push({ id: answerId, answer: answer })
        } else {
            updateOptions[check].answer = answer
        }
        setAnswerPayload(updateOptions)
    }

    const handlerAnswerSubmit = async (e) => {
        e.preventDefault()
        let validate = answerPayload.every((item) => {
            return item.answer !== '' && item.answer !== undefined && item.answer !== null && item.id !== '' && item.id !== undefined && item.id !== null
        })
        if (validate === false) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let payload = { optionPayload: answerPayload, skill_id: id }
            const { data } = await calculateResult(payload)
            console.log(data);
            if (data.data.length > 0) {
                toast.success("Assessment created successfully", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(setToggleItem(!togglePanel))
                dispatch(setRes(data.data))
                navigation("/home")
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
        <>
            <div className='py-6 px-10 transition-all w-full flex flex-col gap-3 mt-5'>
                {data?.data[0]?.mcqsQues?.map((item, index) => (
                    <div className='flex flex-col bg-[#fff] p-3 rounded-lg'>
                        <div className='font-bold pl-5 mb-3 text-base'>Question {index + 1}</div>
                        <div className='flex flex-row items-center'>
                            <div className='font-extrabold text-base'>{index + 1}. </div>
                            <div className='ml-2 font-bold text-base'>{item.question}</div>
                        </div>
                        {item.options.map((option, i) => (
                            <div key={i} className='flex flex-row items-center mt-3 ml-4'>
                                <div className='font-bold mr-2'>{String.fromCharCode(65 + i)}. </div>
                                <div className='w-full flex items-center justify-between'>
                                    <div>{option.option}</div>
                                    <Input
                                        type='radio'
                                        className='ml-2'
                                        name={`question_${index}`}
                                        onChange={(e) => handlerRadioChange(e, index, i)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className='w-full flex items-end justify-end mt-3 pl-10'>
                    <Button className="h-[32px]" onClick={handlerAnswerSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Mcqs
