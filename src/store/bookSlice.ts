import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Replace 'YOUR_API_URL' with the actual URL of your backend API
const API_URL = "YOUR_API_URL";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch(`${API_URL}/books`);
  const data = await response.json();
  return data;
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
