import React,{useState} from 'react'
import { setOrgPostToggle } from 'src/features/skillAssessment/AssessmentSlice'
import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useSelector } from 'react-redux'
import { Textarea } from 'src/components/ui/textarea'
import { useCreateOrgPostMutation } from 'src/features/organizationApis/orgApis'
import BtnLoader from 'src/components/Loader/BtnLoader'

const OrgPost = () => {
    const dispatch = useDispatch()
    const [createOrgPost] = useCreateOrgPostMutation()
    const { data } = useSelector((state) => state.getOrgProfile.getOp)
    const [content,setContent] = useState('')
    const [btnLoader,setBtnLoader] = useState(false)

    const handlerOrgPost = async () => {
        setBtnLoader(true)
        if(!content.trim()){
            toast.error("Field are required to fill!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            setBtnLoader(false)
        }else{
            let id = data?.id
            let contentVal = {content:content}
            const details = {contentVal,id}
            const retrieve = await createOrgPost(details)
            if(retrieve.data.success === true){
                dispatch(setOrgPostToggle(false))
                setBtnLoader(false)
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
    }
  return (
    <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
        <div className='w-[680px] h-100 max-h-[90vh] min-h-[350px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
            shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
            <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
                <div className='flex items-center justify-between w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                    <div className='flex items-center gap-x-2'>
                        <div onClick={() => dispatch(setOrgPostToggle(false))} className='cursor-pointer rounded-full p-1 hover:hoverbg'><X /></div>
                        <div className='flex font-bold'>Create Post</div>
                    </div>
                    <div className={`flex justify-center gap-2 items-center bg-slate-900 hover:bg-slate-900/90 px-2 rounded-md text-slate-50 p-1 cursor-pointer ${btnLoader && "bg-slate-900/90"}`}
                        disabled={btnLoader}
                        onClick={handlerOrgPost}
                    >
                        create {btnLoader && <BtnLoader/>}
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-3 mx-3'>
                    <div className='flex items-center gap-2'>
                        <img src={`${!(data?.avatar_url) ? 'https://tlhfrontend.vercel.app/avatar-org.jpg' : data?.avatar_url}`} alt={`${data?.org_name}`} 
                            className='w-12 h-12 rounded-lg bg-center bg-no-repeat bg-cover' />
                        <div className='font-bold'>{data?.org_name}</div>
                    </div>
                    <div className='flex w-full'>
                        <Textarea
                            rows='5'
                            className="flex justify-center items-center p-2 rounded-md border-none border-[#e5e7eb] outline-none hoverbg w-full"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="write here"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrgPost
