import React, { useState } from "react";
import { useBookDispatch } from "../context/BookContext";
import { Input, Button } from "@mui/material";

const AddBookForm = () => {
  const [titleValue, setTitleValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [pubValue, setPubValue] = useState<null | number>(null);
  const dispatch = useBookDispatch();

  const addTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleValue(e.target.value);
  const addAuthorHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthorValue(e.target.value);
  const addPubYearHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPubValue(Number(e.target.value));

  const createBook = () => {
    dispatch({
      type: "ADD_BOOK",
      payload: {
        id: Math.random(),
        title: titleValue,
        author: authorValue,
        pubYear: pubValue!,
        editing: false,
      },
    });
    setTitleValue("");
    setAuthorValue("");
    setPubValue(0);
  };

  return (
    <>
      <Input
        style={{
          margin: 20,
        }}
        type="text"
        placeholder="タイトル"
        onChange={addTitleHandler}
        value={titleValue}
      />
      <Input
        style={{
          margin: 20,
        }}
        type="text"
        placeholder="著者"
        onChange={addAuthorHandler}
        value={authorValue}
      />
      <Input
        style={{
          margin: 20,
        }}
        type="number"
        placeholder="出版年"
        onChange={addPubYearHandler}
        value={pubValue!}
      />
      <Button
        variant="contained"
        color="success"
        style={{ margin: 50 }}
        onClick={createBook}
      >
        書籍を登録
      </Button>
    </>
  );
};

export default AddBookForm;
