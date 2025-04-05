
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api/transactions",
  credentials: "include", // Ensures cookies are sent with requests

});

export const transcationapi = createApi({
  reducerPath: "transcationapi",
  baseQuery,
  tagTypes: ["code"], // Defined tag types properly
  endpoints: (builder) => ({
    
    
    // User Registration
    sendMoney: builder.mutation({
      query: ({amount, date, images }) => ({
        method: "POST",
        url: "/sendmoney",
        body: {amount, date, images},
      }),
      invalidatesTags: ["code"],
    }),

    // User Login
    displayMoney: builder.query({
        
    query:()=>`/getdata`,
    invalidatesTags:["code"]


    }),
    

  }),
});

export const { 
 useSendMoneyMutation,
 useDisplayMoneyQuery


} = transcationapi;
