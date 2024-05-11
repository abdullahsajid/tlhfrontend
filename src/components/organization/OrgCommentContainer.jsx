import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import BtnLoader from 'src/components/Loader/BtnLoader'
import Loader from 'src/components/Loader/Loader'
import Comments from 'src/pages/posts/Comments'
import { useSummonCommentByIdQuery,usePostCommentMutation } from 'src/features/organizationApis/orgApis'
import toast from 'react-hot-toast'

const OrgCommentContainer = ({id}) => {
    const details = useSelector((state) => state.getOrgProfile.getOp.data)
    const {data,isLoading} = useSummonCommentByIdQuery({id})
    const [postComment] = usePostCommentMutation()
    // const {data:orgData} = useSummonOrgProfileQuery()
    const [comment,setComment] = useState('')
    const [btnLoading,setBtnLoader] = useState(false)
    
    const handlerComment = async () => {
        setBtnLoader(true)
        if(!comment.trim()){
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            setBtnLoader(false)
            return
        }else{ 
            const {data} = await postComment({id,comment})
            if(data){
                setComment('')
                setBtnLoader(false)
                toast.success("comment added", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
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
                            <img src={details?.avatar_url} alt=""
                                className='w-10 h-10 rounded-md bg-center bg-no-repeat bg-cover object-cover' />
                        </div>
                        <div className='flex justify-between items-center grow'>
                            <div className='shrink grow w-full'>
                                <Input type="text" className='w-full outline-none bg-[#F2F2F2] py-2 px-1 border border-solid border-[#e5e7eb] rounded'
                                    placeholder='Reply here!' value={comment} onChange={(e) => setComment(e.target.value)} />
                            </div>
                            <div className='ms-2'>
                                <Button className={`border-none outline-none px-3 py-1 rounded-md text-white ${btnLoading && "opacity-5"}`} 
                                    disabled={btnLoading}
                                    onClick={handlerComment}
                                >
                                    Reply {btnLoading && <BtnLoader/>}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading ? <div  className='mt-5'><Loader/></div> : data?.data?.map((value, i) => {
                // const profileData = profile.find((val) => val?.user_id == value?.userId)
                return <Comments content={value.comment}
                    date={value.createdAt}
                    // avatar={profileData.avatar_url}
                    // name={profileData.name}
                    key={i}
                />
            })}
        </>
  )
}

export default OrgCommentContainer
