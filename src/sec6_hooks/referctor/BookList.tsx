import React from "react";
import { useBook } from "../context/BookContext";
import EditBookForm from "./EditBookForm";
import DeleteBookForm from "./DeleteBookForm";
import { Box, List, ListItem } from "@mui/material";

const BookList = () => {
  const books = useBook();
  return (
    <List sx={{ bgcolor: "gray", m: 2 }}>
      {books.map((book) => (
        <ListItem key={book.id} sx={{ mb: 2 }}>
          <Box sx={{ mb: 2 }}>
            <h2>本のタイトル</h2>
            <Box>{book.title}</Box>
            <EditBookForm type="text" book={book} initialValue={book.title} />
            <h2>著者</h2>
            <Box>{book.author}</Box>
            <EditBookForm type="text" book={book} initialValue={book.author} />
            <h2>出版年</h2>
            <Box>{book.pubYear}</Box>
            <EditBookForm
              type="number"
              book={book}
              initialValue={book.pubYear.toString()}
            />
            <DeleteBookForm book={book} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
