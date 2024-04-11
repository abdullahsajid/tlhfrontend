import React from 'react'

const Projects = ({ data }) => {
    return (
        data?.resProj ? (
            <div className='flex flex-col mt-5'>
                <div className='text-xl font-bold'>Projects</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                    {data?.resProj.map((item, index) => (
                        <div className='flex flex-col border px-3 py-1 rounded-lg shadow' key={index}>
                            <div className='font-semibold tracking-tight text-base'>
                                <a href={`${item.plink}`} className='hover:underline'>{item.pname}</a>
                            </div>
                            <div className='text-[#666666] text-xs font-mono mt-2'>
                                {item.pdesc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>) : ""
    )
}

export default Projects
