import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const orgApis = createApi({
    reducerPath:'orgapis',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    endpoints:(builder) => ({
        createJob:builder.mutation({
            query:(data) => {
                const token = cookie.get("token");
                return {
                    url:`organization/createJob/${data.id}`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                    credentials: "include",
                    body:data.job
                }
            }
        })
    })
})

export const {useCreateJobMutation} = orgApis