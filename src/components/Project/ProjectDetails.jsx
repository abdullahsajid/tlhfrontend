import React from 'react'
import { Banknote,MapPin,LaptopMinimal } from 'lucide-react';
import { useSummonProjectByIdQuery,useSummonProfileQuery } from 'src/features/Projects/getProjectsApis';
import { useParams } from 'react-router-dom';
import * as moment from 'moment';
import Loader from 'src/components/Loader/Loader';

const ProjectDetails = () => {
    const {id} = useParams()
    const {data} = useSummonProjectByIdQuery(id)
    const {data:clientData,isLoading} = useSummonProfileQuery(data?.data?.user_id)
    
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
                <div className='flex items-center gap-2'>
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
