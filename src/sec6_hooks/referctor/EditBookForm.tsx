import React, { useState } from "react";
import { useBookDispatch } from "../context/BookContext";
import { Input, Button } from "@mui/material";

type EditBookFormProps = {
  type: string;
  book: {
    id: number;
    title: string;
    author: string;
    pubYear: number;
    editing: boolean;
  };
  initialValue: string | number;
};

const EditBookForm = ({ type, book, initialValue }: EditBookFormProps) => {
  const [value, setValue] = useState(initialValue);
  const [editToggle, setEditToggle] = useState(false);
  const dispatch = useBookDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    let updatedFields = {
      id: book.id,
      title: book.title,
      author: book.author,
      pubYear: book.pubYear,
      editing: true,
    };

    if (type === "text" && initialValue === book.title) {
      updatedFields.title = value as string;
    } else if (type === "text" && initialValue === book.author) {
      updatedFields.author = value as string;
    } else if (type === "number") {
      updatedFields.pubYear = value as number;
    }
    dispatch({ type: "EDIT_BOOK", payload: updatedFields });
    setValue(initialValue);
    editToggleHandler();
  };

  const editToggleHandler = () => {
    setEditToggle((prev) => !prev);
  };
  return (
    <>
      {editToggle && (
        <>
          <Input
            style={{
              margin: 10,
            }}
            type={type}
            value={value}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="success"
            style={{ margin: 10 }}
            onClick={handleSubmit}
          >
            編集完了
          </Button>
        </>
      )}
      {editToggle ? (
        ""
      ) : (
        <Button
          variant="contained"
          style={{ margin: 10 }}
          onClick={editToggleHandler}
        >
          編集
        </Button>
      )}
    </>
  );
};

export default EditBookForm;
