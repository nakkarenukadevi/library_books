import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QRCode from "qrcode";

const EditBook = (props) => {
  console.log(props.book);

  let storedata = useSelector((state) => state.books);
  let parmas = useParams();
  let book = storedata.books.filter((book) => {
    if (book.Isbno == parmas.id) {
      return true;
    }
  });
  let [editbook, setEditbook] = useState(book);
  const generateQR = async (e) => {
    try {
      setEditbook({
        ...editbook,
        qrcode: await QRCode.toDataURL(e.target.value),
        Isbno: e.target.value,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center mt-10 text-2xl">
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
                onChange={(e) => generateQR(e)}
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
                onClick={() => {}}
                className="bg-blue-800 text-white px-3 py-4"
              >
                Addbook
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditBook;
