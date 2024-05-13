import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const getSearchApis = createApi({
    reducerPath:'search',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    endpoints:(builder) => ({
        searchResult:builder.query({
            query: ({para}) => {
                const token = cookie.get("token");
                return {
                    url: `candidate/search?q=${para}`,
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
                const token = cookie.get("token");
                return {
                    url: `candidate/getProfileBySearch/${id}`,
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
                const token = cookie.get("token");
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
                const token = cookie.get("token");
                return {
                    url: `candidate/getProfileBySearchAcc?q=${para}`,
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
