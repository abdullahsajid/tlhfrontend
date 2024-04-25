import React from 'react'
import * as moment from 'moment';
import { Link } from 'react-router-dom';

const ProjectCard = ({details}) => {
  return (
    <div className='flex flex-col gap-2 mt-5 border border-[#333] p-3 rounded-lg shadow-md'>
        <div className='flex flex-col'>
            <Link to={`/projects/${details.project_id}`} className='text-[20px]'>{details.project_title}</Link>
            <span className='text-[12px]'>posted {moment(details.createdAt)?.fromNow() }</span>
        </div>
        <div className='two-line-ellipsis'>
            {details.project_description}
        </div>
        <div className='flex gap-3 flex-wrap'>
            {details.project_skills.map((items, i) => (
                <div key={i} 
                    className='border-[#333] border flex items-center justify-center px-3 py-1 rounded-lg text-sm font-bold'>
                    {items.item}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectCard
