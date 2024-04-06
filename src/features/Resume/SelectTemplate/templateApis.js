import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const templateApi = createApi({
  reducerPath: "template",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["template"],
  endpoints: (builder) => ({
    postTemplate: builder.mutation({
      query: (data) => {
        const token = cookie.get("token");
        return {
          url: `candidate/setTemplates`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: ["template"],
    }),
  }),
});

export const { usePostTemplateMutation } = templateApi;
