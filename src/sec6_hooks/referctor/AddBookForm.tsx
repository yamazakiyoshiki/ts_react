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
    setPubValue(Number(e.target.value) || null);

  const createBook = () => {
    if (!titleValue || !authorValue || pubValue === null) {
      alert("全てのフィールドを入力してください。");
      return;
    }
    dispatch({
      type: "ADD_BOOK",
      payload: {
        id: Date.now(),
        title: titleValue,
        author: authorValue,
        pubYear: pubValue,
        editing: false,
      },
    });
    setTitleValue("");
    setAuthorValue("");
    setPubValue(null);
  };

  return (
    <>
      <Input
        sx={{ m: 2 }}
        type="text"
        placeholder="タイトル"
        onChange={addTitleHandler}
        value={titleValue}
      />
      <Input
        sx={{ m: 2 }}
        type="text"
        placeholder="著者"
        onChange={addAuthorHandler}
        value={authorValue}
      />
      <Input
        sx={{ m: 2 }}
        type="number"
        placeholder="出版年"
        onChange={addPubYearHandler}
        value={pubValue || ""}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 2 }}
        onClick={createBook}
      >
        書籍を登録
      </Button>
    </>
  );
};

export default AddBookForm;
