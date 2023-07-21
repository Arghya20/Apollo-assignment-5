import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit-query/react";
import { combineReducers } from "redux";
import { bookApi } from "./bookApi";
import bookReducer from "./bookSlice";

const rootReducer = combineReducers({
  books: bookReducer,
  [bookApi.reducerPath]: bookApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

setupListeners(store.dispatch);

export default store;
