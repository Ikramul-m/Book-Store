import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowBook from "./Page/ShowBook";
import CreateBook from "./Page/CreateBook";
import EditBook from "./Page/EditBook";
import DeleteBook from "./Page/DeleteBook";
import Home from "./Page/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
