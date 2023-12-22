import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBook, Editbookadded } from "./store/bookSlice";
import { Link, useNavigate } from "react-router-dom";
import EditBook from "./editBook";
import QRCode from "qrcode";
import x_icon from "../components/x_icon.jpg";

const BookCard = (props) => {
  let {
    name,
    imageUrl,
    price,
    row,
    shelf,
    qrcode,
    catagory,
    description,
    Isbno,
  } = props.book;
  let [editpop, setEditpop] = useState(false);
  let [editbook, setEditbook] = useState(props.book);

  let storedata = useSelector((state) => state.books);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handleDelete = (Isbno) => {
    let Books = storedata.books.filter((book) => {
      if (book.Isbno == Isbno) {
        return false;
      }
      return true;
    });
    dispatch(DeleteBook(Books));
  };
  const generateQR = async (text) => {
    try {
      setEditbook({
        ...editbook,
        qrcode: await QRCode.toDataURL(text),
        Isbno: text,
      });
    } catch (err) {
      console.error(err);
    }
  };
  let handleEditdata = (Isbno) => {
    setEditpop(true);
  };
  let handleUpdatebook = () => {
    let Editedbook = storedata.books.map((book) => {
      if (book.Isbno == editbook.Isbno) {
        return { ...book, ...editbook };
      }
      return book;
    });
    dispatch(Editbookadded(Editedbook));
    setEditpop(false);
  };

  return (
    <div className="border-2 shadow-lg rounded-lg">
      <div>
        <Link to={"bookdata/" + Isbno}>
          <img src={imageUrl} style={{ width: "300px", height: "300px" }} />
        </Link>
      </div>
      <div className="grid justify-center gap-3 my-3  items-center font-bold font-serif ">
        <div>{name}</div>
        <div>Price: {price}</div>
      </div>
      <div className="flex justify-center items-center py-5 gap-10">
        <div>
          <button
            className="bg-blue-600 text-white font-serif font-bold px-8 py-4 rounded-lg "
            onClick={() => {
              handleEditdata(Isbno);
            }}
          >
            Edit
          </button>
        </div>
        <div>
          <button
            className="bg-blue-600 text-white font-serif font-bold px-8 py-4 rounded-lg"
            onClick={() => {
              handleDelete(Isbno);
            }}
          >
            Delet
          </button>
        </div>
      </div>
      {editpop ? (
        <div className="flex justify-center mt-10 text-2xl absolute top-32 left-1/4 bg-red-600 p-20">
          <div className="absolute top-3 right-2">
            <img
              src={x_icon}
              style={{ wdith: "30px", height: "30px" }}
              onClick={() => {
                setEditpop(false);
              }}
            />
          </div>
          <table className="font-bold">
            <tbody>
              <tr>
                <td> Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="enter book name"
                    value={editbook.name}
                    onChange={(e) => {
                      setEditbook({ ...editbook, name: e.target.value });
                    }}
                    className="border-2 border-black"
                  />
                </td>
              </tr>
              <tr>
                <td>Isbno:</td>
                <td>
                  <input
                    type="text"
                    name="Isbno"
                    placeholder="enter book Isbno"
                    value={editbook.Isbno}
                    onChange={(e) => generateQR(e.target.value)}
                    className="border-2 border-black"
                  />
                </td>
              </tr>
              <tr>
                <td> Price:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="enter book price"
                    value={editbook.price}
                    onChange={(e) => {
                      setEditbook({ ...editbook, price: e.target.value });
                    }}
                    className="border-2 border-black"
                  />
                </td>
              </tr>
              <tr>
                <td> row:</td>
                <td>
                  <input
                    type="text"
                    name="row"
                    placeholder="enter book row"
                    value={editbook.row}
                    onChange={(e) => {
                      setEditbook({ ...editbook, row: e.target.value });
                    }}
                    className="border-2 border-black"
                  />
                </td>
              </tr>
              <tr>
                <td> self:</td>
                <td>
                  <input
                    type="text"
                    name="self"
                    placeholder="enter book self"
                    value={editbook.self}
                    onChange={(e) => {
                      setEditbook({ ...editbook, self: e.target.value });
                    }}
                    className="border-2 border-black"
                  />
                </td>
              </tr>
              <tr>
                <td> catagory:</td>
                <td>
                  <input
                    type="text"
                    name="catagory"
                    placeholder="enter book catagory"
                    value={editbook.catagory}
                    onChange={(e) => {
                      setEditbook({ ...editbook, catagory: e.target.value });
                    }}
                    className="border-2 border-black"
                  />
                </td>
              </tr>
              <tr>
                <td> Qrcode:</td>
                <td>
                  <img src={editbook.qrcode} alt="qrcode" />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      handleUpdatebook();
                    }}
                    className="bg-blue-800 text-white px-3 py-4"
                  >
                    updatebook
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default BookCard;
