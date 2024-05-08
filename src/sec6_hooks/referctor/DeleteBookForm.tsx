import React from "react";
import { useBookDispatch } from "../context/BookContext";
import { Button } from "@mui/material";

type DeleteBookProps = {
  book: {
    id: number;
    title: string;
    author: string;
    pubYear: number;
    editing: boolean;
  };
};

const DeleteBookForm = ({ book }: DeleteBookProps) => {
  const dispatch = useBookDispatch();

  const deleteBook = () => {
    dispatch({
      type: "REMOVE_BOOK",
      payload: {
        id: book.id,
        title: book.title,
        author: book.author,
        pubYear: book.pubYear,
        editing: book.editing,
      },
    });
  };
  return (
    <>
      <Button
        variant="contained"
        color="error"
        sx={{ m: 3 }}
        onClick={deleteBook}
      >
        書籍を削除
      </Button>
    </>
  );
};

export default DeleteBookForm;
