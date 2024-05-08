import React from "react";
import BookProvider from "../context/BookContext";
import BookList from "../referctor/BookList";
import AddBookForm from "../referctor/AddBookForm";

const Practice4 = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>書籍管理アプリ</h1>
      <BookProvider>
        <BookList />
        <AddBookForm />
      </BookProvider>
    </>
  );
};

export default Practice4;
