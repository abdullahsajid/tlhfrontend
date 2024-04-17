import React, { useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { Input } from '../../components/ui/input'
import { BadgePlus } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { useLocation,useNavigate } from 'react-router-dom'
import { useCreateQuestionMutation } from 'src/features/skillAssessment/AssessmentApis'
import toast from 'react-hot-toast'

const CreateQuestion = () => {
  const navigation = useNavigate()
  const location = useLocation()
  const [createQuestion] = useCreateQuestionMutation()
  const [isEditable, setIsEditable] = useState(false)
  const [question, setQuestion] = useState([
    {
      question: '',
      options: [
        { option: '' },
        { option: '' },
        { option: '' },
        { option: '' }
      ],
      answer: '',
      skill_id: location?.state?.st_id
    }
  ])

  const addQuestion = () => {
    setQuestion([...question, {
      question: '',
      options: [
        { option: '' },
        { option: '' },
        { option: '' },
        { option: '' }
      ],
      answer: '',
      skill_id: location?.state?.st_id
    }])
  }

  const handleQuestionChange = (e, index) => {
    const updateQuestion = [...question]
    updateQuestion[index].question = e.target.value
    setQuestion(updateQuestion)
  }

  const handleOptionsChange = (e, index, i) => {
    const updateOptions = [...question]
    updateOptions[index].options[i].option = e.target.value
    setQuestion(updateOptions)
  }

  const handleRadioChange = (e, index, i) => {
    const updateCorrectOption = [...question]
    updateCorrectOption[index].answer = question[index].options[i].option
    setQuestion(updateCorrectOption)
  }


  const handlerQuestion = async (e) => {
    e.preventDefault()
    if (question === '') {
      toast.error("please fill all fields!", {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
      return
    } else {
      let assessmentQues = { questionsData: question }
      const {data} = await createQuestion(assessmentQues)
      if (data.data.length > 0) {
        toast.success("Assessment created successfully", {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
        navigation("/admin")
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

  console.log(question);


  return (
    <div className='flex flex-col pt-[100px] px-16 w-full'>
      <div className='font-bold flex justify-center items-center mb-3 w-full text-[18px]'>Assessment Questions</div>
      <div className='border-[#333] border-2 flex flex-col gap-3 p-4 rounded-md'>
        {question.map((item, index) => (
          <div key={index}>
            <div className='flex flex-col'>
              <div className='font-bold pl-5 mb-3 text-[18px]'>Question {index + 1}</div>
              <div className='flex flex-row'>
                <div className='font-extrabold'>{index + 1}. </div>
                <ContentEditable
                  className={`font-semibold ml-2 outline-none w-full  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                  html={item.question}
                  onChange={(e) => handleQuestionChange(e, index)}
                  placeholder='Write your question here'
                  onFocus={() => setIsEditable(!isEditable)}
                />
              </div>
              {item.options.map((option, i) => (
                <div key={i} className='flex flex-row items-center mt-3 ml-4'>
                  <div className='font-bold'>{String.fromCharCode(65 + i)}. </div>
                  <ContentEditable
                    className={`font-semibold ml-2 outline-none w-full  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                    html={option.option}
                    onChange={(e) => handleOptionsChange(e, index, i)}
                    placeholder='Write your option here'
                    onFocus={() => setIsEditable(!isEditable)}
                  />
                  <Input
                    type='radio'
                    className='ml-2'
                    name={`question_${index}`}
                    onChange={(e) => handleRadioChange(e, index, i)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        {isEditable &&
          <div className='w-full flex mt-3'>
            <div className='flex items-center w-full cursor-pointer' onClick={addQuestion}>
              <BadgePlus />
              <hr className='border border-[#000] border-solid w-full' />
            </div>
          </div>
        }
        <div className='w-full flex items-end justify-end mt-3 pl-10'>
          <Button className="h-[32px]" onClick={handlerQuestion}>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateQuestion
