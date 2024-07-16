import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recommendApi = createApi({
    reducerPath:'recommendApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://52.165.25.158:5000`}),
    endpoints:(builder) => ({
        recommendPosts:builder.query({
            query:(skills) => {
                return{
                    url:`recommend?skills=${skills.join(',')}`,
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
