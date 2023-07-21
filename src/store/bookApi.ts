import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "http://localhost:5000/";

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    fetchBooks: builder.query({
      query: () => "/books",
    }),
    addNewBook: builder.mutation({
      query: (newBookData) => ({
        url: "/books",
        method: "POST",
        body: newBookData,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, ...bookData }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: bookData,
      }),
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchBooksQuery,
  useAddNewBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
