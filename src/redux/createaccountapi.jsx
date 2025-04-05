
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include", // Ensures cookies are sent with requests

});

export const createaccountapi = createApi({
    reducerPath: "createaccountapi",
    baseQuery,
    tagTypes: ["accounts"], // Defined tag types properly
    endpoints: (builder) => ({


        // User Registration
        createAccount: builder.mutation({
            query: ({ leverage, currency, password, accountType }) => ({
                
                method: "POST",
                url: "/account/create",
                body: { leverage, currency, password, accountType },
            }),
            invalidatesTags: ["accounts"],
        }),
       
        accountsdetail: builder.query({
            query: () => "/account/details",
            providesTags: ["accounts"], // Changed from invalidatesTags to providesTags
        }),

        accountdetail:builder.query({
            query:(id)=>`/account/detail/${id}`,
            invalidatesTags:["accounts"]
        })

    }),
});

export const {

useCreateAccountMutation,
useAccountsdetailQuery,
useAccountdetailQuery
} = createaccountapi;
