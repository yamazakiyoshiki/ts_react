import React from "react";
import { useBook } from "../context/BookContext";
import EditBookForm from "./EditBookForm";

const BookList = () => {
  const books = useBook();
  return (
    <ul>
      <h1>書籍管理アプリ</h1>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>本のタイトル</h2>
            <div>{book.title}</div>
            <EditBookForm type="text" book={book} initialValue={book.title} />
            <h2>著者</h2>
            <div>{book.author}</div>
            <EditBookForm type="text" book={book} initialValue={book.author} />
            <h2>出版年</h2>
            <div>{book.pubYear}</div>
            <EditBookForm
              type="number"
              book={book}
              initialValue={book.pubYear}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default BookList;
