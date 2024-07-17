import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recommendApi = createApi({
    reducerPath:'recommendApi',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    endpoints:(builder) => ({
        recommendPosts:builder.query({
            query:(skills) => {
                return{
                    url:`rpy/recommend?skills=${skills.join(',')}`,
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            }
        })
    })
})

export const {useRecommendPostsQuery} = recommendApi
