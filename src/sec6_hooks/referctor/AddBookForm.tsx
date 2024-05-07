import React, { useState } from "react";
import { useBookDispatch } from "../context/BookContext";

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
      <input
        type="text"
        placeholder="タイトル"
        onChange={addTitleHandler}
        value={titleValue}
      />
      <input
        type="text"
        placeholder="著者"
        onChange={addAuthorHandler}
        value={authorValue}
      />
      <input
        type="number"
        placeholder="出版年"
        onChange={addPubYearHandler}
        value={pubValue!}
      />
      <button onClick={createBook}>書籍を登録</button>
    </>
  );
};

export default AddBookForm;
