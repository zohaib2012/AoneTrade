// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const documentApi = createApi({
//   reducerPath: 'documentApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3000api/documents',
//     // Add auth token if needed
//     // prepareHeaders: (headers, { getState }) => {
//     //   const token = localStorage.getItem('token');
//     //   if (token) {
//     //     headers.set('authorization', `Bearer ${token}`);
//     //   }
//     //   return headers;
//     // }
//   }),
//   endpoints: (builder) => ({
//     uploadDocument: builder.mutation({
//       query: (formData) => ({
//         url: '/upload',
//         method: 'POST',
//         body: formData,
//         // Don't set Content-Type here, it's automatically set with proper boundary for FormData
//         formData: true,
//       }),
//       // You can add transformResponse logic if needed
//       transformResponse: (response) => response,
//     }),
//     // You can add other endpoints here like getDocuments, etc.
//     getDocuments: builder.query({
//       query: (userId) => `documents?userId=${userId}`,
//     }),
//   }),
// });

// export const {
//   useUploadDocumentMutation,
//   useGetDocumentsQuery
// } = documentApi;




import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  credentials: "include", // Ensures cookies are sent with requests

});

export const documentapi = createApi({
  reducerPath: "documentapi",
  baseQuery,
  tagTypes: ["code"], // Defined tag types properly
  endpoints: (builder) => ({


    // User Registration
    uploadDocument: builder.mutation({
      query: ({ documentType, document }) => ({
        method: "POST",
        url: "/documents/upload",
        body: { documentType, document },
      }),
      invalidatesTags: ["code"],
    }),

    // User Login
    sendDocument: builder.query({

      query: () => `/documents/getdata`,
      invalidatesTags: ["code"]


    }),


  }),
});

export const {
  useUploadDocumentMutation,
  useSendDocumentQuery


} = documentapi;
