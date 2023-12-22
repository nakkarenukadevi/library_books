import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookData = () => {
  let storedata = useSelector((state) => state.books);

  let params = useParams();
  // let book = storedata.books.filter((book) => {
  //   if (book.Isbno == parmas.id) {
  //     return true;
  //   }
  //   return false;
  // });
  let bookdata = {};
  storedata.books.forEach((book) => {
    if (book.Isbno == params.id) {
      bookdata = book;
    }
  });

  return (
    <div
      className="grid grid-cols-3 gap-2 mt-10 font-serif  font-bold text-xl"
      key={bookdata.Isbno}
    >
      <div>
        <img
          src={bookdata.imageUrl}
          style={{ width: "500px", height: "500px" }}
          alt="bookdata"
        />
      </div>
      <div className="col-span-2 gap-10">
        <div className="text-5xl m-10">{bookdata.name}</div>
        <div>Price: {bookdata.price}</div>

        <div>aviliblity: {bookdata.aviliblity}</div>
        <div>row: {bookdata.row}</div>
        <div>self: {bookdata.self}</div>
        <div>description: {bookdata.description}</div>
        <div>
          qrcode:
          <div>
            <img src={bookdata.qrcode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookData;
