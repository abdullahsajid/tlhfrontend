import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const getSearchApis = createApi({
    reducerPath:'search',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_LOCAL_URL}`}),
    endpoints:(builder) => ({
        searchResult:builder.query({
            query: ({para}) => {
                const token = cookie.get("tlhtoken");
                return {
                    url: `/search?q=${para}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include',
                }
            }
        }),
        getUserProfileDetails:builder.query({
            query: ({id}) => {
                const token = cookie.get("tlhtoken");
                return {
                    url: `/getProfileBySearch/${id}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include',
                }
            }
        }),
        getOrgUserProfileDetails:builder.query({
            query: ({id}) => {
                const token = cookie.get("tlhtoken");
                return {
                    url: `organization/getProfileBySearch/${id}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include',
                }
            }
        }),
        getProfilesBySearchAcc:builder.query({
            query: ({para}) => {
                const token = cookie.get("tlhtoken");
                return {
                    url: `/getProfileBySearchAcc?q=${para}`,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'include',
                }
            }
        })
    })
})

export const {useSearchResultQuery,useGetUserProfileDetailsQuery,useGetOrgUserProfileDetailsQuery,useGetProfilesBySearchAccQuery} = getSearchApis
