import React from 'react'
import { Banknote,MapPin,LaptopMinimal,MailPlus} from 'lucide-react';
import { useSummonProjectByIdQuery,useSummonProfileQuery } from 'src/features/Projects/getProjectsApis';
import { useNavigate, useParams } from 'react-router-dom';
import * as moment from 'moment';
import Loader from 'src/components/Loader/Loader';
import { useSelector } from 'react-redux';
import { useCreateChatsMutation } from 'src/features/chats/chatApis';
import toast from 'react-hot-toast';

const ProjectDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data} = useSummonProjectByIdQuery(id)
    const [createChats] = useCreateChatsMutation()
    const userData = useSelector((state) => state.login.loginUser.data)
    const {data:clientData,isLoading} = useSummonProfileQuery(data?.data?.user_id)
    // console.log("clientData",clientData);

    const handlerChatMessage = async (sender,user) => {
        let userPayload = {chatname:'sender',sender_id:sender,your_id:user}
        const userDetails = await createChats(userPayload)
        // console.log(userDetails.data.data);
        // userDetails.data.data.exist
        if(userDetails?.data?.data?.exist){
            toast.success(`${userDetails.data.data.message}`,{ 
                style:{
                  backgroundColor:'#f6f6f7',
                  border:'3px solid #fff',
                  boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }})
            navigate(`/message/${userDetails?.data?.data?.exist[0]?.chatId}/${userDetails?.data?.data?.exist[0]?.profile.id}`)
            return
        }else if(userDetails?.data?.data){
            toast.success("chat created!",{ 
                style:{
                  backgroundColor:'#f6f6f7',
                  border:'3px solid #fff',
                  boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }})
            navigate(`/message/${userDetails?.data?.data[0]?.chatId}/${userDetails?.data?.data[0]?.profile.id}`)
            return
        }
        // console.log("userDetails",userDetails);
    }
  return (
    <div className='py-6 px-10 transition-all w-full'>
        <div className='flex flex-col gap-2 mt-3'>
            <div className='text-[30px]'>{data?.data?.project_title}</div>
            <div>
                <div className='text-[12px]'>post {moment(data?.data?.createdAt).fromNow()}</div>
            </div>
            <div>{data?.data?.project_description}</div>
            <div className='grid grid-cols-3 my-3'>
                <div className='flex flex-row gap-2'>
                    <Banknote/>
                    <span>${data?.data?.project_budget}</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <MapPin/>
                   <span>{data?.data?.project_type}</span> 
                </div>
                <div className='flex flex-row gap-2'>
                    <LaptopMinimal/>
                    <span>{data?.data?.project_status}</span>
                </div>
            </div>
            <hr className='border-2'/>
            <div className='flex flex-col'>
                <div className='mb-2 text-[22px] font-bold'>Expertise</div>
                <div className='flex flex-wrap gap-2'>
                    {data?.data?.project_skills.map((items, i) => (
                    <div
                        className='border-[#333] border flex items-center justify-center px-3 py-1 rounded-lg text-sm font-bold'key={i}>
                        {items.item}
                    </div>))}
                </div>
            </div>
            <hr className='border-2 mt-3'/>
        </div>
        <div className='flex flex-col mt-5'>
            <div className='font-bold text-[25px]'>About Client</div>
            {isLoading ? <div className='flex items-end justify-center w-full'><Loader/></div>:
            <div className='flex flex-col mt-3'>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={`${clientData?.data?.avatar_url}`} 
                                alt={`${clientData?.data?.name}`}
                                className='w-28 h-28 rounded-md object-cover'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <div className='font-semibold text-[23px]'>{clientData?.data?.name}</div>
                            <div className=''>{clientData?.data?.bio}</div>
                        </div>
                    </div>
                    {(userData?.id === clientData?.data?.user_id) ? '' : <div className='bg-slate-900 p-2 rounded-full border cursor-pointer hover:bg-slate-900/70'
                        onClick={() => handlerChatMessage(clientData?.data?.user_id,userData?.id)}>
                        <MailPlus className='text-[#fff]' size={'20px'}/>
                    </div>}
                </div>
                <div className='mt-3'>
                    <div className='text-[20px] font-semibold'>About</div>
                    <div>{clientData?.data?.about}</div>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default ProjectDetails
