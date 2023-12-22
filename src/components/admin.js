import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewbook } from "./store/bookSlice";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode";

const Admin = () => {
  let [addbook, setaddbook] = useState({
    name: "",
    Isbno: "",
    row: "",
    catagory: "",
    description: "",
    price: "",
    self: "",
    imageUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71NM33ZCE1L._SL1000_.jpg",
    qrcode: "",
  });

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleaddbook = () => {
    dispatch(addNewbook(addbook));
    navigate("/");
  };
  const generateQR = async (text) => {
    try {
      setaddbook({
        ...addbook,
        qrcode: await QRCode.toDataURL(text),
        Isbno: text,
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
                value={addbook.name}
                onChange={(e) => {
                  setaddbook({ ...addbook, name: e.target.value });
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
                value={addbook.Isbno}
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
                value={addbook.price}
                onChange={(e) => {
                  setaddbook({ ...addbook, price: e.target.value });
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
                value={addbook.row}
                onChange={(e) => {
                  setaddbook({ ...addbook, row: e.target.value });
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
                value={addbook.self}
                onChange={(e) => {
                  setaddbook({ ...addbook, self: e.target.value });
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
                value={addbook.catagory}
                onChange={(e) => {
                  setaddbook({ ...addbook, catagory: e.target.value });
                }}
                className="border-2 border-black"
              />
            </td>
          </tr>
          <tr>
            <td> description:</td>
            <td>
              <input
                type="text"
                name="catagory"
                placeholder="enter book catagory"
                value={addbook.description}
                onChange={(e) => {
                  setaddbook({ ...addbook, description: e.target.value });
                }}
                className="border-2 border-black"
              />
            </td>
          </tr>
          <tr>
            <td> Qrcode:</td>
            <td>
              <img src={addbook.qrcode} alt="qrcode" />
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  handleaddbook();
                }}
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

export default Admin;
