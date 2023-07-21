import { createSlice } from '@reduxjs/toolkit';
import { bookApi } from './bookApi';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookApi.endpoints.fetchBooks.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(bookApi.endpoints.addNewBook.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(bookApi.endpoints.updateBook.fulfilled, (state, action) => {
      const { id, ...updatedBook } = action.payload;
      const index = state.list.findIndex((book) => book.id === id);
      if (index !== -1) {
        state.list[index] = { id, ...updatedBook };
      }
    });
    builder.addCase(bookApi.endpoints.deleteBook.fulfilled, (state, action) => {
      const bookId = action.meta.arg;
      state.list = state.list.filter((book) => book.id !== bookId);
    });
  },
});

export const selectAllBooks = (state) => state.books.list;

export default bookSlice.reducer;
