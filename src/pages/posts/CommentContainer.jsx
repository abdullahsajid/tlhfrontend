import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commentCandidate } from '../../features/Comments/candidateComment/candCommService'
import Comments from './Comments'
import toast from 'react-hot-toast'
import { getCommentCandidate } from '../../features/Comments/candidateComment/getComments/getCommentService'
import { Input } from '../../components/ui/input'
import { Button } from 'src/components/ui/button'

const CommentContainer = ({ id, avatar }) => {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.userProfiles?.profiles?.data)
    const comments = useSelector((state) => state.getComments?.getComments?.data)

    const handleComment = async () => {
        if (comment == '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(commentCandidate({ id, comment }))
            if (data) {
                setComment('')
                toast.success("comment added", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getCommentCandidate({ id }))
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
            <div className='flex flex-col bg-[#FFF] p-2 rounded-md gap-y-3 border-2 border-dashed border-[#f6f6f7] 
        shadow-md w-full hover:border-[#383838] transition-all'>
                <div className='px-4 pt-4 pb-4'>
                    <div className="flex items-center">
                        <div className='me-3 flex items-center min-w-[40px]'>
                            <img src={avatar} alt=""
                                className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
                        </div>
                        <div className='flex justify-between items-center grow'>
                            <div className='shrink grow w-full'>
                                <Input type="text" className='w-full outline-none bg-[#F2F2F2] py-2 px-1 border border-solid border-[#e5e7eb] rounded'
                                    placeholder='Reply here!' value={comment} onChange={(e) => setComment(e.target.value)} />
                            </div>
                            <div className='ms-2'>
                                <Button className='border-none outline-none px-3 py-1 rounded-md text-white' onClick={handleComment}>Reply</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {comments && comments?.comments?.map((value, i) => {
                const profileData = profile.find((val) => val?.user_id == value?.userId)
                return <Comments content={value.comment}
                    date={value.createdAt}
                    avatar={profileData.avatar_url}
                    name={profileData.name}
                    key={i}
                />
            })}
        </>
    )
}

export default CommentContainer
