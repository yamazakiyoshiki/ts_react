import React from "react";
import BookProvider from "../context/BookContext";
import BookList from "../referctor/BookList";
import AddBookForm from "../referctor/AddBookForm";

const Practice4 = () => {
  return (
    <BookProvider>
      <BookList />
      <AddBookForm />
    </BookProvider>
  );
};

export default Practice4;
