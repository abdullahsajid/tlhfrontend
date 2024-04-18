import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { XSquare } from 'lucide-react'
import { setToggleItem } from 'src/features/skillAssessment/AssessmentSlice'

const ResultAssessment = () => {
    const dispatch = useDispatch()
    const res = useSelector((state) => state.assessment.resultRes)

    return (
        <div className='fixed top-0 flex justify-center items-center w-screen h-full transition-all z-[9999] custom-bg-op'>
            <div className='min-w-[400px] max-w-[80vw] h-[450px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#fff] rounded-md border border-solid border-[#f6f6f7]
            shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
                <div className='shrink grow  transition-all relative p-5'>
                    <div className='flex items-end justify-end w-full' onClick={() => dispatch(setToggleItem(false))}>
                        <XSquare />
                    </div>
                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className='text-[55px] font-extrabold'>{res[0]?.score}</div>
                        <div className='text-lg font-bold'>Congratulation</div>
                        <div className='text-base font-bold'>{res[0]?.badge}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultAssessment
