import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getRes = createApi({
    reducerPath:'getRes',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    endpoints:(builder) => ({
        getAllResource:builder.query({
            query:({name}) => {
                return {
                    url:`candidate/myResume/${name}`,
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