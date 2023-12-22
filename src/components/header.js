import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBook } from "../components/store/bookSlice";
import { Link } from "react-router-dom";
import Scan from "../scan";

const Header = () => {
  let [search, setSearch] = useState("");

  let storedata = useSelector((state) => state.books);
  let dispatch = useDispatch();

  const handelSearchdata = () => {
    let searcedBooks = storedata.books.filter((book) => {
      if (book.Isbno == search || book.name == search) {
        return true;
      }
      return false;
    });
    let Search = {
      search: search,
      searchParam: searcedBooks,
    };
    dispatch(searchBook(Search));
  };

  return (
    <div className="bg-black  text-center p-3">
      <div className="flex justify-center items-center">
        <div>
          <input
            type="text"
            name="search"
            className="search p-3 m-3"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              handelSearchdata();
            }}
            className="bg-blue-600 text-white p-3 mr-3"
          >
            Search
          </button>
        </div>
        <div>
          <Link to="admin">
            <button className="bg-blue-600 text-white p-3 mr-4">Admin</button>
          </Link>
        </div>
        <div>
          <Link to="scan">
            <button className="bg-blue-600 text-white p-3">scan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
