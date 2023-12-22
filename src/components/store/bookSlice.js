import { createSlice } from "@reduxjs/toolkit";
let bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    Search: {
      search: "",
      searchParam: "",
    },
  },
  reducers: {
    addbooks: (state, action) => {
      state.books = action.payload;
    },
    DeleteBook: (state, action) => {
      state.books = action.payload;
    },
    searchBook: (state, action) => {
      state.Search = action.payload;
    },
    addNewbook: (state, action) => {
      state.books.push(action.payload);
    },
    Editbookadded: (state, action) => {
      state.books = action.payload;
    },
  },
});
export let { addbooks, DeleteBook, searchBook, addNewbook, Editbookadded } =
  bookSlice.actions;
export default bookSlice.reducer;
