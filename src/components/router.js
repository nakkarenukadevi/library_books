import React from "react";

import App from "../App";
import Book from "./book";
import { createBrowserRouter } from "react-router-dom";
import Admin from "./admin";
import BookData from "./bookData";
import EditBook from "./editBook";
import Scan from "../scan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Book />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "bookdata/:id",
        element: <BookData />,
      },
      {
        path: "editbook/:id",
        element: <EditBook />,
      },
      {
        path: "scan",
        element: <Scan />,
      },
    ],
  },
]);
export default router;
