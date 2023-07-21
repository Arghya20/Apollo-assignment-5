import { createApi, fetchBaseQuery } from "@reduxjs/toolkit-query/react";

// Replace 'YOUR_API_URL' with the actual URL of your backend API
const API_URL = "YOUR_API_URL";

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    fetchBooks: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useFetchBooksQuery } = bookApi;
