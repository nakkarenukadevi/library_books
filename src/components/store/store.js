import { configureStore } from "@reduxjs/toolkit";
import bookReducers from "../store/bookSlice";
const store = configureStore({
  reducer: {
    books: bookReducers,
  },
});
export default store;
