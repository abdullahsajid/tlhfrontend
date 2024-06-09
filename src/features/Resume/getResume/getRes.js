import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getRes = createApi({
    reducerPath:'getRes',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    endpoints:(builder) => ({
        getAllResource:builder.query({
            query:({name}) => {
                return {
                    url:`/myResume/${name}`,
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                    credentials:'include'
                }
            },
        }),
    })
}) 

export const {useGetAllResourceQuery} = getRes;