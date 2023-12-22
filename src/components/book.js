import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addbooks } from "./store/bookSlice";
import mockdata from "../components/mockdata.json";
import BookCard from "./bookCard";

const Book = () => {
  let { books, Search } = useSelector((state) => state.books);
  let initialbooks = Search.search == "" ? books : Search.searchParam;

  let dispatch = useDispatch();
  useEffect(() => {
    if (books.length <= 0) {
      dispatch(addbooks(mockdata.books));
    }
  }, []);
  return (
    <div className="flex flex-wrap gap-14 justify-center mt-5">
      {initialbooks.map((book) => {
        return <BookCard book={book} key={book.Isbno} />;
      })}
    </div>
  );
};

export default Book;
