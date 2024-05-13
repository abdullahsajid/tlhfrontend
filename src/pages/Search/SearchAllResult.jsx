import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProfilesBySearchAccQuery,useSearchResultQuery } from 'src/features/Search/searchApis'
import Skeleton from 'react-loading-skeleton'
const SearchAllResult = () => {
    const param = useParams()
    const navigation = useNavigate()
    const {data,isLoading} = useSearchResultQuery({para:param.name})
    const handlerProfileNavigator = (id,name,val) => {
        if(val === 'profile'){
            navigation(`/profile/${name}/${id}`)
        }else if(val === 'org_profile'){
            navigation(`/organization/${name}/${id}`)
        }
    }
  return (
    <div className='py-6 px-10 transition-all w-full'>
        {data?.data?.length === 0 ? <div className='font-bold text-[20px] flex items-center justify-center w-full mt-5'>Not Found!</div> :
            <div className='grid grid-cols-3 gap-3 w-full'>
                {data?.data?.map((item,index) => ( 
                    <div className='flex flex-col gap-2 border-2 border-[#D0D0D0] p-3 rounded-xl shadow-md'key={index}>
                        <div>
                            {isLoading ? <Skeleton width={200} height={180} style={{ border: "3px solid #fff" }} /> :<img src={item?.avatar_url} className='w-32 h-32 object-cover rounded-lg' />}
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-[24px] underline font-bold cursor-pointer' onClick={() => handlerProfileNavigator(item?.id,item?.org_name,item?.source_table)}>
                                {isLoading ? <Skeleton width={180} style={{ border: "3px solid #fff" }} /> : item?.org_name}
                            </div>
                            <div className='two-line-ellipsis'>
                                {isLoading ? <Skeleton width={250} style={{ border: "3px solid #fff" }} /> : item?.description}
                            </div>
                        </div>
                    </div>
            ))}
        </div>}
    </div>
  )
}

export default SearchAllResult
